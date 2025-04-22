import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import tw from 'twrnc';
import CardActions, { CardActionsProps as ActionProps } from './CardActions';
import CardBody, { CardBodyProps as BodyProps } from './CardBody';
import CardTitle, { CardTitleProps as TitleProps } from './CardTitle';
import CardImage, { CardImageProps as ImageProps } from './CardImage';

export type CardActionsProps = ActionProps;
export type CardBodyProps = BodyProps;
export type CardTitleProps = TitleProps;
export type CardImageProps = ImageProps;

export type CardProps = ViewProps & {
  bordered?: boolean;
  imageFull?: boolean;
  normal?: boolean; // Applies default paddings
  compact?: boolean; // Applies smaller padding
  side?: boolean; // The image will be on the side
  style?: StyleProp<ViewStyle>;
};

const Card = React.forwardRef<View, CardProps>(
  ({ bordered = true, imageFull, normal, compact, side, style, ...props }, ref) => {
    return (
      <View
        ref={ref}
        aria-label="Card"
        style={[
          tw`bg-white rounded-lg shadow p-4`,
          bordered && tw`border border-gray-300`,
          imageFull && tw`overflow-hidden`,
          normal && tw`p-6`,
          compact && tw`p-2`,
          side && tw`flex-row`,
          style,
        ]}
        {...props}
      />
    );
  }
);

export default Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
});
