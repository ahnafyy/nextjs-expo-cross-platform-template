import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import tw from 'twrnc';
export type RangeProps = {
  value: number;
  onChange: (value: number) => void;
  color?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  displayTicks?: boolean;
  ticksStep?: number;
  min?: number;
  max?: number;
};
const Range = ({
  value,
  onChange,
  color = 'blue',
  size = 'md',
  displayTicks = false,
  ticksStep = 10,
  min = 0,
  max = 100,
}: RangeProps) => {
  const numTicks = Math.max(Math.ceil((max - min) / ticksStep), 1) + 1;
  return (
    <View>
      <Slider
        style={tw`w-full`}
        minimumValue={min}
        maximumValue={max}
        step={ticksStep}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={color}
        maximumTrackTintColor="gray"
        thumbTintColor={color}
      />
      {displayTicks && (
        <View style={tw`flex-row justify-between px-2`}>
          {[...Array(numTicks)].map((_, i) => (
            <Text key={i}>|</Text>
          ))}
        </View>
      )}
    </View>
  );
};
export default Range;
