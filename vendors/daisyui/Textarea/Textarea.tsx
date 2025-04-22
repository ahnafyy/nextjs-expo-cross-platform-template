import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import tw from 'twrnc';
export type TextareaProps = TextInputProps & {
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  bordered?: boolean;
  borderOffset?: boolean;
  style?: any;
};
const Textarea = React.forwardRef<TextInput, TextareaProps>(
  ({ bordered = true, borderOffset, color, size, style, ...props }, ref) => {
    const sizeStyles = {
      lg: tw`text-lg p-4`,
      md: tw`text-base p-3`,
      sm: tw`text-sm p-2`,
      xs: tw`text-xs p-1`,
    }[size || 'md'];
    const colorStyles = {
      primary: tw`border-blue-500`,
      secondary: tw`border-green-500`,
      accent: tw`border-yellow-500`,
      ghost: tw`border-gray-500`,
      info: tw`border-blue-300`,
      success: tw`border-green-300`,
      warning: tw`border-yellow-300`,
      error: tw`border-red-500`,
    }[color || 'primary'];
    return (
      <TextInput
        {...props}
        ref={ref}
        multiline
        style={[
          tw`rounded`,
          bordered && tw`border`,
          !borderOffset && tw`focus:outline-none`,
          sizeStyles,
          colorStyles,
          style,
        ]}
      />
    );
  }
);
export default Textarea;
