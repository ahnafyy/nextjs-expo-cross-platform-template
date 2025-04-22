import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export type CollapseContentProps = {
  children?: React.ReactNode;
  className?: string;
};

const CollapseContent = ({ children, className }: CollapseContentProps): JSX.Element => {
  return <View style={tw`${className || ''} p-2`}>{children}</View>;
};

export default CollapseContent;
