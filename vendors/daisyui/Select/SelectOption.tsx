import React from 'react';
import { Picker } from '@react-native-picker/picker';
export type SelectOptionProps = {
  label: string;
  value: string;
};
const SelectOption = ({ label, value }: SelectOptionProps) => {
  return <Picker.Item label={label} value={value} />;
};
export default SelectOption;
