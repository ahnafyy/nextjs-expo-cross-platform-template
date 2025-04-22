import React, { forwardRef, ReactNode } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export type DiffProps = {
  secondItem: ReactNode;
  className?: string;
  children?: ReactNode;
};

const Diff = forwardRef<View, DiffProps>(
  ({ className, children, secondItem, ...props }, ref) => {
    return (
      <View style={tw`w-full aspect-[16/9] ${className || ''}`} ref={ref} {...props}>
        <View style={tw`absolute inset-0`}>{children}</View>
        <View style={tw`absolute inset-0 opacity-50`}>{secondItem}</View>
        <View style={tw`absolute inset-0 border`} />
      </View>
    );
  }
);

Diff.displayName = 'Diff';
export default Diff;
