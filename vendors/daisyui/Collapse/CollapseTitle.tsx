import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export type CollapseTitleProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

const CollapseTitle = ({ children, className, onPress }: CollapseTitleProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`${className || ''} p-3 bg-gray-200 rounded-lg`}>
      <Text style={tw`font-semibold text-black`}>{children}</Text>
    </TouchableOpacity>
  );
};

export type SummaryProps = CollapseTitleProps;

export const Summary = forwardRef<React.ElementRef<typeof TouchableOpacity>, SummaryProps>(
  ({ children, className, onPress }, ref) => {
    return (
      <TouchableOpacity ref={ref} onPress={onPress} style={tw`${className || ''} p-3 bg-gray-300 rounded-lg`}>
        <Text style={tw`font-semibold text-black`}>{children}</Text>
      </TouchableOpacity>
    );
  }
);

export default CollapseTitle;
