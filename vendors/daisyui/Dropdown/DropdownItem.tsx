import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, View, ViewProps, TextProps } from 'react-native';
import tw from 'twrnc';

export type DropdownItemProps = ViewProps & {
  anchor?: boolean;
  onPress?: () => void;
  textProps?: TextProps;
};

const DropdownItem = forwardRef<View, DropdownItemProps>(
  ({ anchor = true, children, onPress, style, textProps, ...props }, ref) => {
    return (
      <View {...props} style={[tw`p-2`, style]} accessibilityRole="menuitem">
        {anchor ? (
          <TouchableOpacity ref={ref} onPress={onPress} style={tw`p-2`}>
            <Text {...textProps} style={[tw`text-blue-500`, textProps?.style]}>
              {children}
            </Text>
          </TouchableOpacity>
        ) : (
          children
        )}
      </View>
    );
  }
);

export default DropdownItem;
