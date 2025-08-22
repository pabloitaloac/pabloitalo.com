# Linting and Auto-Cleanup Guide

This project now has automatic removal of unused imports and comprehensive linting setup.

## 🚀 Quick Start

### Auto-Remove Unused Imports
```bash
npm run lint
```
This command will automatically:
- Remove all unused imports
- Fix auto-fixable ESLint issues
- Keep your code clean

### Complete Cleanup
```bash
npm run cleanup
```
This command will:
- Remove unused imports
- Format all code with Prettier
- Show you the current status

## 📋 Available Commands

### Basic Commands
- `npm run lint` - Remove unused imports and fix auto-fixable issues
- `npm run lint:check` - Check for issues without fixing
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without changes
- `npm run lint:fix` - Run both linting and formatting

### Advanced Cleanup Commands
- `npm run cleanup` - Auto-cleanup (default mode)
- `npm run cleanup strict` - Auto-cleanup + show remaining issues
- `npm run cleanup check` - Show current lint status
- `npm run cleanup format` - Just format code

## 🎯 How Auto-Removal Works

### Unused Imports
The `eslint-plugin-unused-imports` automatically removes:
- Unused React imports
- Unused component imports
- Unused utility imports
- Any import that's not being used in the file

### Example
**Before:**
```javascript
import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useTheme } from '../themetype';

function MyComponent() {
  const { nightMode } = useTheme();
  return <Button>Click me</Button>;
}
```

**After auto-removal:**
```javascript
import { Button } from 'react-bootstrap';
import { useTheme } from '../themetype';

function MyComponent() {
  const { nightMode } = useTheme();
  return <Button>Click me</Button>;
}
```

## ⚙️ Configuration

### ESLint Rules
- **Auto-remove unused imports**: `unused-imports/no-unused-imports: 'error'`
- **Warn about unused variables**: `unused-imports/no-unused-vars: 'warn'`
- **Ignore variables starting with `_`**: `varsIgnorePattern: '^_'`

### Prettier Configuration
- Single quotes for strings
- 2 spaces indentation
- 80 character line width
- Semicolons required
- Trailing commas

## 🔧 Handling Remaining Issues

### Unused Variables
If you have variables that are intentionally unused, prefix them with `_`:

```javascript
// This will be ignored
const { _toggleTheme, nightMode } = useTheme();

// This will show a warning
const { toggleTheme, nightMode } = useTheme();
```

### React Imports
In React 17+, you don't need to import React for JSX:
```javascript
// ✅ Good - no React import needed
function MyComponent() {
  return <div>Hello</div>;
}

// ❌ Unnecessary in React 17+
import React from 'react';
function MyComponent() {
  return <div>Hello</div>;
}
```

## 🛠️ VS Code Integration

The project includes VS Code settings for:
- **Format on Save**: Automatically format files when you save
- **ESLint Auto-fix**: Automatically fix issues when you save
- **Prettier as Default Formatter**: Ensures consistent formatting

## 📊 Current Status

After running auto-cleanup, you should see:
- ✅ All unused imports removed
- ✅ Code properly formatted
- ⚠️ Some unused variables (these are warnings, not errors)

### Typical Remaining Issues
- Unused destructured variables (can be prefixed with `_`)
- Unused function parameters (can be prefixed with `_`)
- Intentionally unused variables for future use

## 🎉 Benefits

1. **Cleaner Code**: No more unused imports cluttering your files
2. **Better Performance**: Smaller bundle sizes
3. **Consistent Style**: All code follows the same formatting rules
4. **Automatic**: Runs automatically on save in VS Code
5. **Flexible**: Multiple cleanup modes for different needs

## 🚨 Troubleshooting

### If auto-removal doesn't work:
1. Make sure you have the latest dependencies: `npm install`
2. Check if ESLint is running: `npm run lint:check`
3. Verify VS Code has the ESLint extension installed

### If you see many warnings:
1. Use `npm run cleanup check` to see the current status
2. Prefix intentionally unused variables with `_`
3. Consider if the variables are actually needed

---

**Happy coding! 🎉**
