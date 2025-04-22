import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import tw from 'twrnc';
export type BottomNavigationItemProps = TouchableOpacityProps & {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  active?: boolean;
  children?: React.ReactNode;
};
const BottomNavigationItem = forwardRef<React.ElementRef<typeof TouchableOpacity>, BottomNavigationItemProps>(
  ({ children, color = 'neutral', active, disabled, style, ...props }, ref) => {
    const buttonStyle = [
      tw`px-4 py-2 rounded-lg`,
      color === 'neutral' && tw`text-gray-500`,
      color === 'primary' && tw`text-blue-500`,
      color === 'secondary' && tw`text-gray-700`,
      color === 'accent' && tw`text-purple-500`,
      color === 'info' && tw`text-blue-300`,
      color === 'success' && tw`text-green-500`,
      color === 'warning' && tw`text-yellow-500`,
      color === 'error' && tw`text-red-500`,
      active && tw`font-bold`,
      disabled && tw`opacity-50`,
      style,
    ];
    return (
      <TouchableOpacity ref={ref} style={buttonStyle} disabled={disabled} {...props}>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
);
BottomNavigationItem.displayName = 'BottomNavigationItem';
export default BottomNavigationItem;
