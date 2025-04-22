'use client';

import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export type DrawerProps = {
  side: React.ReactNode;
  open?: boolean;
  end?: boolean;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
  children?: React.ReactNode;
};

const Drawer = ({
  children,
  side,
  open = false,
  end = false,
  contentClassName = '',
  sideClassName = '',
  overlayClassName = '',
  onClickOverlay,
}: DrawerProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
      onDismiss={() => setVisible(false)}
    >
      <TouchableOpacity
        style={tw`absolute inset-0 bg-black/50 ${overlayClassName}`}
        activeOpacity={1}
        onPress={() => {
          onClickOverlay?.();
          setVisible(false);
        }}
      />
      <View style={tw`absolute top-0 ${end ? 'right-0' : 'left-0'} h-full w-64 bg-white shadow-lg ${sideClassName}`}>
        {side}
      </View>
      <View style={tw`flex-1 ${contentClassName}`}>{children}</View>
    </Modal>
  );
};

export default Drawer;