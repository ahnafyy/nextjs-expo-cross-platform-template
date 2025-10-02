import React, { forwardRef } from 'react';
import { View, Text, Pressable, ViewProps } from 'react-native';
import tw from 'twrnc';

export type ExampleCrossComponentProps = ViewProps & {
  title?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

/**
 * ExampleCrossComponent - A demonstration component showing cross-platform patterns
 * 
 * This component demonstrates:
 * - React Native primitives for cross-platform compatibility
 * - TWRNC for unified styling
 * - TypeScript with proper prop typing
 * - forwardRef pattern for ref forwarding
 * - Conditional styling patterns
 * - Accessibility features
 */
const ExampleCrossComponent = forwardRef<View, ExampleCrossComponentProps>(
  ({ 
    title = 'Button', 
    variant = 'primary', 
    size = 'md',
    disabled = false,
    loading = false,
    onPress, 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    // Define base styles using TWRNC
    const baseStyles = tw`rounded-lg items-center justify-center border`;
    
    // Size variations
    const sizeStyles = {
      sm: tw`px-3 py-1.5`,
      md: tw`px-4 py-2.5`,
      lg: tw`px-6 py-3.5`,
    }[size];
    
    // Variant color schemes
    const variantStyles = {
      primary: tw`bg-blue-500 border-blue-500`,
      secondary: tw`bg-gray-500 border-gray-500`,
      success: tw`bg-green-500 border-green-500`,
      warning: tw`bg-yellow-500 border-yellow-500`,
      error: tw`bg-red-500 border-red-500`,
    }[variant];
    
    // Text color for contrast
    const textColorStyles = {
      primary: tw`text-white`,
      secondary: tw`text-white`,
      success: tw`text-white`,
      warning: tw`text-black`,
      error: tw`text-white`,
    }[variant];
    
    // Text size based on component size
    const textSizeStyles = {
      sm: tw`text-sm`,
      md: tw`text-base`,
      lg: tw`text-lg`,
    }[size];
    
    // Disabled state
    const disabledStyles = disabled ? tw`opacity-50` : tw``;
    
    // Loading state (dim the component)
    const loadingStyles = loading ? tw`opacity-75` : tw``;
    
    // Combine all styles
    const finalStyles = [
      baseStyles,
      sizeStyles,
      variantStyles,
      disabledStyles,
      loadingStyles,
      style, // Allow custom styles to override
    ];
    
    const finalTextStyles = [
      textColorStyles,
      textSizeStyles,
      tw`font-medium text-center`,
    ];
    
    return (
      <Pressable
        ref={ref}
        style={finalStyles}
        onPress={disabled || loading ? undefined : onPress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={title}
        accessibilityState={{ disabled: disabled || loading }}
        // Provide visual feedback on press (works on both platforms)
        android_ripple={{ color: 'rgba(255, 255, 255, 0.2)' }}
        style={({ pressed }) => [
          ...finalStyles,
          // iOS-style press feedback
          pressed && tw`opacity-80`,
        ]}
        {...props}
      >
        {loading ? (
          <Text style={[finalTextStyles, tw`animate-pulse`]}>
            Loading...
          </Text>
        ) : (
          <>
            {title && (
              <Text style={finalTextStyles}>
                {title}
              </Text>
            )}
            {children}
          </>
        )}
      </Pressable>
    );
  }
);

ExampleCrossComponent.displayName = 'ExampleCrossComponent';

export default ExampleCrossComponent;