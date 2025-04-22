import React, { ReactNode, useState, forwardRef } from 'react';
import { View, TouchableOpacity, ViewProps } from 'react-native';
import tw from 'twrnc';
import DropdownDetails from './DropdownDetails';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownToggle from './DropdownToggle';

export type DropdownProps = ViewProps & {
  item?: ReactNode;
  horizontal?: 'left' | 'right';
  vertical?: 'top' | 'bottom';
  end?: boolean;
  hover?: boolean;
  open?: boolean;
};

const Dropdown = forwardRef<View, DropdownProps>(
  ({ children, item, horizontal, vertical, end, hover, open, style, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(open);

    return (
      <View
        ref={ref}
        {...props}
        style={[
          tw`relative`, // Ensures positioning for dropdown content
          horizontal === 'left' && tw`items-start`,
          horizontal === 'right' && tw`items-end`,
          vertical === 'top' && tw`justify-start`,
          vertical === 'bottom' && tw`justify-end`,
          end && tw`self-end`,
          isOpen && tw`bg-gray-100`,
          style,
        ]}
      >
        {item ? (
          <>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              {children}
            </TouchableOpacity>
            {isOpen && <View style={tw`absolute top-full mt-2 bg-white shadow-lg rounded-lg p-2`}>{item}</View>}
          </>
        ) : (
          <>{children}</>
        )}
      </View>
    );
  }
);

export default Object.assign(Dropdown, {
  Details: DropdownDetails,
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
