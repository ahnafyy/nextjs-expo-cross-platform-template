import React, { forwardRef, ReactNode } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import TimelineItem from './TimelineItem';
import TimelineStart from './TimelineStart';
import TimelineMiddle from './TimelineMiddle';
import TimelineEnd from './TimelineEnd';
export type TimelineProps = {
  vertical?: boolean;
  horizontal?: boolean;
  responsive?: boolean;
  snap?: boolean;
  compact?: boolean;
  children?: ReactNode;
  style?: any;
};
const Timeline = forwardRef<View, TimelineProps>(
  ({ vertical, horizontal, responsive, snap, compact, children, style, ...props }, ref) => {
    return (
      <View
        {...props}
        ref={ref}
        style={[
          tw`flex`,
          vertical && tw`flex-col`,
          horizontal && tw`flex-row`,
          responsive && tw`lg:flex-row`,
          compact && tw`p-2`,
          style
        ]}
      >
        {children}
      </View>
    );
  }
);
export default Object.assign(Timeline, {
  Item: TimelineItem,
  Start: TimelineStart,
  Middle: TimelineMiddle,
  End: TimelineEnd,
});
