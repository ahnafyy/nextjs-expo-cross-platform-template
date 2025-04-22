import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
export type StatSectionProps = {
  children: React.ReactNode;
  section: 'title' | 'value' | 'desc' | 'figure' | 'actions';
  style?: any;
};
const StatSection = ({ children, section, style }: StatSectionProps) => {
  const sectionStyles = {
    title: 'text-lg font-bold',
    value: 'text-2xl font-extrabold',
    desc: 'text-sm text-gray-500',
    figure: 'p-2',
    actions: 'flex-row justify-between',
  };
  return (
    <View style={[tw`${sectionStyles[section]}`, style]}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </View>
  );
};
export default StatSection;
