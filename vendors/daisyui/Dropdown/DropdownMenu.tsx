import React from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';

export type DropdownMenuProps = ViewProps & {
  dataTheme?: string;
};

const DropdownMenu = ({ dataTheme, style, ...props }: DropdownMenuProps) => {
  return (
    <View
      {...props}
      style={[tw`p-2 shadow bg-white rounded-lg`, style]}
      accessibilityRole="menu"
    />
  );
};

export default DropdownMenu;
