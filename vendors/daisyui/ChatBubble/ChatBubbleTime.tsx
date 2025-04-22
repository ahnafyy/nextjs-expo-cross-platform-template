import React from 'react';
import { Text, TextProps } from 'react-native';
import tw from 'twrnc';

export type ChatBubbleTimeProps = TextProps & {
  children: string;
};

const ChatBubbleTime = React.forwardRef<Text, ChatBubbleTimeProps>(
  ({ style, children, ...props }, ref) => (
    <Text {...props} style={[tw`text-xs opacity-50`, style]} ref={ref}>
      {children}
    </Text>
  )
);

export default ChatBubbleTime;
