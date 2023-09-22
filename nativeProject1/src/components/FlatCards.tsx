import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.title}>Flat Cards</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 8,
    padding: 10,
  },
  box: {
    height: 100,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'blue',
  },
});

export default FlatCards;
