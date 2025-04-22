import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import HeroContent from './HeroContent';
import HeroOverlay from './HeroOverlay';

export type HeroProps = {
  className?: string;
  children?: React.ReactNode;
};

const Hero = React.forwardRef<View, HeroProps>(({ className = '', children, ...props }, ref) => {
  return (
    <View ref={ref} style={tw`${className} relative w-full h-64`} {...props}>
      {children}
    </View>
  );
});

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
});
