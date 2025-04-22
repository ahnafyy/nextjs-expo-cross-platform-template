import React, { forwardRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import { Summary } from './CollapseTitle';

export type DetailsProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  open?: boolean;
};

const Details = forwardRef<View, DetailsProps>(({ children, className, icon, open = false }, ref) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <View ref={ref} style={tw`${className || ''} border border-gray-300 rounded-lg p-2`}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={tw`flex-row items-center`}>
        {icon && <View style={tw`mr-2`}>{icon}</View>}
        <Text style={tw`font-semibold text-black`}>Toggle</Text>
      </TouchableOpacity>

      {isOpen && <View style={tw`mt-2`}>{children}</View>}
    </View>
  );
});

Details.displayName = 'Details';

export default Object.assign(Details, { Title: Summary });
