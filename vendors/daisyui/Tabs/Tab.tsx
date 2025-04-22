import React, { forwardRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
export type TabProps = {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  bgColor?: string;
  borderColor?: string;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: any;
};
const Tab = forwardRef<typeof TouchableOpacity, TabProps>(
  ({ children, color, bgColor, borderColor, active, disabled, onPress, style, ...props }, ref) => {
    const colorStyles = {
      neutral: tw`text-gray-500`,
      primary: tw`text-blue-500`,
      secondary: tw`text-green-500`,
      accent: tw`text-yellow-500`,
      info: tw`text-blue-300`,
      success: tw`text-green-300`,
      warning: tw`text-yellow-300`,
      error: tw`text-red-500`,
    }[color || 'neutral'];
    return (
      <TouchableOpacity
        {...props}
        ref={ref as any} // TypeScript không hỗ trợ ref trên TouchableOpacity, cần ép kiểu
        onPress={onPress}
        disabled={disabled}
        style={[
          tw`px-4 py-2 rounded`,
          active && tw`border-b-2 border-blue-500`,
          disabled && tw`opacity-50`,
          bgColor && { backgroundColor: bgColor },
          borderColor && { borderColor: borderColor, borderWidth: 1 },
          style,
        ]}
      >
        <Text style={[tw`text-center`, colorStyles]}>{children}</Text>
      </TouchableOpacity>
    );
  }
);
export default Tab;
