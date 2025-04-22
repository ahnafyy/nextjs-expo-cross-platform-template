import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, View, GestureResponderEvent, StyleSheet } from 'react-native';
export type BreadcrumbsItemProps = {
  href?: string;
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};
const BreadcrumbsItem = forwardRef<View, BreadcrumbsItemProps>(({ children, onPress }, ref) => {
  return (
    <View ref={ref}>
      {onPress ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Text style={styles.link}>{children}</Text>
        </TouchableOpacity>
      ) : (
        <Text>{children}</Text>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default BreadcrumbsItem;
