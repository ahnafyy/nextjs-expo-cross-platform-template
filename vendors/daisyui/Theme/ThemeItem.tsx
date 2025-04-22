import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
export type ThemeItemProps = {
  dataTheme: string;
  selected?: boolean;
  children?: React.ReactNode;
  style?: any;
};
const ThemeItem = ({ selected, children, dataTheme, style, ...props }: ThemeItemProps) => {
  return (
    <View
      {...props}
      style={[
        tw`overflow-hidden rounded-lg border-2 p-2`,
        selected && tw`border-blue-500`,
        style
      ]}
    >
      <View style={tw`w-full`}>
        <View style={tw`flex flex-col gap-2 p-2`}>
          <Text style={tw`font-bold`}>{dataTheme}</Text>
          <View style={tw`flex flex-row gap-2`}>
            <View style={tw`bg-blue-500 w-6 h-6 rounded items-center justify-center`}>
              <Text style={tw`text-white font-bold`}>A</Text>
            </View>
            <View style={tw`bg-green-500 w-6 h-6 rounded items-center justify-center`}>
              <Text style={tw`text-white font-bold`}>A</Text>
            </View>
            <View style={tw`bg-yellow-500 w-6 h-6 rounded items-center justify-center`}>
              <Text style={tw`text-white font-bold`}>A</Text>
            </View>
            <View style={tw`bg-gray-500 w-6 h-6 rounded items-center justify-center`}>
              <Text style={tw`text-white font-bold`}>A</Text>
            </View>
          </View>
          {children && <View style={tw`mt-2`}>{children}</View>}
        </View>
      </View>
    </View>
  );
};
export default ThemeItem;
