import React, { forwardRef, ReactNode } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { IComponentBaseProps, ComponentStatus } from '../types';
export type AlertProps = IComponentBaseProps & {
  icon?: ReactNode;
  status?: ComponentStatus;
  children?: ReactNode;
  style?: any;
};
const Alert = forwardRef<View, AlertProps>(
  ({ children, icon, status, dataTheme, style, ...props }, ref) => {
    const statusStyles = {
      info: tw`bg-blue-100 border-blue-500`,
      success: tw`bg-green-100 border-green-500`,
      warning: tw`bg-yellow-100 border-yellow-500`,
      error: tw`bg-red-100 border-red-500`,
    };
    return (
      <View
        ref={ref}
        style={[
          tw`p-4 border-l-4 rounded-md flex-row items-center`,
          status ? statusStyles[status] : null,
          style,
        ]}
        {...props}
      >
        {icon && <View style={tw`mr-2`}>{icon}</View>}
        <Text>{children}</Text>
      </View>
    );
  }
);
Alert.displayName = 'Alert';
export default Alert;
