import React, { forwardRef } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import Tab from './Tab';
import RadioTab from './RadioTab';
export type TabsProps = {
  variant?: 'bordered' | 'lifted' | 'boxed';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children?: React.ReactNode;
  style?: any;
};
const Tabs = forwardRef<View, TabsProps>(({ children, variant, size, style }, ref) => {
  const variantStyles = {
    boxed: tw`border p-2 rounded`,
    bordered: tw`border-b`,
    lifted: tw`shadow-lg p-2`,
  }[variant || 'bordered'];
  const sizeStyles = {
    lg: tw`p-4`,
    md: tw`p-3`,
    sm: tw`p-2`,
    xs: tw`p-1`,
  }[size || 'md'];
  return (
    <View ref={ref} style={[tw`flex flex-row`, variantStyles, sizeStyles, style]}>
      {children}
    </View>
  );
});
export default Object.assign(Tabs, { Tab, RadioTab });
