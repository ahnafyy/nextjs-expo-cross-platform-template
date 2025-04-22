import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CollapseDetails from './CollapseDetails';
import CollapseTitle from './CollapseTitle';
import CollapseContent from './CollapseContent';

export type CollapseProps = {
  children?: React.ReactNode;
  icon?: 'arrow' | 'plus';
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
  className?: string;
};

const Collapse = ({
  children,
  icon,
  open = false,
  className,
  onOpen,
  onClose,
  onToggle,
}: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle();
    if (newState && onOpen) onOpen();
    if (!newState && onClose) onClose();
  };

  return (
    <View style={tw`${className || ''}`}>
      <TouchableOpacity onPress={handleToggle} style={tw`p-2`}>
        <View style={tw`flex-row items-center`}>
          {icon === 'arrow' && <View style={tw`mr-2`} />}
          {icon === 'plus' && <View style={tw`mr-2`} />}
          <CollapseTitle />
        </View>
      </TouchableOpacity>
      {isOpen && <CollapseContent>{children}</CollapseContent>}
    </View>
  );
};

export default Object.assign(Collapse, {
  Details: CollapseDetails,
  Title: CollapseTitle,
  Content: CollapseContent,
});
