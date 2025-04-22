import React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';

export type FooterTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

const FooterTitle = React.forwardRef<Text, FooterTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <Text ref={ref} style={tw`text-lg font-bold ${className}`} {...props}>
        {children}
      </Text>
    );
  }
);

export default FooterTitle;
