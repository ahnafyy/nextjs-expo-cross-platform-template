import React, { forwardRef, useState } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import { Summary } from './DropdownToggle';

export type DetailsProps = ViewProps & {
  open?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  end?: boolean;
};

const Details = forwardRef<View, DetailsProps>(
  ({ children, open = false, horizontal, vertical, end, style, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(open);

    return (
      <View
        ref={ref}
        {...props}
        style={[
          tw`border border-gray-300 rounded-lg p-2`, // Default styles
          horizontal && tw`flex-row`,
          vertical && tw`flex-col`,
          end && tw`items-end`,
          isOpen && tw`bg-gray-100`, // Change style when open
          style,
        ]}
      >
        {children}
      </View>
    );
  }
);

Details.displayName = 'Details';

export default Object.assign(Details, {
  Toggle: Summary,
});
