import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
export type ProgressProps = {
  value: number;
  max?: number;
  color?: string;
};
const Progress = ({ value, max = 100, color = 'blue' }: ProgressProps) => {
  const progress = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <View style={tw`w-full h-2 bg-gray-300 rounded-full`}>
      <View
        style={[
          tw`h-full rounded-full`,
          { width: `${progress}%`, backgroundColor: tw.color(color) || color },
        ]}
      />
    </View>
  );
};
export default Progress;
