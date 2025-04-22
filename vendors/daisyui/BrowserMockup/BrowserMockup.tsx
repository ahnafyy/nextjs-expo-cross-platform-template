import tw from 'twrnc';
import React, { forwardRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
export type BrowserMockupProps = {
  url: string;
  variant?: 'border' | 'background';
  inputClassName?: string;
  innerClassName?: string;
  children?: React.ReactNode;
};
const BrowserMockup = forwardRef<View, BrowserMockupProps>(
  ({ url, variant = 'border', children }, ref) => {
    return (
      <View
        ref={ref}
        style={[
          styles.container,
          variant === 'border' ? tw`border border-gray-300` : tw`bg-gray-300`,
        ]}
      >
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <TextInput
            style={[styles.input, variant === 'border' && tw`border-gray-300`]}
            value={url}
            editable={false}
          />
        </View>
        {/* Inner content */}
        <View
          style={[
            styles.inner,
            variant === 'border' ? tw`border-t border-gray-300` : tw`bg-gray-200`,
          ]}
        >
          {children}
        </View>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  container: tw`rounded-lg overflow-hidden`,
  toolbar: tw`p-2 bg-gray-100`,
  input: tw`px-2 py-1 bg-white rounded-md`,
  inner: tw`flex justify-center items-center px-4 py-16`,
});
export default BrowserMockup;
