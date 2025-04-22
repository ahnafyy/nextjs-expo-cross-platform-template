import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import tw from 'twrnc';

export type CheckboxProps = {
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = forwardRef<View, CheckboxProps>(
  ({ color, size = 'md', indeterminate, checked = false, onChange }, ref) => {
    const checkboxRef = useRef<View>(null);
    
    useImperativeHandle(ref, () => checkboxRef.current as View);

    useEffect(() => {
      // Handle indeterminate state (React Native does not support this natively)
      if (indeterminate) {
        console.warn('Indeterminate state is not fully supported in React Native.');
      }
    }, [indeterminate]);

    const handlePress = () => {
      onChange && onChange(!checked);
    };

    return (
      <Pressable
        ref={checkboxRef}
        onPress={handlePress}
        style={[
          styles.checkbox,
          tw`border-2 rounded`,
          tw`${
            size === 'lg' ? 'w-6 h-6' :
            size === 'md' ? 'w-5 h-5' :
            size === 'sm' ? 'w-4 h-4' : 'w-3 h-3'
          }`,
          tw`${
            checked ? 
            color === 'primary' ? 'bg-blue-500 border-blue-500' :
            color === 'secondary' ? 'bg-gray-500 border-gray-500' :
            color === 'accent' ? 'bg-purple-500 border-purple-500' :
            color === 'info' ? 'bg-cyan-500 border-cyan-500' :
            color === 'success' ? 'bg-green-500 border-green-500' :
            color === 'warning' ? 'bg-yellow-500 border-yellow-500' :
            color === 'error' ? 'bg-red-500 border-red-500' : 'bg-gray-500 border-gray-500'
            : 'bg-transparent border-gray-500'
          }`,
        ]}
      >
        {checked && <View style={tw`w-full h-full bg-black opacity-30`} />}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
