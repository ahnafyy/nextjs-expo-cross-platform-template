import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import tw from 'twrnc';
export type SwapProps = {
  onElement: React.ReactNode;
  offElement: React.ReactNode;
  active?: boolean;
  rotate?: boolean;
  flip?: boolean;
  onPress?: () => void;
  style?: any;
};
const Swap = ({ onElement, offElement, active = false, rotate, flip, onPress, style }: SwapProps) => {
  const [isActive, setIsActive] = useState(active);
  const handlePress = () => {
    setIsActive(!isActive);
    onPress?.();
  };
  return (
    <Pressable
      onPress={handlePress}
      style={[
        tw`flex items-center justify-center`,
        rotate && tw`rotate-180`,
        flip && tw`scale-x-[-1]`,
        style,
      ]}
    >
      <View>{isActive ? onElement : offElement}</View>
    </Pressable>
  );
};
export default Swap;
