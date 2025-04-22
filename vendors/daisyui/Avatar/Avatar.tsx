import React, { forwardRef } from 'react';
import { View, Image, Text, ViewProps } from 'react-native';
import tw from 'twrnc';
import AvatarGroup from './AvatarGroup';
export type AvatarProps = ViewProps & {
  src?: string;
  letters?: string;
  size?: number;
  shape?: 'circle' | 'square';
  border?: boolean;
  borderColor?: string;
  online?: boolean;
  offline?: boolean;
  children?: React.ReactNode;
};
const Avatar = forwardRef<View, AvatarProps>(
  (
    {
      src,
      letters,
      size = 40,
      shape = 'circle',
      border,
      borderColor = 'white',
      online,
      offline,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const avatarStyle = [
      tw`justify-center items-center`,
      {
        width: size,
        height: size,
        borderRadius: shape === 'circle' ? size / 2 : 8,
        borderWidth: border ? 2 : 0,
        borderColor: border ? borderColor : 'transparent',
      },
      style,
    ];
    return (
      <View ref={ref} style={avatarStyle} {...props}>
        {src ? (
          <Image source={{ uri: src }} style={{ width: size, height: size, borderRadius: shape === 'circle' ? size / 2 : 8 }} />
        ) : letters ? (
          <Text style={tw`text-white text-lg font-bold`}>{letters}</Text>
        ) : (
          children
        )}
        {(online || offline) && (
          <View
            style={[
              tw`absolute bottom-0 right-0 w-4 h-4 rounded-full`,
              { backgroundColor: online ? 'green' : offline ? 'gray' : 'transparent' },
            ]}
          />
        )}
      </View>
    );
  }
);
Avatar.displayName = 'Avatar';
export default Object.assign(Avatar, {
  Group: AvatarGroup,
});
