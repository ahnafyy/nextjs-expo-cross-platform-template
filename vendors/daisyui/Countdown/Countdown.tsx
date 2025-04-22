import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export type CountdownProps = {
  value: number;
  className?: string;
};

const Countdown = ({ value, className }: CountdownProps): JSX.Element => {
  const displayedValue = Math.min(99, Math.max(0, value));

  return (
    <View style={tw`items-center justify-center ${className || ''}`}>
      <Text style={tw`text-lg font-bold`}>{displayedValue}</Text>
    </View>
  );
};

export default Countdown;
