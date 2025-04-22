import React, { forwardRef, ReactNode } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import tw from 'twrnc';

type ButtonProps = {
  children: ReactNode;
  shape?: 'circle' | 'square' | 'rounded';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  glass?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  wide?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  animation?: boolean;
  ref?: React.Ref<View>;
  onPress?: () => void;
};

const Button = forwardRef<View, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      color,
      glass,
      startIcon,
      endIcon,
      wide,
      fullWidth,
      loading,
      active,
      disabled,
      style,
      textStyle,
      animation = true,
      onPress,
      ...props
    },
    ref
  ) => {
    const baseStyles = tw`px-4 py-2 rounded items-center flex-row justify-center`;

    const sizeStyles = size === 'lg' ? tw`py-3 px-6 text-lg` :
                      size === 'md' ? tw`py-2 px-4 text-base` :
                      size === 'sm' ? tw`py-1 px-3 text-sm` : tw`py-1 px-2 text-xs`;

    const shapeStyles = shape === 'circle' ? tw`rounded-full` :
                        shape === 'square' ? tw`rounded-none` : tw`rounded`;

    const colorStyles = color === 'primary' ? tw`bg-blue-500 text-white` :
                        color === 'secondary' ? tw`bg-gray-500 text-white` :
                        color === 'success' ? tw`bg-green-500 text-white` :
                        color === 'warning' ? tw`bg-yellow-500 text-black` :
                        color === 'error' ? tw`bg-red-500 text-white` : tw`bg-gray-300 text-black`;

    const disabledStyles = disabled ? tw`opacity-50` : tw``;

    const finalStyles: StyleProp<ViewStyle> = [
      baseStyles,
      sizeStyles,
      shapeStyles,
      colorStyles,
      disabledStyles,
      style,
    ];

    const finalTextStyles: StyleProp<TextStyle> = [
      tw`text-center text-white`,
      textStyle,
    ];

    return (
      <TouchableOpacity
        ref={ref}
        style={finalStyles}
        disabled={disabled || loading}
        activeOpacity={animation ? 0.7 : 1}
        onPress={onPress}
        {...props}
      >
        {loading && <ActivityIndicator size={size === 'lg' ? 'large' : 'small'} color="white" />}
        {startIcon && !loading && <View style={tw`mr-2`}>{startIcon}</View>}
        {!loading && <Text style={finalTextStyles}>{children}</Text>}
        {endIcon && !loading && <View style={tw`ml-2`}>{endIcon}</View>}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

export default Button;
