import React from 'react'
import { View } from 'react-native'

export const getThemeFromClosestAncestor = (ref: React.RefObject<View>) => {
  if (!ref.current) return

  // React Native không hỗ trợ `data-theme`, nên cần truyền theme qua Context hoặc Props.
  if ('measure' in ref.current) {
    ref.current.measure((x, y, width, height, pageX, pageY) => {
      console.log('Element position:', { x, y, width, height, pageX, pageY })
    })
  }

  // Cần sử dụng Context API hoặc Theme Provider để lấy theme từ tổ tiên gần nhất.
}
