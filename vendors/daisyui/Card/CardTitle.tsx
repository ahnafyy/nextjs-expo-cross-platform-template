import React, { ElementType } from 'react';
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import tw from 'twrnc';
import { IComponentBaseProps } from '../types';

export type CardTitleProps = IComponentBaseProps & {
  tag?: 'View' | 'Text';
  className?: string;
  style?: StyleProp<TextStyle | ViewStyle>;
};

const CardTitle = React.forwardRef<React.ComponentRef<typeof Text | typeof View>, CardTitleProps>(
  ({ className, tag = 'View', style, ...props }, ref) => {
    const Tag: React.ComponentType<any> = tag === 'View' ? View : Text;

    return (
      <Tag
        {...props}
        style={[tw`card-title`, className ? tw`${className}` : undefined, style]}
        ref={ref}
      />
    );
  }
);

export default CardTitle;
