import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import tw from 'twrnc';

export type CardBodyProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

const CardBody = React.forwardRef<View, CardBodyProps>(({ style, ...props }, ref) => (
  <View {...props} style={[tw`p-4`, style]} ref={ref} />
));

export default CardBody;
