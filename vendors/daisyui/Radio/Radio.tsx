import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
export type RadioProps = {
  selected?: boolean;
  onPress?: () => void;
  color?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
};
const sizeMap = {
  lg: 'w-8 h-8',
  md: 'w-6 h-6',
  sm: 'w-4 h-4',
  xs: 'w-3 h-3',
};
const Radio = ({ selected = false, onPress, color = 'blue', size = 'md' }: RadioProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`p-2`}>
      <View
        style={tw`${sizeMap[size]} rounded-full border-2 border-${color} flex items-center justify-center`}
      >
        {selected && <View style={tw`w-1/2 h-1/2 bg-${color} rounded-full`} />}
      </View>
    </TouchableOpacity>
  );
};
export default Radio;
