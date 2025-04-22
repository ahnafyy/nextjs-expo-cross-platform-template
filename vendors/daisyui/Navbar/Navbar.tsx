import React, { ReactNode } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import NavbarSection, { NavbarSectionProps } from './NavbarSection';
export type NavbarProps = {
  children?: ReactNode;
};
const Navbar = ({ children }: NavbarProps) => {
  return <View style={tw`flex-row justify-between items-center p-4 bg-gray-100`}>{children}</View>;
};
const NavbarStart = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="start" />
);
const NavbarCenter = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="center" />
);
const NavbarEnd = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="end" />
);
export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
