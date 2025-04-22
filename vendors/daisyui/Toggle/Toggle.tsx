import React, { forwardRef } from 'react';
import { View, Switch } from 'react-native';
import tw from 'twrnc';
type ToggleProps = {
  color?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  value?: boolean;
  onValueChange?: (value: boolean) => void;
};
const Toggle = forwardRef<View, ToggleProps>(({ color, size, value, onValueChange }, ref) => {
  const sizeStyle = {
    lg: { width: 48, height: 24 },
    md: { width: 40, height: 20 },
    sm: { width: 32, height: 16 },
    xs: { width: 24, height: 12 },
  }[size || 'md'];
  const trackColor = {
    primary: '#3b82f6',
    secondary: '#6b7280',
    accent: '#8b5cf6',
    info: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  }[color || 'secondary'];
  return (
    <View ref={ref} style={{ flexDirection: 'row', alignItems: 'center' }}> 
      <Switch 
        trackColor={{ false: '#d1d5db', true: trackColor }}
        thumbColor="#ffffff"
        value={value}
        onValueChange={onValueChange}
        style={sizeStyle}
      />
    </View>
  );
});
Toggle.displayName = 'Toggle';
export default Toggle;
