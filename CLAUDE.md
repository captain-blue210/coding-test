# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a competitive programming repository containing algorithm solutions in multiple languages:
- `typescript/`: TypeScript solutions with tests
- `javascript/`: JavaScript solutions with tests  
- `python/`: Python solutions with tests
- Each language has its solutions organized by platform (LeetCode, HackerRank)

## Test Commands

### TypeScript/JavaScript Tests
- `npm test` - Run all tests using Vitest
- `npm run dev:test` - Run tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI

### Python Tests
- `pytest` - Run Python tests (configured to look in `python/tests/`)

## Development Environment

### TypeScript Configuration
- Target: ES2022
- Module: CommonJS
- Strict mode enabled
- Type checking for both TypeScript and JavaScript files

### Test Framework
- TypeScript/JavaScript: Vitest with global test functions
- Python: pytest

## Code Architecture

### Algorithm Solutions Pattern
Each algorithm solution follows this structure:
- Implementation files contain the core solution logic
- Test files use descriptive test cases with multiple edge cases
- Utility classes (ListNode, TreeNode, etc.) are shared in `util/` directories

### Testing Approach
Tests focus on:
- Multiple input scenarios including edge cases
- Verification of both correctness and expected input/output format
- Clear test descriptions matching problem requirements

## Language-Specific Notes

### TypeScript
- Uses classes for LeetCode-style solutions (e.g., `Solution` class)
- Exports functions for direct testing
- Includes type annotations for parameters and return values

### JavaScript  
- Uses ES6+ features (classes, arrow functions, Map/Set)
- JSDoc comments for parameter types
- ES module exports

### Python
- Simple function-based solutions
- pytest for testing with assert statements
- Follows Python naming conventions