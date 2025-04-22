import React, { forwardRef } from 'react';
import { View, Text, ViewProps } from 'react-native';
import tw from 'twrnc';
export type BadgeProps = ViewProps & {
  variant?: 'outline';
  outline?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  responsive?: boolean;
  children?: React.ReactNode;
};
const Badge = forwardRef<View, BadgeProps>(
  ({ children, variant, outline, size = 'md', color = 'neutral', responsive, style, ...props }, ref) => {
    const badgeStyle = [
      tw`px-2 py-1 rounded-full`,
      color === 'neutral' && tw`bg-gray-500 text-white`,
      color === 'primary' && tw`bg-blue-500 text-white`,
      color === 'secondary' && tw`bg-gray-700 text-white`,
      color === 'accent' && tw`bg-purple-500 text-white`,
      color === 'ghost' && tw`bg-transparent text-gray-500 border border-gray-500`,
      color === 'info' && tw`bg-blue-300 text-blue-900`,
      color === 'success' && tw`bg-green-500 text-white`,
      color === 'warning' && tw`bg-yellow-500 text-black`,
      color === 'error' && tw`bg-red-500 text-white`,
      outline && tw`border border-gray-500 bg-transparent text-gray-500`,
      size === 'xs' && tw`text-xs px-1 py-0.5`,
      size === 'sm' && tw`text-sm px-2 py-1`,
      size === 'md' && tw`text-base px-3 py-1.5`,
      size === 'lg' && tw`text-lg px-4 py-2`,
      style,
    ];
    return (
      <View ref={ref} style={badgeStyle} {...props}>
        <Text>{children}</Text>
      </View>
    );
  }
);
Badge.displayName = 'Badge';
export default Badge;
