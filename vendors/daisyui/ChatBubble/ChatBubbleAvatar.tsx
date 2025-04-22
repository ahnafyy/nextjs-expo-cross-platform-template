import React from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

export type ChatBubbleAvatarProps = AvatarProps & ViewProps;

const SIZE_MAP: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
};

const ChatBubbleAvatar = React.forwardRef<View, ChatBubbleAvatarProps>(
  ({ size = 'xs', shape = 'circle', style, ...props }, ref) => {
    const avatarSize = typeof size === 'number' ? size : SIZE_MAP[size] || 24; // Convert to number

    return (
      <View ref={ref} style={[tw`rounded-full`, { width: avatarSize, height: avatarSize }, style]}>
        <Avatar size={avatarSize} shape={shape} {...props} />
      </View>
    );
  }
);

export default ChatBubbleAvatar;
