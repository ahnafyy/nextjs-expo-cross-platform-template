import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
type TimelineEndProps = {
  children?: React.ReactNode;
  box?: boolean;
  style?: any;
};
const TimelineEnd = React.forwardRef<View, TimelineEndProps>(
  ({ children, box = true, style, ...props }, ref) => {
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
        {children && typeof children === 'string' ? (
          <Text>{children}</Text>
        ) : (
          children
        )}
      </View>
    );
  }
);
export default TimelineEnd;
