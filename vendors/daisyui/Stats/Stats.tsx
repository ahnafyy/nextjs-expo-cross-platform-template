import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import Stat from './Stat';
export type StatsProps = {
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  style?: any;
};
const Stats = ({ direction = 'horizontal', children, style }: StatsProps) => {
  return (
    <View
      style={[
        tw`flex p-4 bg-white rounded-lg shadow-md`,
        direction === 'horizontal' ? tw`flex-row` : tw`flex-col`,
        style,
      ]}
    >
      {children}
    </View>
  );
};
export default Object.assign(Stats, { Stat });
