import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import FooterTitle from './FooterTitle';

export type FooterProps = {
  center?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Footer = React.forwardRef<View, FooterProps>(
  ({ center, className = '', children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        style={tw`${className} ${center ? 'items-center' : ''} p-4`}
        {...props}
      >
        {children}
      </View>
    );
  }
);

export default Object.assign(Footer, { Title: FooterTitle });
