import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import ChatBubbleAvatar from './ChatBubbleAvatar';
import ChatBubbleMessage from './ChatBubbleMessage';
import ChatBubbleHeader from './ChatBubbleHeader';
import ChatBubbleTime from './ChatBubbleTime';
import ChatBubbleFooter from './ChatBubbleFooter';

export type ChatBubbleProps = ViewProps & {
  end?: boolean;
};

const ChatBubble = forwardRef<View, ChatBubbleProps>(
  ({ end = false, style, children, ...props }, ref) => (
    <View
      {...props}
      ref={ref}
      style={[
        tw`${end ? 'items-end' : 'items-start'} my-2`,
        style,
      ]}
    >
      {children}
    </View>
  )
);

ChatBubble.displayName = 'ChatBubble';

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
});
