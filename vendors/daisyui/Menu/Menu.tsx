import React from 'react'
import { View, ViewProps } from 'react-native'
import tw from 'twrnc'
import MenuTitle, { MenuTitleProps as TitleProps } from './MenuTitle'
import MenuItem, { MenuItemProps as ItemProps } from './MenuItem'
import MenuDropdown, { MenuDropdownProps as DropdownProps } from './MenuDropdown'
import MenuDetails, { MenuDetailsProps as DetailsProps } from './MenuDetails'

export type MenuTitleProps = TitleProps
export type MenuItemProps = ItemProps
export type MenuDropdownProps = DropdownProps
export type MenuDetailsProps = DetailsProps

export type MenuProps = ViewProps & {
  vertical?: boolean
  horizontal?: boolean
  responsive?: boolean
  size?: 'lg' | 'md' | 'sm' | 'xs'
}

const Menu = React.forwardRef<View, MenuProps>(({ style, responsive, horizontal, vertical, size, children, ...props }, ref) => {
  return (
    <View
      {...props}
      ref={ref}
      style={[
        tw`p-2 rounded bg-white`,
        vertical && tw`flex flex-col`,
        horizontal && tw`flex-row`,
        responsive && tw`lg:flex-row`,
        size === 'lg' && tw`p-4`,
        size === 'md' && tw`p-3`,
        size === 'sm' && tw`p-2`,
        size === 'xs' && tw`p-1`,
        style,
      ]}
    >
      {children}
    </View>
  )
})

Menu.displayName = 'Menu'

export default Object.assign(Menu, {
  Title: MenuTitle,
  Item: MenuItem,
  Dropdown: MenuDropdown,
  Details: MenuDetails,
})
