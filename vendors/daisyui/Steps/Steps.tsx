import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import Step from './Step';
export type StepsProps = {
  children: React.ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
  style?: any;
};
const Steps = ({ children, vertical = false, horizontal = false, style }: StepsProps) => {
  return (
    <View
      style={tw`${vertical ? 'flex-col' : horizontal ? 'flex-row' : 'flex-col'} ${style}`}
    >
      {children}
    </View>
  );
};
export default Object.assign(Steps, { Step });
