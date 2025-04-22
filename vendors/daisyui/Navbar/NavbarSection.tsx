import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import tw from 'twrnc';
export type NavbarSectionProps = {
  children?: ReactNode;
  section: 'start' | 'center' | 'end';
  style?: ViewStyle;
};
const NavbarSection = ({ children, section, style }: NavbarSectionProps) => {
  const sectionStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };
  return <View style={[tw`flex-1 ${sectionStyles[section]}`, style]}>{children}</View>;
};
export default NavbarSection;
