import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
type TimelineStartProps = {
  children?: React.ReactNode;
  box?: boolean;
  style?: any;
};
const TimelineStart = React.forwardRef<View, TimelineStartProps>(
  ({ children, box, style, ...props }, ref) => {
    return (
      <View
        {...props}
        ref={ref}
        style={[
          tw`p-4`,
          box && tw`border rounded-lg bg-gray-100`,
          style
        ]}
      >
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </View>
    );
  }
);
export default TimelineStart;
