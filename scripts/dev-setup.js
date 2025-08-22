#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up development environment...\n');

// Check if node_modules exists
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Run linting and formatting
console.log('🔍 Running linting and formatting...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
  console.log('✅ Code formatting completed!\n');
} catch (error) {
  console.log('⚠️  Some linting issues remain. Check the output above.\n');
}

// Check if .env file exists
if (!fs.existsSync(path.join(process.cwd(), '.env'))) {
  console.log('📝 Creating .env file...');
  const envContent = `# Environment variables
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
`;
  fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);
  console.log('✅ .env file created!\n');
}

console.log('🎉 Development environment setup complete!');
console.log('\n📋 Available commands:');
console.log('  npm start          - Start development server');
console.log('  npm run build      - Build for production');
console.log('  npm run lint       - Run ESLint with auto-fix');
console.log('  npm run format     - Format code with Prettier');
console.log('  npm run lint:fix   - Run both linting and formatting');
console.log('  npm test           - Run tests');
console.log('\n🚀 Happy coding!');
