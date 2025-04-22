import React, { ReactNode } from 'react';
import { View, useWindowDimensions } from 'react-native';
import tw from 'twrnc';

export type JoinProps = {
  responsive?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  children?: ReactNode;
};

const Join = ({ responsive, vertical, horizontal, children }: JoinProps) => {
  const { width } = useWindowDimensions();
  const isLargeScreen = responsive && width >= 1024; // Adjust for responsiveness

  const containerStyles = [
    tw`flex`,
    vertical ? tw`flex-col` : tw`flex-row`,
    isLargeScreen ? tw`flex-row` : null, // Apply horizontal flex if large screen
  ];

  return <View style={containerStyles}>{children}</View>;
};

export default Join;
