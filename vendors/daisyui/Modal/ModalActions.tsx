import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
type ModalActionsProps = {
  children?: React.ReactNode;
};
const ModalActions = ({ children }: ModalActionsProps) => {
  return <View style={tw`flex-row justify-end p-4`}>{children}</View>;
};
export default ModalActions;
