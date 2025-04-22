import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
type TooltipProps = {
  message: string;
  open?: boolean;
  color?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
};
const Tooltip = forwardRef<View, TooltipProps>(({ message, children, open, color, position }, ref) => {
  const tooltipStyle = tw`
    ${open ? 'opacity-100' : 'opacity-0'}
    ${color ? color : 'bg-gray-800'}
    p-2 rounded absolute`
  ;
  const positionStyle = tw`
    ${position === 'top' ? 'bottom-full mb-2' : ''}
    ${position === 'bottom' ? 'top-full mt-2' : ''}
    ${position === 'left' ? 'right-full mr-2' : ''}
    ${position === 'right' ? 'left-full ml-2' : ''}
  `;
  return (
    <View ref={ref} style={tw`relative inline-flex`}>
      {children}
      <View style={[tooltipStyle, positionStyle]}>
        <Text style={tw`text-white text-xs`}>{message}</Text>
      </View>
    </View>
  );
});
Tooltip.displayName = 'Tooltip';
export default Tooltip;