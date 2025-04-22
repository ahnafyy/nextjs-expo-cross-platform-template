import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
import Button from '../Button/Button';

export type DropdownToggleProps = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  button?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
};

const DropdownToggle = ({
  children,
  color,
  size = 'md',
  button = true,
  disabled,
  className,
  onPress,
}: DropdownToggleProps) => {
  return button ? (
    <Button color={color} size={size} disabled={disabled} onPress={onPress}>
      {children}
    </Button>
  ) : (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={tw`${className || ''}`}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

// Summary Component (using Button)
export type SummaryProps = DropdownToggleProps;

export const Summary = forwardRef<View, SummaryProps>((props, ref) => {
  return <TouchableOpacity ref={ref} {...props} />;
});

export default DropdownToggle;
