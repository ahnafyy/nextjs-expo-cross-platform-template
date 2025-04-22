import React, { forwardRef } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
type WindowMockupProps = {
  frameColor?: string;
  backgroundColor?: string;
  border?: boolean;
  borderColor?: string;
  children?: React.ReactNode;
};
const WindowMockup = forwardRef<View, WindowMockupProps>(
  ({ border, borderColor, backgroundColor, frameColor, children }, ref) => {
    const borderColorValue = borderColor || frameColor || 'border-gray-300';
    const classes = tw`
      ${frameColor ? frameColor : 'bg-gray-300'}
      ${border ? `${borderColorValue} border` : ''}
      p-4 rounded-lg shadow`
    ;
    return (
      <View ref={ref} accessibilityLabel="Window mockup" style={classes}>
        <View style={tw`${backgroundColor ? backgroundColor : 'bg-white'} p-4`}> 
          {children}
        </View>
      </View>
    );
  }
);
WindowMockup.displayName = 'WindowMockup';
export default WindowMockup;
