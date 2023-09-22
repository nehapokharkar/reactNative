/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const ProductItem = () => {
  return (
    <View style={styles.main}>
      <View style={styles.imgcontainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={3}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star-half-full"
            size={18}
            color={'#e47911'}
          />
          <Text>13,400</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>from $13.97</Text>
          <Text style={styles.oldprice}>$12.88</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
