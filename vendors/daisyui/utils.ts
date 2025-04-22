import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const isReactFragment = (node: React.ReactNode | typeof React.Fragment) => {
  if (!node) return false
  if ((node as React.ReactElement)?.type) {
    return (node as React.ReactElement)?.type === React.Fragment
  }
  return node === React.Fragment
}

export const wrapWithElementIfInvalid = ({
  node,
  wrapper,
  props = {},
}: {
  node: React.ReactNode
  wrapper: React.ReactElement
  props?: any
}) => {
  if (!node) {
    return React.cloneElement(wrapper, props)
  } else if (!React.isValidElement(node)) {
    return React.cloneElement(wrapper, props, React.createElement(Text, {}, String(node)))
  } else if (isReactFragment(node)) {
    return React.cloneElement(
      wrapper,
      { ...props, style: [tw`${node.props?.style || ''}`, props?.style] },
      node.props.children
    )
  } else {
    return React.cloneElement(node, {
      ...props,
      style: [tw`${node.props?.style || ''}`, props?.style],
    })
  }
}

export const isSingleStringChild = (children?: React.ReactNode) => {
  return (
    children &&
    React.Children.count(children) === 1 &&
    typeof children === 'string'
  )
}
