import React, { ReactNode } from 'react'
import { View, Text, ViewProps } from 'react-native'
import tw from 'twrnc'

export type TableFooterProps = ViewProps & {
  children?: ReactNode[]
  noCell?: boolean
}

const TableFooter = React.forwardRef<View, TableFooterProps>(({ children, noCell = false, style, ...props }, ref) => {
  const renderChildren = noCell
    ? children
    : children?.map((child, i) => (
        <View key={i} style={tw`p-2 border-t border-gray-300`}>
          <Text>{child}</Text>
        </View>
      ))

  return (
    <View {...props} ref={ref} style={[tw`border-t border-gray-400 p-2`, style]}>
      {renderChildren}
    </View>
  )
})

TableFooter.displayName = 'TableFooter'

export default TableFooter
