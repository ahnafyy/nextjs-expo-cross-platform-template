import React, { ReactNode } from 'react'
import { View, Text, Pressable, ViewProps } from 'react-native'
import tw from 'twrnc'

export type MenuDetailsProps = ViewProps & {
  label: ReactNode
  open?: boolean
}

const MenuDetails = React.forwardRef<View, MenuDetailsProps>(({ style, label, open, children, ...props }, ref) => {
  return (
    <View {...props} ref={ref} style={[tw`p-2`, style]}>
      <Pressable style={tw`px-4 py-2 bg-gray-200 rounded`}>
        <Text style={tw`text-lg`}>{label}</Text>
      </Pressable>
      {open && <View style={tw`mt-2 bg-white rounded shadow p-2`}>{children}</View>}
    </View>
  )
})

MenuDetails.displayName = 'MenuDetails'

export default MenuDetails
