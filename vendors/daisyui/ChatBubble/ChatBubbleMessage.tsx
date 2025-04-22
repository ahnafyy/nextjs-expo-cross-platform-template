import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import tw from 'twrnc';

export type ComponentColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type ChatBubbleMessageProps = ViewProps & {
  color?: ComponentColor;
  children: string;
};

const ChatBubbleMessage = React.forwardRef<View, ChatBubbleMessageProps>(
  ({ color, style, children, ...props }, ref) => {
    const bubbleStyles = [
      tw`p-3 rounded-lg`,
      color === 'primary' && tw`bg-blue-500 text-white`,
      color === 'secondary' && tw`bg-gray-500 text-white`,
      color === 'accent' && tw`bg-purple-500 text-white`,
      color === 'info' && tw`bg-blue-300 text-black`,
      color === 'success' && tw`bg-green-500 text-white`,
      color === 'warning' && tw`bg-yellow-500 text-black`,
      color === 'error' && tw`bg-red-500 text-white`,
      style, // ✅ Allows external styles to be passed
    ];

    return (
      <View {...props} style={bubbleStyles} ref={ref}>
        <Text style={tw`text-sm`}>{children}</Text>
      </View>
    );
  }
);

export default ChatBubbleMessage;
