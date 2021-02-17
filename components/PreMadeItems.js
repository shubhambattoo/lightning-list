import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(39.5);
const sliderItemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const sliderItemWidth = slideWidth + sliderItemHorizontalMargin;

const PreMadeItems = ({ addItem }) => {
  const DATA = [
    { text: 'Milk' },
    { text: 'Eggs' },
    { text: 'Bread' },
    { text: 'Bananas' },
    { text: 'Butter' },
    { text: 'Cheese' },
    { text: 'Coffee' },
    { text: 'Tea' },
    { text: 'Tomatoes' },
  ];

  const _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => addItem(item.text)}>
      <View style={styles.slideItem}>
        <View style={styles.slideInner}>
          <View style={{ paddingEnd: 5 }}>
            <Icon name="shopping-bag" size={18} color="#c2c2c2" />
          </View>
          <Text style={{ color: '#555', fontWeight: 'bold' }}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        contentContainerCustomStyle={{ height: 45 }}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={115}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    marginBottom: 20,
  },
  slideItem: {
    width: sliderItemWidth,
    height: 45,
    paddingHorizontal: sliderItemHorizontalMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideInner: {
    borderWidth: 1,
    borderColor: '#c2c1c0',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: 105,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default PreMadeItems;
