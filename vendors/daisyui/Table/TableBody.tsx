import React from 'react'
import { View, ViewProps } from 'react-native'
import tw from 'twrnc'

export type TableBodyProps = ViewProps

const TableBody = React.forwardRef<View, TableBodyProps>(({ children, style, ...props }, ref) => {
  return (
    <View {...props} ref={ref} style={[tw`flex flex-col`, style]}>
      {children}
    </View>
  )
})

TableBody.displayName = 'TableBody'

export default TableBody
