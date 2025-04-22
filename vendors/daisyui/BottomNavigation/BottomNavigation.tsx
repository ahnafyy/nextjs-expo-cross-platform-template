import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import BottomNavigationItem, { BottomNavigationItemProps } from './BottomNavigationItem';
import BottomNavigationLabel, { BottomNavigationLabelProps } from './BottomNavigationLabel';
export type BottomNavigationProps = ViewProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg';
};
const BottomNavigation = forwardRef<View, BottomNavigationProps>(
  ({ size, style, children, ...props }, ref) => {
    const sizeStyles = {
      xs: tw`h-10`,
      sm: tw`h-12`,
      md: tw`h-14`,
      lg: tw`h-16`,
    };
    return (
      <View ref={ref} style={[tw`flex-row justify-around items-center bg-white shadow-md`, size && sizeStyles[size], style]} {...props}>
        {children}
      </View>
    );
  }
);
BottomNavigation.displayName = 'BottomNavigation';
export default Object.assign(BottomNavigation, {
  Item: BottomNavigationItem,
  Label: BottomNavigationLabel,
});
