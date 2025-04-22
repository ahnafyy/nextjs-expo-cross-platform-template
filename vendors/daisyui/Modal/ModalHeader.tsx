import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
type ModalHeaderProps = {
  children?: React.ReactNode;
};
const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <View style={tw`w-full mb-8`}>
      <Text style={tw`text-xl font-bold`}>{children}</Text>
    </View>
  );
};
export default ModalHeader;
