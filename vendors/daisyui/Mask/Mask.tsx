import React from 'react'
import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native'
import tw from 'twrnc'

export type MaskProps = ImageProps & {
  variant?:
    | 'squircle'
    | 'heart'
    | 'hexagon'
    | 'hexagon-2'
    | 'decagon'
    | 'pentagon'
    | 'diamond'
    | 'square'
    | 'circle'
    | 'parallelogram'
    | 'parallelogram-2'
    | 'parallelogram-3'
    | 'parallelogram-4'
    | 'star'
    | 'star-2'
    | 'triangle'
    | 'triangle-2'
    | 'triangle-3'
    | 'triangle-4'
    | 'half-1'
    | 'half-2'
}

const classesFn = ({ variant }: Pick<MaskProps, 'variant'> = {}): StyleProp<ImageStyle> =>
  tw.style(
    variant === 'squircle' && 'rounded-lg',
    variant === 'heart' && 'rounded-full',
    variant === 'hexagon' && 'border border-black',
    variant === 'hexagon-2' && 'border-2 border-black',
    variant === 'decagon' && 'border-4 border-black',
    variant === 'pentagon' && 'border-8 border-black',
    variant === 'diamond' && 'rotate-45',
    variant === 'square' && 'rounded-none',
    variant === 'circle' && 'rounded-full',
    variant === 'parallelogram' && 'skew-x-12',
    variant === 'parallelogram-2' && 'skew-x-[-12]',
    variant === 'parallelogram-3' && 'skew-y-12',
    variant === 'parallelogram-4' && 'skew-y-[-12]',
    variant === 'star' && 'shadow-lg',
    variant === 'star-2' && 'shadow-xl',
    variant === 'triangle' && 'border-t-transparent border-l-transparent',
    variant === 'triangle-2' && 'border-b-transparent border-r-transparent',
    variant === 'triangle-3' && 'border-t-transparent border-r-transparent',
    variant === 'triangle-4' && 'border-b-transparent border-l-transparent',
    variant === 'half-1' && 'rounded-t-lg',
    variant === 'half-2' && 'rounded-b-lg'
  )

const Mask = React.forwardRef<Image, MaskProps>(({ source, variant, style, ...props }, ref) => {
  return <Image {...props} ref={ref} source={source} style={[classesFn({ variant }), style]} />
})

Mask.displayName = 'Mask'

export default Mask
