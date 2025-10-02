import tw from 'twrnc';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CollapseTitle from '../Collapse/CollapseTitle';
import CollapseContent from '../Collapse/CollapseContent';
export type AccordionProps = {
  name?: string;
  icon?: 'arrow' | 'plus';
  children: React.ReactNode;
};
const Accordion: React.FC<AccordionProps> & {
  Title: typeof CollapseTitle;
  Content: typeof CollapseContent;
} = ({ name: _name = 'accordion', icon, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={tw`border border-gray-300 rounded-lg overflow-hidden`}>  
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={tw`p-4 bg-gray-100 flex-row justify-between items-center`}
      >
        {icon === 'arrow' && <View style={tw`mr-2`}>{/* Arrow Icon */}</View>}
        {icon === 'plus' && <View style={tw`mr-2`}>{/* Plus Icon */}</View>}
      </TouchableOpacity>
      {expanded && <View style={tw`p-4`}>{children}</View>}
    </View>
  );
};
Accordion.Title = CollapseTitle;
Accordion.Content = CollapseContent;
export default Accordion;
