import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
export type RatingItemProps = {
  checked?: boolean;
  onPress?: () => void;
};
const RatingItem = ({ checked = false, onPress }: RatingItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`p-2`}>
      <View
        style={tw`${checked ? 'bg-yellow-400' : 'bg-gray-300'} w-6 h-6 rounded-full`}
      />
    </TouchableOpacity>
  );
};
export default RatingItem;
