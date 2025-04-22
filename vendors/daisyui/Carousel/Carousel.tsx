import React, {
  cloneElement,
  forwardRef,
  ReactElement,
  useRef,
  useState,
} from 'react';
import { View, ScrollView, StyleSheet, ViewProps } from 'react-native';
import tw from 'twrnc';
import CarouselItem, { CarouselItemProps, CarouselItemWidth } from './CarouselItem';
import Button from '../Button/Button';

export type CarouselProps = ViewProps & {
  children: ReactElement<CarouselItemProps>[];
  display?: 'slider' | 'numbered' | 'sequential';
  snap?: 'start' | 'center' | 'end';
  vertical?: boolean;
  width?: CarouselItemWidth;
  buttonStyle?: (value: string) => React.ReactElement;
};

const Carousel = forwardRef<View, CarouselProps>(
  ({ children, display = 'slider', vertical = false, width, buttonStyle, style, ...props }, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: vertical ? 0 : index * 300, // ✅ Corrected scrolling logic
          y: vertical ? index * 300 : 0,
          animated: true,
        });
        setActiveIndex(index);
      }
    };

    return (
      <View style={[styles.container, style]} {...props} ref={ref}>
        <ScrollView
          ref={scrollViewRef} // ✅ Assigned ref to the ScrollView
          horizontal={!vertical} // ✅ Correctly toggles scrolling direction
          style={[tw`w-full`, vertical ? tw`h-full` : tw`flex-row`]} // ✅ Updated styles
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
        >
          {children.map((child, i) =>
            cloneElement(child, {
              key: i,
              index: i + 1,
              children: child.props.children,
              src: child.props.src,
              alt: child.props.alt,
              width: display !== 'slider' ? 'full' : width,
              hasButtons: display === 'sequential',
              buttonStyle,
              onPrev: () => scrollToIndex(i - 1 < 0 ? children.length - 1 : i - 1),
              onNext: () => scrollToIndex(i + 1 > children.length - 1 ? 0 : i + 1),
              ...child.props,
            })
          )}
        </ScrollView>

        {display === 'numbered' && (
          <View style={tw`flex-row justify-center w-full py-2 gap-2`}>
          {children.map((_, i) =>
            buttonStyle ? (
              cloneElement(buttonStyle((i + 1).toString()), {
                key: i,
                onPress: () => scrollToIndex(i),
              })
            ) : (
              <Button key={i} active={i === activeIndex} onPress={() => scrollToIndex(i)}>
                {i + 1}
              </Button>
            )
          )}
        </View>
        
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Object.assign(Carousel, { Item: CarouselItem });
