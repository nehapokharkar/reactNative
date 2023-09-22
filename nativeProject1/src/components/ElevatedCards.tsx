import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap & Move</Text>
        </View>
        <View style={[styles.card, styles.cardElevated1]}>
          <Text>Tap & Move</Text>
        </View>
        <View style={[styles.card, styles.cardElevated2]}>
          <Text>Tap & Move</Text>
        </View>
        <View style={[styles.card, styles.cardElevated3]}>
          <Text>Tap & Move</Text>
        </View>
        <View style={[styles.card, styles.cardElevated4]}>
          <Text>Tap & Move</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 2,
  },
  cardElevated2: {
    backgroundColor: 'yellow',
  },
  cardElevated4: {
    backgroundColor: 'red',
  },
  cardElevated3: {
    backgroundColor: 'green',
  },
  cardElevated1: {
    backgroundColor: 'violet',
  },
  cardElevated: {
    backgroundColor: 'pink',
  },
});

export default ElevatedCards;
