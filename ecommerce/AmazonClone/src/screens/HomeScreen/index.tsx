/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <ProductItem />
      <ProductItem />

    </View>
  );
};

export default HomeScreen;
