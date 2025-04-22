import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
type ToastProps = {
  horizontal?: 'start' | 'center' | 'end';
  vertical?: 'top' | 'middle' | 'bottom';
  className?: string;
  children?: React.ReactNode;
};
const Toast = forwardRef<View, ToastProps>(({ horizontal = 'end', vertical = 'bottom', className = '', children }, ref) => {
  const horizontalStyle = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  }[horizontal];
  const verticalStyle = {
    top: 'top-0',
    middle: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-0',
  }[vertical];
  return (
    <View ref={ref} style={tw`absolute ${horizontalStyle} ${verticalStyle} p-4 bg-gray-800 text-white rounded ${className || ''}`}> 
      <Text>{children}</Text>
    </View>
  );
});
Toast.displayName = 'Toast';
export default Toast;