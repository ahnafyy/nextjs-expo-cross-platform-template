import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import Label from './Label';

export type FormProps = {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: () => void;
};

const Form = React.forwardRef<View, FormProps>(
  ({ children, className = '', onSubmit, ...props }, ref) => {
    return (
      <View ref={ref} style={tw`${className} flex flex-col`} {...props}>
        {children}
      </View>
    );
  }
);

export default Object.assign(Form, { Label });
