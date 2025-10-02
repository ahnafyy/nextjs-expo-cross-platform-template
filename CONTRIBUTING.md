# 🤝 Contributing Guide: Cross-Platform Components

Welcome to the **Next.js + Expo + React Native** template! This guide will help you understand how to create components that work seamlessly across both web and mobile platforms using the established design patterns in this project.

## 📖 Table of Contents

- [🏗️ Architecture Overview](#%EF%B8%8F-architecture-overview)
- [🎯 Core Principles](#-core-principles)
- [🚀 Quick Start: Creating a New Component](#-quick-start-creating-a-new-component)
- [📁 Project Structure](#-project-structure)
- [🎨 Styling Approach](#-styling-approach)
- [📱 Platform-Specific Implementations](#-platform-specific-implementations)
- [🔧 Component Patterns](#-component-patterns)
- [✅ Best Practices](#-best-practices)
- [🧪 Testing Components](#-testing-components)
- [🐛 Troubleshooting](#-troubleshooting)

## 🏗️ Architecture Overview

This project uses a **unified codebase** approach for cross-platform development:

- **Next.js** for web applications
- **Expo/React Native** for mobile applications
- **React Native Web** for shared component logic
- **NativeWind/TWRNC** for unified styling
- **TypeScript** for type safety across platforms

### Key Technologies

| Technology | Purpose |
|------------|---------|
| `react-native-web` | Renders React Native components on web |
| `nativewind` | Tailwind CSS for React Native |
| `twrnc` | Tailwind React Native ClassNames |
| `@expo/next-adapter` | Expo + Next.js integration |
| `expo-router` | File-based routing for mobile |

## 🎯 Core Principles

1. **Write Once, Run Everywhere**: Components should work on both web and mobile without modification
2. **Platform-Agnostic by Default**: Use React Native primitives (`View`, `Text`, etc.) instead of HTML elements
3. **Conditional Platform Logic**: Use platform-specific files (`.web.ts`) only when necessary
4. **Unified Styling**: Leverage NativeWind and TWRNC for consistent styling
5. **TypeScript First**: All components must be strongly typed

## 🚀 Quick Start: Creating a New Component

### Step 1: Choose Component Location

```bash
# For shared components (recommended)
components/Common/YourComponent.tsx

# For platform-specific components (only if needed)
components/Native/YourComponent.tsx  # React Native only
components/Web/YourComponent.tsx     # Next.js only
```

### Step 2: Basic Component Template

```tsx
import React, { forwardRef } from 'react';
import { View, Text, Pressable, ViewProps } from 'react-native';
import tw from 'twrnc';

export type YourComponentProps = ViewProps & {
  title?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress?: () => void;
};

const YourComponent = forwardRef<View, YourComponentProps>(
  ({ title, variant = 'primary', disabled, onPress, style, children, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={disabled ? undefined : onPress}
        style={[
          tw`px-4 py-2 rounded-lg`,
          variant === 'primary' && tw`bg-blue-500`,
          variant === 'secondary' && tw`bg-gray-500`,
          disabled && tw`opacity-50`,
          style,
        ]}
        {...props}
      >
        {title && (
          <Text style={tw`text-white font-medium text-center`}>
            {title}
          </Text>
        )}
        {children}
      </Pressable>
    );
  }
);

YourComponent.displayName = 'YourComponent';

export default YourComponent;
```

### Step 3: Export from Index (if needed)

```tsx
// components/index.ts
export { default as YourComponent } from './Common/YourComponent';
```

## 📁 Project Structure

```
├── app/
│   ├── (native)/          # Expo/React Native screens
│   ├── (next)/            # Next.js pages
│   ├── _layout.tsx        # Expo layout
│   └── layout.tsx         # Next.js layout
├── components/
│   ├── Common/            # ✅ Shared components (preferred)
│   ├── Native/            # React Native specific
│   ├── Web/               # Next.js specific
│   └── README.md
├── vendors/
│   └── daisyui/           # Third-party component adaptations
├── hooks/
│   ├── useColorScheme.ts  # Default implementation
│   └── useColorScheme.web.ts  # Web-specific override
├── style/
│   └── global.css         # Global web styles
└── config files...
```

## 🎨 Styling Approach

### Primary: TWRNC (Tailwind React Native ClassNames)

```tsx
import tw from 'twrnc';

// Basic usage
<View style={tw`bg-white p-4 rounded-lg shadow-md`} />

// Conditional styling
<View style={tw`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`} />

// Combining with custom styles
<View style={[tw`p-4 bg-white`, customStyle]} />
```

### Secondary: NativeWind (for className support)

```tsx
// For components that need className prop support
<View className="bg-white p-4 rounded-lg shadow-md" />
```

### Color Theming

The project uses CSS custom properties for theming:

```css
/* style/global.css */
:root {
  --base-content: theme('colors.base-content');
  --base-100: theme('colors.base-100');
  --base-200: theme('colors.base-200');
}
```

## 📱 Platform-Specific Implementations

### When to Use Platform-Specific Files

Create `.web.ts` files only when:
- Web-specific APIs are needed (DOM manipulation, browser features)
- Performance optimizations for web
- Different behavior is required on web vs mobile

### Example: Color Scheme Hook

```typescript
// hooks/useColorScheme.ts (default - mobile)
export { useColorScheme } from 'react-native';

// hooks/useColorScheme.web.ts (web override)
import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);
  
  useEffect(() => {
    setHasHydrated(true);
  }, []);
  
  const colorScheme = useRNColorScheme();
  
  if (hasHydrated) {
    return colorScheme;
  }
  
  return 'light'; // Default for SSR
}
```

## 🔧 Component Patterns

### 1. Compound Components Pattern

```tsx
// Menu.tsx - Main component with sub-components
const Menu = ({ children, ...props }) => (
  <View {...props}>{children}</View>
);

// Sub-components
Menu.Item = MenuItem;
Menu.Title = MenuTitle;
Menu.Dropdown = MenuDropdown;

export default Menu;

// Usage
<Menu>
  <Menu.Title>Navigation</Menu.Title>
  <Menu.Item onPress={() => {}}>Home</Menu.Item>
  <Menu.Item onPress={() => {}}>About</Menu.Item>
</Menu>
```

### 2. Polymorphic Component Pattern

```tsx
type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || View;
  return <Component {...props}>{children}</Component>;
}
```

### 3. Forwarded Ref Pattern

```tsx
const Component = forwardRef<View, ComponentProps>(
  (props, ref) => {
    return <View ref={ref} {...props} />;
  }
);

Component.displayName = 'Component';
```

### 4. Render Props Pattern

```tsx
type RenderPropComponent = {
  children: (state: State) => React.ReactNode;
};

const RenderPropComponent = ({ children }: RenderPropComponent) => {
  const [state, setState] = useState();
  return <>{children(state)}</>;
};
```

## ✅ Best Practices

### Component Design

- ✅ **Use React Native primitives**: `View`, `Text`, `Pressable`, `ScrollView`
- ✅ **Forward refs**: Always use `forwardRef` for reusable components
- ✅ **Export prop types**: Make component props available for consumption
- ✅ **Set displayName**: Helps with debugging and React DevTools
- ❌ **Avoid HTML elements**: Don't use `div`, `span`, `button` directly
- ❌ **Avoid web-only CSS**: No `position: fixed`, `z-index`, etc.

### TypeScript

```tsx
// ✅ Good - Extend ViewProps for View-based components
export type ButtonProps = ViewProps & {
  title: string;
  variant?: 'primary' | 'secondary';
};

// ✅ Good - Use generic constraints
type ComponentProps<T = View> = {
  ref?: React.Ref<T>;
};

// ❌ Bad - Using any or missing types
export type ButtonProps = {
  [key: string]: any;
};
```

### Styling

```tsx
// ✅ Good - Responsive and platform-agnostic
<View style={tw`p-4 bg-white rounded-lg shadow-sm`} />

// ✅ Good - Conditional styling
<View style={tw`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`} />

// ❌ Bad - Platform-specific values
<View style={{ padding: 16, shadowOffset: { width: 0, height: 2 } }} />
```

### Performance

```tsx
// ✅ Good - Memoize expensive calculations
const memoizedStyles = useMemo(() => 
  tw`complex-${variant}-styling-with-${color}`, 
  [variant, color]
);

// ✅ Good - Use callbacks for event handlers
const handlePress = useCallback(() => {
  onPress?.();
}, [onPress]);
```

## 🧪 Testing Components

### Example Component Test

```tsx
// __tests__/YourComponent.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <YourComponent title="Test Button" />
    );
    
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <YourComponent title="Test Button" onPress={onPress} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
```

### Running Tests

```bash
yarn test           # Run all tests
yarn test --watch   # Watch mode
```

## 🐛 Troubleshooting

### Common Issues

#### 1. "Cannot resolve module" errors

**Problem**: Import paths not resolving correctly

**Solution**: Check `tsconfig.json` paths configuration:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

#### 2. Styling not working on web

**Problem**: TWRNC styles not applying on web

**Solution**: Ensure NativeWind is properly configured:
```js
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
};
```

#### 3. Platform-specific file not loading

**Problem**: `.web.ts` file not being used on web

**Solution**: Check Metro and Next.js configurations support platform extensions:
```js
// metro.config.js
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
```

#### 4. TypeScript errors with React Native Web

**Problem**: Type conflicts between React Native and React Native Web

**Solution**: Ensure proper type resolution order in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["react-native", "react-native-web"]
  }
}
```

### Performance Issues

#### 1. Slow re-renders

**Problem**: Components re-rendering too frequently

**Solutions**:
- Use `React.memo` for pure components
- Memoize expensive calculations with `useMemo`
- Use `useCallback` for event handlers
- Optimize style objects

#### 2. Bundle size concerns

**Problem**: Large bundle sizes affecting performance

**Solutions**:
- Use tree-shaking friendly imports
- Lazy load components when possible
- Minimize vendor dependencies

### Getting Help

1. **Check existing components**: Look at `vendors/daisyui/` for examples
2. **Review documentation**: React Native, Expo, and Next.js docs
3. **Search issues**: Check if others have faced similar problems
4. **Community resources**:
   - [React Native Community](https://github.com/react-native-community)
   - [Expo Forums](https://forums.expo.dev/)
   - [Next.js Discussions](https://github.com/vercel/next.js/discussions)

---

## 🚀 Ready to Contribute?

Now you're equipped with the knowledge to create amazing cross-platform components! Remember:

1. **Start simple**: Begin with basic components and gradually add complexity
2. **Test thoroughly**: Verify components work on both web and mobile
3. **Follow patterns**: Use existing components as reference
4. **Document changes**: Update this guide if you discover new patterns

Happy coding! 🎉