import React, { ReactElement, forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import { AvatarProps } from './Avatar';
export type AvatarGroupProps = ViewProps & {
  children: ReactElement<AvatarProps>[];
};
const AvatarGroup = forwardRef<View, AvatarGroupProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <View
        ref={ref}
        accessibilityLabel={`Group of ${children.length} avatar photos`}
        style={[tw`flex-row`, style]}
        {...props}
      >
        {children.map((child, index) => (
          <View key={index} style={tw`-ml-4 border-2 border-white rounded-full`}>
            {child}
          </View>
        ))}
      </View>
    );
  }
);
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
