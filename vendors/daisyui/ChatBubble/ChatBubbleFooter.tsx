import React from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';

export type ChatBubbleFooterProps = ViewProps;

const ChatBubbleFooter = React.forwardRef<View, ChatBubbleFooterProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <View {...props} style={[tw`opacity-50 mt-1`, style]} ref={ref}>
        {children}
      </View>
    );
  }
);

export default ChatBubbleFooter;
