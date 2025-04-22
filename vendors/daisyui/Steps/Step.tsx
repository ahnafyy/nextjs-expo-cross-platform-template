import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
export type StepProps = {
  children: React.ReactNode;
  value?: string;
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  style?: any;
};
const Step = ({ children, value, color, style }: StepProps) => {
  const colorStyles = {
    primary: 'text-blue-600 border-blue-600',
    secondary: 'text-gray-600 border-gray-600',
    accent: 'text-purple-600 border-purple-600',
    info: 'text-sky-600 border-sky-600',
    success: 'text-green-600 border-green-600',
    warning: 'text-yellow-600 border-yellow-600',
    error: 'text-red-600 border-red-600',
    neutral: 'text-gray-400 border-gray-400',
  };
  return (
    <View style={tw`flex-row items-center ${color ? colorStyles[color] : ''} border-l-4 pl-2 py-2 ${style}`}>
      {value && <Text style={tw`mr-2 font-bold`}>{value}</Text>}
      <Text>{children}</Text>
    </View>
  );
};
export default Step;
