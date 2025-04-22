import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import tw from 'twrnc';

export type CardActionsProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

const CardActions = React.forwardRef<View, CardActionsProps>(({ style, ...props }, ref) => (
  <View {...props} style={[tw`flex-row justify-end p-4`, style]} ref={ref} />
));

export default CardActions;
