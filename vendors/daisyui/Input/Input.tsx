import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import tw from 'twrnc';

export type InputProps = TextInputProps & {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ value, placeholder, bordered = true, borderOffset, size, color, className, style, ...props }, ref) => {
    const getSizeStyle = () => {
      switch (size) {
        case 'xs': return tw`p-1 text-xs`;
        case 'sm': return tw`p-2 text-sm`;
        case 'md': return tw`p-3 text-base`;
        case 'lg': return tw`p-4 text-lg`;
        default: return tw`p-3 text-base`;
      }
    };

    const getColorStyle = () => {
      switch (color) {
        case 'primary': return tw`border-blue-500 text-blue-500`;
        case 'secondary': return tw`border-gray-500 text-gray-500`;
        case 'accent': return tw`border-purple-500 text-purple-500`;
        case 'ghost': return tw`border-transparent text-gray-700`;
        case 'info': return tw`border-blue-300 text-blue-300`;
        case 'success': return tw`border-green-500 text-green-500`;
        case 'warning': return tw`border-yellow-500 text-yellow-500`;
        case 'error': return tw`border-red-500 text-red-500`;
        default: return tw`border-gray-300 text-black`;
      }
    };

    return (
      <View style={[tw`w-full`, className ? tw`${className}` : null]}>
        <TextInput
          {...props}
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={tw.color('gray-400')}
          style={[
            tw`w-full rounded-md border bg-white`,
            bordered ? tw`border-gray-300` : tw`border-transparent`,
            !borderOffset && tw`focus:outline-none`,
            getSizeStyle(),
            getColorStyle(),
            style,
          ]}
        />
      </View>
    );
  }
);

Input.displayName = 'Input';
export default Input;
