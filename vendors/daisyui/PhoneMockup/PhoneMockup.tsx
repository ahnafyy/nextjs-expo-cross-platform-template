import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
export type PhoneMockupProps = {
  color?: string;
  innerProps?: object;
  innerRef?: React.Ref<View>;
  children?: React.ReactNode;
};
const PhoneMockup = ({ color = 'gray', innerProps, innerRef, children }: PhoneMockupProps) => {
  return (
    <View style={tw`border-4 rounded-3xl p-2 border-${color} bg-white`}>
      <View style={tw`w-4 h-4 bg-black rounded-full self-center my-2`} />
      <View
        {...innerProps}
        ref={innerRef}
        style={tw`aspect-[9/19.5] bg-gray-100 rounded-xl p-2`}
      >
        {children}
      </View>
    </View>
  );
};
export default PhoneMockup;
