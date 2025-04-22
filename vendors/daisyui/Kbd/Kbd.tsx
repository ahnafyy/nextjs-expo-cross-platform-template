import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { IComponentBaseProps, ComponentSize } from '../types';

export type KbdProps = IComponentBaseProps & {
  size?: ComponentSize;
  children: React.ReactNode;
};

const Kbd = forwardRef<View, KbdProps>(({ children, size = 'md', ...props }, ref) => {
  const sizeStyles = {
    lg: tw`text-lg px-4 py-2`,
    md: tw`text-base px-3 py-1.5`,
    sm: tw`text-sm px-2 py-1`,
    xs: tw`text-xs px-1.5 py-0.5`,
  };

  return (
    <View
      {...props}
      ref={ref}
      style={[
        tw`bg-gray-200 rounded border border-gray-400`,
        sizeStyles[size],
      ]}
    >
      <Text style={tw`font-mono text-black`}>{children}</Text>
    </View>
  );
});

export default Kbd;
