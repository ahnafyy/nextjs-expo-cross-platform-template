import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
export type RadioTabProps = {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  bgColor?: string;
  borderColor?: string;
  active?: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  contentClassName?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: any;
};
const RadioTab = forwardRef<typeof TouchableOpacity, RadioTabProps>(
  ({ children, color, bgColor, borderColor, active, disabled, label, onPress, style, ...props }, ref) => {
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
        ref={ref as any} // Ép kiểu để tránh lỗi TypeScript
        onPress={onPress}
        disabled={disabled}
        style={[
          tw`px-4 py-2 rounded flex-row items-center`,
          active && tw`border-b-2 border-blue-500`,
          disabled && tw`opacity-50`,
          bgColor && { backgroundColor: bgColor },
          borderColor && { borderColor: borderColor, borderWidth: 1 },
          style,
        ]}
      >
        <View style={tw`mr-2 w-5 h-5 rounded-full border border-gray-500 ${active ? 'bg-blue-500' : 'bg-white'}`} />
        <Text style={[tw`text-center`, colorStyles]}>{label}</Text>
      </TouchableOpacity>
    );
  }
);
export default RadioTab;
