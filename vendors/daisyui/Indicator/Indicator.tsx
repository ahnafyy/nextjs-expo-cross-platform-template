import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import IndicatorItem, { IndicatorItemProps as ItemProps } from './IndicatorItem';

export type IndicatorItemProps = ItemProps;
export type IndicatorProps = {
  children?: React.ReactNode;
  className?: string;
};

const getClasses = ({ className = '' }: Pick<IndicatorProps, 'className'> = {}) => {
  return [tw`relative`, className ? tw`${className}` : null].filter(Boolean);
};

const Indicator = React.forwardRef<View, IndicatorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <View ref={ref} style={getClasses({ className })} {...props}>
        {children}
      </View>
    );
  }
);

Indicator.displayName = 'Indicator';

export default Object.assign(Indicator, {
  Item: IndicatorItem,
});
