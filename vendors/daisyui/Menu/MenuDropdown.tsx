import React, { ReactNode } from 'react'
import { View, Text, Pressable, ViewProps } from 'react-native'
import tw from 'twrnc'

export type MenuDropdownProps = ViewProps & {
  label: ReactNode
  open?: boolean
}

const MenuDropdown = React.forwardRef<View, MenuDropdownProps>(({ style, label, open, children, ...props }, ref) => {
  return (
    <View {...props} ref={ref} style={[tw`relative`, style]}>
      <Pressable style={tw`px-4 py-2 bg-gray-200 rounded`}>
        <Text style={tw`text-lg`}>{label}</Text>
      </Pressable>
      {open && <View style={tw`absolute top-full left-0 bg-white rounded shadow p-2`}>{children}</View>}
    </View>
  )
})

MenuDropdown.displayName = 'MenuDropdown'

export default MenuDropdown
