import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
export type StackProps = {
  children: React.ReactNode;
  style?: any;
};
const Stack = ({ children, style }: StackProps) => {
  return <View style={[tw`flex flex-col space-y-2`, style]}>{children}</View>;
};
export default Stack;
