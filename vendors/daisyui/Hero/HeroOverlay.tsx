import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export type HeroOverlayProps = {
  className?: string;
  children?: React.ReactNode;
};

const HeroOverlay = React.forwardRef<View, HeroOverlayProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <View ref={ref} style={tw`${className} absolute inset-0 bg-black/50`} {...props}>
        {children}
      </View>
    );
  }
);

export default HeroOverlay;
