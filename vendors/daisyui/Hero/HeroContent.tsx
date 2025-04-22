import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export type HeroContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const HeroContent = React.forwardRef<View, HeroContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <View ref={ref} style={tw`${className} absolute inset-0 flex items-center justify-center`} {...props}>
        {children}
      </View>
    );
  }
);

export default HeroContent;
