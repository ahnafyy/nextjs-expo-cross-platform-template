import React, { forwardRef, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import { IComponentBaseProps } from '../types';
export type ArtboardProps = ViewProps &
  IComponentBaseProps & {
    children?: ReactNode;
    demo?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    horizontal?: boolean;
  };
const Artboard = forwardRef<View, ArtboardProps>(
  ({ children, demo = true, size, horizontal, style, ...props }, ref) => {
    const sizeStyles = {
      1: tw`w-32 h-64`,
      2: tw`w-40 h-72`,
      3: tw`w-48 h-80`,
      4: tw`w-56 h-96`,
      5: tw`w-64 h-112`,
      6: tw`w-72 h-128`,
    };
    return (
      <View
        ref={ref}
        style={[
          tw`border rounded-md p-4 bg-gray-100`,
          demo && tw`border-dashed border-gray-400`,
          horizontal ? tw`flex-row` : tw`flex-col`,
          size ? sizeStyles[size] : null,
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    );
  }
);
Artboard.displayName = 'Artboard';
export default Artboard;
