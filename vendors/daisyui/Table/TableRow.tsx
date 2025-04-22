import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
export type TableRowProps = {
  children?: React.ReactNode[];
  active?: boolean;
  hover?: boolean;
  noCell?: boolean; // Không bao bọc children trong View/Text, cho phép truyền vào thẻ tùy chỉnh
  style?: any;
};
const TableRow = forwardRef<View, TableRowProps>(
  ({ children, active, hover, noCell = false, style, ...props }, ref) => {
    const rowStyle = [
      tw`flex-row p-2`,
      active && tw`bg-blue-200`,
      hover && tw`bg-gray-100`,
      style,
    ];
    const renderChildren = noCell
      ? children
      : children?.map((child, i) =>
          i < 1 ? (
            <Text key={i} style={tw`font-bold flex-1 p-2`}>
              {child}
            </Text>
          ) : (
            <Text key={i} style={tw`flex-1 p-2`}>
              {child}
            </Text>
          )
        );
    return (
      <View ref={ref} style={rowStyle} {...props}>
        {renderChildren}
      </View>
    );
  }
);
export default TableRow;
