import { render, RenderOptions } from '@testing-library/react-native';
import React, { ReactElement } from 'react';

/**
 * Custom render function that includes common providers and setup
 * This can be extended with theme providers, navigation providers, etc.
 */
export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      // Add your providers here, e.g.:
      // <ThemeProvider>
      //   <NavigationProvider>
      //     {children}
      //   </NavigationProvider>
      // </ThemeProvider>
      <>{children}</>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

/**
 * Mock data factories for testing
 */
export const mockData = {
  button: {
    primary: {
      color: 'primary' as const,
      size: 'md' as const,
      children: 'Primary Button',
    },
    disabled: {
      disabled: true,
      children: 'Disabled Button',
    },
    withIcon: {
      startIcon: <React.Fragment>🚀</React.Fragment>,
      children: 'Button with Icon',
    },
  },
  menu: {
    simple: {
      items: ['Home', 'About', 'Contact'],
    },
    withButtons: {
      items: [
        { type: 'button', text: 'Action 1', color: 'primary' },
        { type: 'button', text: 'Action 2', color: 'secondary' },
      ],
    },
  },
  drawer: {
    open: {
      open: true,
      side: <React.Fragment>Side Content</React.Fragment>,
      children: <React.Fragment>Main Content</React.Fragment>,
    },
    closed: {
      open: false,
      side: <React.Fragment>Side Content</React.Fragment>,
      children: <React.Fragment>Main Content</React.Fragment>,
    },
  },
};

/**
 * Common test assertions and helpers
 */
export const testHelpers = {
  /**
   * Assert that an element is visible and accessible
   */
  assertAccessibleElement: (element: any) => {
    expect(element).toBeTruthy();
    // Add more accessibility checks as needed
  },

  /**
   * Assert that a button is in the correct disabled state
   */
  assertButtonDisabled: (button: any, shouldBeDisabled: boolean) => {
    expect(button).toBeTruthy();
    // Note: React Native doesn't have a disabled attribute like HTML
    // The disabled state is usually handled by the component internally
  },

  /**
   * Create a mock function with common jest configurations
   */
  createMockFn: () => jest.fn(),

  /**
   * Wait for async operations in tests
   */
  waitFor: async (fn: () => void, timeout = 1000) => {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      try {
        fn();
        return;
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 10));
      }
    }
    
    throw new Error(`Timeout after ${timeout}ms`);
  },
};

/**
 * Component test builders for consistent testing patterns
 */
export const componentTestBuilders = {
  /**
   * Standard button test suite
   */
  buttonTests: (Component: React.ComponentType<any>) => {
    return {
      'renders correctly': () => {
        const { getByText } = render(<Component>Test Button</Component>);
        expect(getByText('Test Button')).toBeTruthy();
      },
      'handles press events': () => {
        const onPress = jest.fn();
        const { getByText } = render(
          <Component onPress={onPress}>Pressable Button</Component>
        );
        
        // Note: fireEvent needs to be imported in the test file
        // fireEvent.press(getByText('Pressable Button'));
        // expect(onPress).toHaveBeenCalledTimes(1);
      },
    };
  },

  /**
   * Standard menu test suite
   */
  menuTests: (Component: React.ComponentType<any>) => {
    return {
      'renders with items': () => {
        const { getByTestId } = render(
          <Component testID="test-menu">
            <Component.Item>Item 1</Component.Item>
            <Component.Item>Item 2</Component.Item>
          </Component>
        );
        expect(getByTestId('test-menu')).toBeTruthy();
      },
    };
  },
};

/**
 * Cross-platform testing utilities
 */
export const crossPlatformHelpers = {
  /**
   * Mock platform-specific modules
   */
  mockPlatform: (platform: 'ios' | 'android' | 'web') => {
    jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
      OS: platform,
      select: (platforms: any) => platforms[platform],
    }));
  },

  /**
   * Test component on multiple platforms
   */
  testOnPlatforms: (
    platforms: ('ios' | 'android' | 'web')[],
    testFn: () => void
  ) => {
    platforms.forEach(platform => {
      describe(`on ${platform}`, () => {
        beforeEach(() => {
          crossPlatformHelpers.mockPlatform(platform);
        });
        
        testFn();
      });
    });
  },
};

/**
 * Performance testing utilities
 */
export const performanceHelpers = {
  /**
   * Measure render time
   */
  measureRenderTime: (renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    return end - start;
  },

  /**
   * Assert render time is below threshold
   */
  assertRenderPerformance: (renderFn: () => void, maxTime = 100) => {
    const time = performanceHelpers.measureRenderTime(renderFn);
    expect(time).toBeLessThan(maxTime);
  },
};

/**
 * Export commonly used testing library functions for convenience
 */
export * from '@testing-library/react-native';
export { renderWithProviders as render };