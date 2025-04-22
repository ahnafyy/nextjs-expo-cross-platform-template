import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export type LabelProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
};

const Label = React.forwardRef<View, LabelProps>(
  ({ title, className = '', children, onPress, ...props }, ref) => {
    return (
      <TouchableOpacity ref={ref} style={tw`${className} flex flex-col`} {...props} onPress={onPress}>
        {title && <Text style={tw`text-base text-gray-800`}>{title}</Text>}
        <View>{children}</View>
      </TouchableOpacity>
    );
  }
);

export default Label;
