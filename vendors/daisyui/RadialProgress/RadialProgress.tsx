import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import tw from 'twrnc';
export type RadialProgressProps = {
  value: number;
  size?: number;
  thickness?: number;
  color?: string;
  children?: React.ReactNode;
};
const RadialProgress = ({ value, size = 64, thickness = 4, color = 'blue', children }: RadialProgressProps) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(100, Math.max(0, value));
  const strokeDashoffset = circumference * ((100 - progress) / 100);
  return (
    <View style={tw`items-center justify-center`}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={tw.color('gray-300') || 'lightgray'}
          strokeWidth={thickness}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={tw.color(color) || color}
          strokeWidth={thickness}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      {children && (
        <View style={tw`absolute`}>
          <Text style={tw`text-lg font-bold text-${color}`}>{children}</Text>
        </View>
      )}
    </View>
  );
};
export default RadialProgress;
