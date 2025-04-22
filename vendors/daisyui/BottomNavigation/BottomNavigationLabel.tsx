import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';
import tw from 'twrnc';
export type BottomNavigationLabelProps = TextProps;
const BottomNavigationLabel = forwardRef<Text, BottomNavigationLabelProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <Text ref={ref} style={[tw`text-xs text-gray-500`, style]} {...props}>
        {children}
      </Text>
    );
  }
);
BottomNavigationLabel.displayName = 'BottomNavigationLabel';
export default BottomNavigationLabel;
