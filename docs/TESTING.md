# 🧪 Testing Guide

This guide covers how to write and run tests for the Next.js + Expo cross-platform template.

## 📋 Table of Contents

- [Overview](#overview)
- [Testing Structure](#testing-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Testing Patterns](#testing-patterns)
- [Contributing](#contributing)

## 🔍 Overview

This project uses a comprehensive testing strategy with multiple types of tests:

- **Unit Tests**: Test individual components and functions in isolation
- **Integration Tests**: Test how components work together
- **E2E Tests**: Test complete user journeys (web only for now)

### Testing Stack

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **Playwright**: End-to-end testing for web
- **Jest Expo**: Expo-specific Jest configuration

## 📁 Testing Structure

```
__tests__/
├── app/                    # App-level component tests
│   ├── native-index.test.tsx
│   └── next-page.test.tsx
├── hooks/                  # Custom hook tests
│   ├── useColorScheme.test.ts
│   └── useThemeColor.test.ts
├── vendors/                # Third-party component tests
│   └── daisyui/
│       ├── Button.test.tsx
│       ├── Menu.test.tsx
│       └── Drawer.test.tsx
├── integration/            # Integration tests
│   └── component-integration.test.tsx
└── utils/                  # Test utilities
    └── test-utils.tsx

e2e/                        # End-to-end tests
└── web-app.spec.ts
```

## 🚀 Running Tests

### Unit and Integration Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage

# Run specific test file
yarn test Button.test.tsx

# Run tests matching pattern
yarn test --testNamePattern="Button Component"
```

### E2E Tests

```bash
# Run E2E tests
yarn test:e2e

# Run E2E tests with UI mode
yarn test:e2e:ui

# Install Playwright browsers (first time only)
npx playwright install
```

## ✍️ Writing Tests

### Basic Component Test

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/vendors/daisyui/Button/Button';

// Mock dependencies
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button onPress={onPress}>Press me</Button>
    );
    
    fireEvent.press(getByText('Press me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
```

### Hook Testing

```typescript
import { renderHook } from '@testing-library/react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

describe('useColorScheme Hook', () => {
  it('returns the current color scheme', () => {
    const { result } = renderHook(() => useColorScheme());
    expect(['light', 'dark', null]).toContain(result.current);
  });
});
```

### Integration Testing

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/vendors/daisyui/Button/Button';
import Menu from '@/vendors/daisyui/Menu/Menu';

describe('Component Integration', () => {
  it('Button works inside Menu', () => {
    const onPress = jest.fn();
    
    const { getByText } = render(
      <Menu>
        <Menu.Item>
          <Button onPress={onPress}>Menu Button</Button>
        </Menu.Item>
      </Menu>
    );

    fireEvent.press(getByText('Menu Button'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

### E2E Testing

```typescript
import { test, expect } from '@playwright/test';

test('user can navigate the app', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
  
  // Test interactions
  await page.click('button:has-text("Click me")');
  
  // Assert results
  await expect(page.locator('text=Success')).toBeVisible();
});
```

## 🎯 Testing Patterns

### 1. Component Props Testing

Always test all component props:

```typescript
describe('Button Props', () => {
  it('renders with different sizes', () => {
    const { getByText, rerender } = render(<Button size="lg">Large</Button>);
    expect(getByText('Large')).toBeTruthy();

    rerender(<Button size="sm">Small</Button>);
    expect(getByText('Small')).toBeTruthy();
  });
});
```

### 2. Event Handling

Test all interactive elements:

```typescript
it('handles all button events', () => {
  const onPress = jest.fn();
  const onPressIn = jest.fn();
  const onPressOut = jest.fn();

  const { getByText } = render(
    <Button onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      Interactive Button
    </Button>
  );

  fireEvent.press(getByText('Interactive Button'));
  expect(onPress).toHaveBeenCalled();
});
```

### 3. State Management

Test component state changes:

```typescript
it('handles state changes', () => {
  const { getByText, rerender } = render(
    <Button disabled>Disabled</Button>
  );
  
  expect(getByText('Disabled')).toBeTruthy();

  rerender(<Button>Enabled</Button>);
  expect(getByText('Enabled')).toBeTruthy();
});
```

### 4. Error Boundaries

Test error handling:

```typescript
it('handles errors gracefully', () => {
  expect(() => {
    render(<Button invalidProp="test">Button</Button>);
  }).not.toThrow();
});
```

### 5. Accessibility

Test accessibility features:

```typescript
it('supports accessibility', () => {
  const { getByLabelText } = render(
    <Button accessibilityLabel="Submit form">Submit</Button>
  );
  
  expect(getByLabelText('Submit form')).toBeTruthy();
});
```

## 🛠 Best Practices

### 1. Test Structure

- **Arrange**: Set up test data and conditions
- **Act**: Perform the action being tested  
- **Assert**: Verify the expected outcome

```typescript
it('calculates total correctly', () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  
  // Act
  const total = calculateTotal(items);
  
  // Assert
  expect(total).toBe(30);
});
```

### 2. Mock External Dependencies

Always mock external dependencies:

```typescript
// Mock navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

// Mock async storage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));
```

### 3. Use Test IDs

Add test IDs for reliable element selection:

```typescript
<Button testID="submit-button">Submit</Button>

// In test
const { getByTestId } = render(<MyComponent />);
expect(getByTestId('submit-button')).toBeTruthy();
```

### 4. Test Edge Cases

Include edge case testing:

```typescript
describe('Edge Cases', () => {
  it('handles empty props', () => {
    expect(() => render(<Button />)).not.toThrow();
  });

  it('handles null children', () => {
    expect(() => render(<Button>{null}</Button>)).not.toThrow();
  });
});
```

### 5. Performance Testing

Include performance assertions:

```typescript
it('renders quickly', () => {
  const start = performance.now();
  render(<ExpensiveComponent data={largeDataset} />);
  const end = performance.now();
  
  expect(end - start).toBeLessThan(100); // 100ms threshold
});
```

## 🔧 Common Issues & Solutions

### Issue: "Cannot find module" errors

**Solution**: Check your Jest moduleNameMapper configuration in `package.json`:

```json
{
  "jest": {
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/$1"
    }
  }
}
```

### Issue: React Native components not rendering

**Solution**: Ensure you have the correct Jest preset:

```json
{
  "jest": {
    "preset": "jest-expo"
  }
}
```

### Issue: Async operations not working

**Solution**: Use proper async/await and waitFor:

```typescript
import { waitFor } from '@testing-library/react-native';

it('handles async operations', async () => {
  const { getByText } = render(<AsyncComponent />);
  
  await waitFor(() => {
    expect(getByText('Loaded')).toBeTruthy();
  });
});
```

### Issue: Mocks not working

**Solution**: Ensure mocks are hoisted and properly configured:

```typescript
// Mock at the top of the file
jest.mock('module-name', () => ({
  // mock implementation
}));

describe('Test Suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
});
```

## 📈 Coverage Goals

Maintain these coverage thresholds:

- **Statements**: 70%
- **Branches**: 70%  
- **Functions**: 70%
- **Lines**: 70%

View coverage reports:

```bash
yarn test:coverage
open coverage/lcov-report/index.html
```

## 🤝 Contributing

When adding new tests:

1. **Follow naming conventions**: `ComponentName.test.tsx`
2. **Use descriptive test names**: Describe what the test validates
3. **Group related tests**: Use `describe` blocks to organize tests
4. **Add integration tests**: Test component interactions
5. **Update documentation**: Add new testing patterns here

### Test Naming Convention

```typescript
describe('ComponentName', () => {
  describe('Props', () => {
    it('renders with required props', () => {});
    it('applies optional props correctly', () => {});
  });

  describe('Events', () => {
    it('handles user interactions', () => {});
    it('calls callbacks correctly', () => {});
  });

  describe('Edge Cases', () => {
    it('handles invalid input gracefully', () => {});
    it('works with empty data', () => {});
  });
});
```

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-native-testing-library/intro)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Expo Testing Guide](https://docs.expo.dev/develop/unit-testing/)

## 🆘 Getting Help

If you're having trouble with tests:

1. Check this documentation first
2. Look at existing test examples in the codebase
3. Search for similar issues in the Jest/RTL documentation
4. Ask the team for help in code reviews

Remember: Good tests make the codebase more reliable and easier to maintain! 🎯