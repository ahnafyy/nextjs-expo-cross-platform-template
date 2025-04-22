import React, { cloneElement, LegacyRef } from 'react';
import { View, Image, TouchableOpacity, ViewProps, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import tw from 'twrnc';
import Button from '../Button/Button';

export type CarouselItemWidth = 'full' | 'half';

export type CarouselItemProps = ViewProps & {
  innerRef?: LegacyRef<View>;
  src?: ImageSourcePropType;
  alt?: string;
  index?: number;
  width?: CarouselItemWidth;
  hasButtons?: boolean;
  buttonStyle?: (value: string) => React.ReactElement;
  onPrev?: () => void;
  onNext?: () => void;
  style?: StyleProp<ViewStyle>;
};

const CarouselItem = ({
  children,
  innerRef,
  src,
  alt,
  index = 0,
  width,
  hasButtons,
  buttonStyle,
  onPrev,
  onNext,
  style,
  ...props
}: CarouselItemProps): JSX.Element => {
  const containerStyle = [
    tw`relative h-full`,
    width === 'full' ? tw`w-full` : tw`w-1/2`,
    style,
  ];

  const renderButtons = () => {
    if (buttonStyle) {
      return (
        <>
          {cloneElement(buttonStyle('❮'), { onPress: onPrev })}
          {cloneElement(buttonStyle('❯'), { onPress: onNext })}
        </>
      );
    }
    return (
      <>
        <TouchableOpacity onPress={onPrev} style={tw`absolute left-5 top-1/2 -translate-y-1/2`}>
          <Button shape="circle">❮</Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext} style={tw`absolute right-5 top-1/2 -translate-y-1/2`}>
          <Button shape="circle">❯</Button>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View {...props} ref={innerRef} style={containerStyle}>
      {src ? <Image source={src} alt={alt} style={tw`w-full h-full`} /> : children}
      {hasButtons && <View style={tw`absolute flex-row justify-between w-full px-5 top-1/2 -translate-y-1/2`}>{renderButtons()}</View>}
    </View>
  );
};

export default CarouselItem;
