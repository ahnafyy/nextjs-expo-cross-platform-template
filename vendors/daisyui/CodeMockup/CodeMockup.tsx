import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { CodeMockupLine, CodeMockupLineProps } from './CodeMockupLine';

export type CodeMockupProps = {
  children?: React.ReactNode;
};

const CodeMockup = forwardRef<View, CodeMockupProps>(({ children }, ref) => {
  return (
    <View ref={ref} style={tw`bg-gray-900 p-3 rounded-lg`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<CodeMockupLineProps>(child)) {
          return React.cloneElement(child, { key: index });
        }
        return child;
      })}
    </View>
  );
});

CodeMockup.displayName = 'CodeMockup';

const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine });

export { CodeMockupNamespace as CodeMockup };
