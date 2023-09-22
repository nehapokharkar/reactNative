import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg',
          }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardLabel}>Allepey, Kerala</Text>
          <Text>
            Alappuzha (or Alleppey) is a city on the Laccadive Sea in the
            southern Indian state of Kerala. It's best known for houseboat
            cruises along the rustic Kerala backwaters, a network of tranquil
            canals and lagoons. Alappuzha Beach is the site of the 19th-century
            Alappuzha Lighthouse.
          </Text>
        </View>
      </View>
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
  card: {
    marginHorizontal: 10,
    backgroundColor: '#E8E3E8',
    borderRadius: 4,
  },
  cardElevated: {},
  image: {
    height: 180,
    borderRadius: 4,
  },
  cardBody: {
    padding: 4,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
});

export default FancyCard;
