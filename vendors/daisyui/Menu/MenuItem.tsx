import React from 'react'
import { Pressable, Text, View, ViewProps } from 'react-native'
import tw from 'twrnc'

export type MenuItemProps = ViewProps & {
  disabled?: boolean
  text?: string
  onPress?: () => void
}

const MenuItem = React.forwardRef<View, MenuItemProps>(({ style, disabled, text, onPress, children, ...props }, ref) => {
  return (
    <Pressable
      {...props}
      ref={ref}
      onPress={disabled ? undefined : onPress}
      style={[
        tw`px-4 py-2 rounded`,
        disabled ? tw`bg-gray-300` : tw`bg-white`,
        style,
      ]}
    >
      {text ? <Text style={tw`text-lg ${disabled ? 'text-gray-500' : 'text-black'}`}>{text}</Text> : children}
    </Pressable>
  )
})

MenuItem.displayName = 'MenuItem'

export default MenuItem
