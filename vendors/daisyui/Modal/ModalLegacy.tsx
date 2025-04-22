import React from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import tw from 'twrnc';
export type ModalProps = {
  open?: boolean;
  responsive?: boolean;
  onClickBackdrop?: () => void;
  children?: React.ReactNode;
};
const CustomModal = ({ open, responsive, onClickBackdrop, children }: ModalProps) => {
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClickBackdrop}
    >
      <TouchableWithoutFeedback onPress={onClickBackdrop}>
        <View style={tw`flex-1 bg-black/50 justify-center ${responsive ? 'p-4' : 'p-0'}`}>
          <TouchableWithoutFeedback>
            <View style={tw`bg-white p-4 rounded-lg`}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
