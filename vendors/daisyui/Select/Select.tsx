import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
export type SelectProps = {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  bordered?: boolean;
  borderOffset?: boolean;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
};
const Select = ({
  children,
  size = 'md',
  color,
  bordered = true,
  borderOffset,
  selectedValue,
  onValueChange,
}: SelectProps) => {
  const styles = tw.style(
    'px-4 py-2 rounded-md',
    size === 'lg' && 'text-lg py-3',
    size === 'sm' && 'text-sm py-1',
    color === 'primary' && 'border-blue-500 text-blue-500',
    color === 'secondary' && 'border-gray-500 text-gray-500',
    bordered && 'border',
    !borderOffset && 'outline-none'
  );
  return (
    <View style={tw`border-gray-300 ${bordered ? 'border' : ''} rounded-md`}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles}>
        {children}
      </Picker>
    </View>
  );
};
export default Select;
