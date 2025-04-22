import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
type ModalBodyProps = {
  children?: React.ReactNode;
};
const ModalBody = ({ children }: ModalBodyProps) => {
  return <View style={tw`p-4`}>{children}</View>;
};
export default ModalBody;
