import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export type IndicatorItemProps = {
  className?: string;
  children?: React.ReactNode;
  horizontal?: 'start' | 'center' | 'end';
  vertical?: 'top' | 'middle' | 'bottom';
};

const getClasses = ({
  horizontal,
  vertical,
  className = '',
}: Pick<IndicatorItemProps, 'className' | 'horizontal' | 'vertical'> = {}) => {
  return [
    tw`absolute`, // Ensures positioning
    horizontal === 'start' && tw`left-0`,
    horizontal === 'center' && tw`left-1/2 -translate-x-1/2`,
    horizontal === 'end' && tw`right-0`,
    vertical === 'top' && tw`top-0`,
    vertical === 'middle' && tw`top-1/2 -translate-y-1/2`,
    vertical === 'bottom' && tw`bottom-0`,
    className ? tw`${className}` : null,
  ].filter(Boolean);
};

const IndicatorItem = React.forwardRef<View, IndicatorItemProps>(
  ({ children, horizontal = 'end', vertical = 'top', className, ...props }, ref) => {
    return (
      <View ref={ref} style={getClasses({ className, horizontal, vertical })} {...props}>
        {children}
      </View>
    );
  }
);

IndicatorItem.displayName = 'IndicatorItem';
export default IndicatorItem;
