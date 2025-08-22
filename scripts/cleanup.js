#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const mode = args[0] || 'auto';

console.log('🧹 Starting code cleanup...\n');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed!\n`);
    return true;
  } catch (error) {
    console.log(`⚠️  ${description} had some issues (this is normal)\n`);
    return false;
  }
}

switch (mode) {
  case 'auto':
    // Auto-remove unused imports and format code
    runCommand('npm run lint', 'Removing unused imports and fixing auto-fixable issues');
    runCommand('npm run format', 'Formatting code with Prettier');
    break;
    
  case 'strict':
    // More aggressive cleanup - you might need to manually fix some issues
    runCommand('npm run lint', 'Removing unused imports and fixing auto-fixable issues');
    runCommand('npm run format', 'Formatting code with Prettier');
    console.log('🔍 Running strict lint check...');
    execSync('npm run lint:check', { stdio: 'inherit' });
    break;
    
  case 'check':
    // Just check current status
    console.log('🔍 Checking current code status...\n');
    execSync('npm run lint:check', { stdio: 'inherit' });
    break;
    
  case 'format':
    // Just format code
    runCommand('npm run format', 'Formatting code with Prettier');
    break;
    
  default:
    console.log('❓ Unknown mode. Available modes:');
    console.log('  auto   - Remove unused imports and format (default)');
    console.log('  strict - Auto-cleanup + show remaining issues');
    console.log('  check  - Show current lint status');
    console.log('  format - Just format code');
    console.log('\nUsage: npm run cleanup [mode]');
    process.exit(1);
}

console.log('🎉 Cleanup completed!');
console.log('\n💡 Tips:');
console.log('  - Use "npm run cleanup strict" to see remaining issues');
console.log('  - Use "npm run cleanup check" to check status anytime');
console.log('  - Prefix unused variables with "_" to ignore them');
console.log('  - Use "npm run lint:fix" for quick cleanup');
