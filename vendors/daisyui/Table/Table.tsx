import React, { forwardRef } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
export type TableProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  zebra?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
  children?: React.ReactNode;
  style?: any;
};
const Table = forwardRef<View, TableProps>(
  ({ children, size, zebra, pinRows, pinCols, style, ...props }, ref) => {
    const tableStyle = [
      tw`w-full border border-gray-300 rounded-lg`,
      size === 'lg' && tw`p-4`,
      size === 'md' && tw`p-3`,
      size === 'sm' && tw`p-2`,
      size === 'xs' && tw`p-1`,
      zebra && tw`bg-gray-50`,
      pinRows && tw`border-b-2 border-gray-400`,
      pinCols && tw`border-r-2 border-gray-400`,
      style,
    ];
    return (
      <View ref={ref} style={tableStyle} {...props}>
        {children}
      </View>
    );
  }
);
export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter,
});
