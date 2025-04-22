import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import RatingItem from './RatingItem';
export type RatingProps = {
  value: number;
  onChange?: (newRating: number) => void;
};
const Rating = ({ value, onChange }: RatingProps) => {
  return (
    <View style={tw`flex-row`}>
      {[...Array(5)].map((_, index) => (
        <RatingItem
          key={index}
          checked={value > index}
          onPress={() => onChange?.(index + 1)}
        />
      ))}
    </View>
  );
};
export default Rating;
