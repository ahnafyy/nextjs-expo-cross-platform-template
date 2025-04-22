import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import StatSection, { StatSectionProps } from './StatSection';
export type StatProps = {
  children: React.ReactNode;
  style?: any;
};
const Stat = ({ children, style }: StatProps) => {
  return <View style={[tw`p-4 bg-white rounded-lg shadow-md`, style]}>{children}</View>;
};
const StatTitle = (props: Omit<StatSectionProps, 'section'>) => (
  <StatSection {...props} section="title" />
);
const StatValue = (props: Omit<StatSectionProps, 'section'>) => (
  <StatSection {...props} section="value" />
);
const StatDesc = (props: Omit<StatSectionProps, 'section'>) => (
  <StatSection {...props} section="desc" />
);
const StatFigure = (props: Omit<StatSectionProps, 'section'>) => (
  <StatSection {...props} section="figure" />
);
const StatActions = (props: Omit<StatSectionProps, 'section'>) => (
  <StatSection {...props} section="actions" />
);
export default Object.assign(Stat, {
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
});
