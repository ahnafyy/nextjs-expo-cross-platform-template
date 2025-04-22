import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
export type SkeletonProps = {
  children?: React.ReactNode;
  style?: any;
};
const Skeleton = ({ children, style }: SkeletonProps) => {
  return (
    <View style={[tw`bg-gray-300 rounded-md animate-pulse`, style]}>
      {children}
    </View>
  );
};
export default Skeleton;
