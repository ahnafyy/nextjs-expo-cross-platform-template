import React from 'react';
import { Image, View, ImageProps, StyleProp, ViewStyle } from 'react-native';
import tw from 'twrnc';

export type CardImageProps = ImageProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

const CardImage = React.forwardRef<Image, CardImageProps>(({ containerStyle, ...props }, ref) => {
  return (
    <View style={[tw`rounded-lg overflow-hidden`, containerStyle]}>
      <Image ref={ref} {...props} style={[tw`w-full h-auto`, props.style]} />
    </View>
  );
});

export default CardImage;
