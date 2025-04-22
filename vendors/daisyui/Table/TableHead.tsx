import React, { ReactNode } from 'react'
import { View, Text, ViewProps } from 'react-native'
import tw from 'twrnc'

export type TableHeadProps = ViewProps & {
  children?: ReactNode[]
  noCell?: boolean
}

const TableHead = React.forwardRef<View, TableHeadProps>(({ children, noCell = false, style, ...props }, ref) => {
  const renderChildren = noCell
    ? children
    : children?.map((child, i) => (
        <View key={i} style={tw`p-2 border-b border-gray-400 bg-gray-200`}>
          <Text style={tw`font-bold`}>{child}</Text>
        </View>
      ))

  return (
    <View {...props} ref={ref} style={[tw`border-b border-gray-400 bg-gray-100 p-2`, style]}>
      {renderChildren}
    </View>
  )
})

TableHead.displayName = 'TableHead'

export default TableHead
