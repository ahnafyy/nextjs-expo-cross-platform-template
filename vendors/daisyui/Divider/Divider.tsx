import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export type DividerProps = {
  vertical?: boolean;
  horizontal?: boolean;
  responsive?: boolean;
  start?: boolean;
  end?: boolean;
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'warning' | 'info' | 'error';
  className?: string;
  children?: React.ReactNode;
};

const Divider = forwardRef<View, DividerProps>(
  ({ vertical, horizontal, responsive, color, start, end, className, children, ...props }, ref) => {
    const baseStyle = vertical ? 'h-full w-0.5' : 'w-full h-0.5';
    const colorStyle = color ? `bg-${color}` : 'bg-gray-300';
    const positionStyle = start ? 'self-start' : end ? 'self-end' : 'self-center';
    const responsiveStyle = responsive ? 'lg:w-full lg:h-0.5' : '';

    return (
      <View
        ref={ref}
        style={tw`${baseStyle} ${colorStyle} ${positionStyle} ${responsiveStyle} ${className || ''}`}
        {...props}
      >
        {children ? <Text style={tw`text-center text-gray-600`}>{children}</Text> : null}
      </View>
    );
  }
);

Divider.displayName = 'Divider';
export default Divider;
