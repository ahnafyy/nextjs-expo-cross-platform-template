import tw from 'twrnc';
import React, { ReactElement, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BreadcrumbsItem, { BreadcrumbsItemProps } from './BreadcrumbsItem';
export type BreadcrumbsProps = {
  children?: ReactElement<BreadcrumbsItemProps> | ReactElement<BreadcrumbsItemProps>[];
};
const Breadcrumbs = forwardRef<View, BreadcrumbsProps>(({ children }, ref) => {
  return (
    <View ref={ref} accessibilityRole="header" style={styles.container}>
      <View style={styles.list}>{children}</View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: tw`px-4 py-2`,
  list: tw`flex-row items-center space-x-2`,
});
export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
