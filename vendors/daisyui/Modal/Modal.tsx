import React, { useCallback, useRef } from 'react';
import { View, Modal as RNModal, Pressable } from 'react-native';
import tw from 'twrnc';
import ModalActions from './ModalActions';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
export type ModalProps = {
  open?: boolean;
  responsive?: boolean;
  backdrop?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};
const Modal = ({ open, responsive, backdrop, onClose, children }: ModalProps) => {
  return (
    <RNModal
      transparent
      visible={open}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={tw`flex-1 justify-center items-center bg-black/50`}
        onPress={backdrop ? onClose : undefined}
      >
        <View
          style={tw`bg-white rounded-lg p-6 w-11/12 ${responsive ? 'max-w-md' : ''}`}
        >
          {children}
        </View>
      </Pressable>
    </RNModal>
  );
};
export type DialogProps = Omit<ModalProps, 'open'>;
const useDialog = () => {
  const [visible, setVisible] = React.useState(false);
  const handleShow = useCallback(() => setVisible(true), []);
  const handleHide = useCallback(() => setVisible(false), []);
  const Dialog = ({ children, ...props }: DialogProps) => {
    return <Modal {...props} open={visible} onClose={handleHide}>{children}</Modal>;
  };
  return { Dialog, handleShow, handleHide };
};
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
  useDialog,
});
