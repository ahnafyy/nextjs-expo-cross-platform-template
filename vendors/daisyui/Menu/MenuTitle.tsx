import React from 'react'
import { Text, View, ViewProps } from 'react-native'
import tw from 'twrnc'

export type MenuTitleProps = ViewProps & {
  text?: string
}

const MenuTitle = React.forwardRef<View, MenuTitleProps>(({ style, text, children, ...props }, ref) => {
  return (
    <View {...props} ref={ref} style={[tw`py-2 px-4 bg-gray-200`, style]}>
      {text ? <Text style={tw`font-bold text-lg`}>{text}</Text> : children}
    </View>
  )
})

MenuTitle.displayName = 'MenuTitle'

export default MenuTitle
