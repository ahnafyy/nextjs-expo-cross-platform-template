import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import tw from 'twrnc';

export type ChatBubbleHeaderProps = ViewProps & {
  children: string;
};

const ChatBubbleHeader = React.forwardRef<View, ChatBubbleHeaderProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <View {...props} style={[tw`mb-1`, style]} ref={ref}>
        <Text style={tw`text-xs font-semibold text-gray-600`}>{children}</Text>
      </View>
    );
  }
);

export default ChatBubbleHeader;
