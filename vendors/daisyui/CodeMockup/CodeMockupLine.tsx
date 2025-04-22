import React, { forwardRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'twrnc';

export type CodeMockupLineProps = {
  dataPrefix?: string | boolean;
  status?: 'info' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
};


export const CodeMockupLine = forwardRef<View, CodeMockupLineProps>(
  ({ dataPrefix = '>', status, children }, ref) => {
    return (
      <View
        ref={ref}
        style={[
          tw`flex-row w-full px-2 py-1`,
          status === 'info' && tw`bg-blue-500 text-white`,
          status === 'success' && tw`bg-green-500 text-white`,
          status === 'warning' && tw`bg-yellow-500 text-black`,
          status === 'error' && tw`bg-red-500 text-white`,
        ]}
      >
        {dataPrefix !== false && (
          <Text style={tw`text-gray-400 mr-2`}>
            {typeof dataPrefix === 'string' ? dataPrefix : '>'}
          </Text>
        )}
        <Text style={tw`text-white flex-1`}>{children}</Text>
      </View>
    );
  }
);

CodeMockupLine.displayName = 'CodeMockupLine';

export default CodeMockupLine;
