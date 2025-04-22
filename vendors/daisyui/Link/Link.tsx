import React, { forwardRef } from 'react';
import { Text, Pressable, Linking, StyleProp, TextStyle } from 'react-native';
import tw from 'twrnc';

import { IComponentBaseProps, ComponentColor } from '../types';

export type LinkProps = IComponentBaseProps & {
  color?: 'neutral' | ComponentColor | 'ghost'; // Added 'ghost' to match the error message
  hover?: boolean;
  href?: string;
  children: React.ReactNode;
};

const Link = forwardRef<Text, LinkProps>(({ children, href, color = 'primary', hover = true, ...props }, ref) => {
  const colorStyles: Record<string, StyleProp<TextStyle>> = {
    neutral: tw`text-gray-600`,
    primary: tw`text-blue-600`,
    secondary: tw`text-purple-600`,
    accent: tw`text-pink-600`,
    ghost: tw`text-gray-400`, // ✅ Added ghost to avoid error
    info: tw`text-sky-600`,
    success: tw`text-green-600`,
    warning: tw`text-yellow-600`,
    error: tw`text-red-600`,
  };

  const handlePress = () => {
    if (href) {
      Linking.openURL(href).catch((err) => console.error('Failed to open link:', err));
    }
  };

  return (
    <Pressable onPress={handlePress} {...props}>
      {({ pressed }) => (
        <Text
          ref={ref}
          style={[
            colorStyles[color] || colorStyles.primary, // ✅ Avoids undefined error
            hover && pressed && tw`underline`,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
});

export default Link;
