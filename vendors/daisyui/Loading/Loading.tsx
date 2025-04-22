import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types';

export type LoadingProps = IComponentBaseProps & {
  size?: ComponentSize;
  color?: ComponentColor;
  variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
};

const Loading: React.FC<LoadingProps> = ({ size = 'md', color = 'primary', variant = 'spinner' }) => {
  const sizeMap: Record<ComponentSize, number> = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
  };

  const colorMap: Record<"neutral" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error", string> = {
    neutral: tw.color('text-gray-500')!, // Add missing "neutral"
    primary: tw.color('text-blue-600')!,
    secondary: tw.color('text-purple-600')!,
    accent: tw.color('text-pink-600')!,
    info: tw.color('text-sky-600')!,
    success: tw.color('text-green-600')!,
    warning: tw.color('text-yellow-600')!,
    error: tw.color('text-red-600')!,
    ghost: tw.color('text-gray-400')!,
  };
  

  const selectedSize = sizeMap[size] || 24;
  const selectedColor = colorMap[color] || tw.color('text-blue-600');

  return (
    <View style={tw`flex items-center justify-center`}>
      {variant === 'spinner' ? (
        <ActivityIndicator size={selectedSize} color={selectedColor} />
      ) : (
        <View style={tw`w-${selectedSize} h-${selectedSize} bg-${color}-600 rounded-full`} />
      )}
    </View>
  );
};

export default Loading;
