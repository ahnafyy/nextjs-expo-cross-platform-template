import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import tw from 'twrnc';

export type FileInputProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
  bordered?: boolean;
  onFileSelect?: (file: DocumentPicker.DocumentPickerResult) => void;
};

const FileInput: React.FC<FileInputProps> = ({ size, color, bordered, onFileSelect }) => {
  const inputRef = useRef<TextInput | null>(null);

  const handleFilePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result.canceled) return;
    onFileSelect?.(result);
  };

  return (
    <TouchableOpacity onPress={handleFilePick} style={[styles.input, tw`p-2`, 
      size === 'lg' && tw`h-14`,
      size === 'md' && tw`h-12`,
      size === 'sm' && tw`h-10`,
      size === 'xs' && tw`h-8`,
      color === 'primary' && tw`bg-blue-500`,
      color === 'secondary' && tw`bg-gray-500`,
      color === 'accent' && tw`bg-purple-500`,
      color === 'info' && tw`bg-blue-300`,
      color === 'success' && tw`bg-green-500`,
      color === 'warning' && tw`bg-yellow-500`,
      color === 'error' && tw`bg-red-500`,
      bordered && tw`border border-gray-300`
    ]}>
      <Text style={tw`text-white text-center`}>Select File</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FileInput;
