import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'

type IConnectType = 'both' | 'start' | 'end'

type TimelineItemProps = {
  connect?: IConnectType
  startStyle?: string
  endStyle?: string
  children?: React.ReactNode
}

const TimelineItem = React.forwardRef<View, TimelineItemProps>(
  ({ children, connect, startStyle = '', endStyle = '' }, ref) => {
    return (
      <View ref={ref}>
        {connect === 'both' || connect === 'start' ? (
          <View style={tw`${startStyle}`} />
        ) : null}
        {children}
        {connect === 'both' || connect === 'end' ? (
          <View style={tw`${endStyle}`} />
        ) : null}
      </View>
    )
  }
)

TimelineItem.displayName = 'TimelineItem'
export default TimelineItem
