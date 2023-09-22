import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (webSitelink: string) => {
    Linking.openURL(webSitelink);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.headerText}>
          What's new in Javascript 21 - ES12 ?
        </Text>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1400/1*2rPk1eQgTMfkjmLo29hk-g.png',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.descText} numberOfLines={3}>
            The JavaScript language specification, also known as ECMAScript or
            ES, is a living document, modified every year in response to
            evolving needs. While JavaScript started as a scripting language,
            the ECMAScript specification overview notes that the language “is
            now used for the full spectrum of programming tasks in many
            different environments and scales." Because of this, JavaScript is
            better understood as a fully featured general-purpose programming
            language.
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.infoworld.com/article/3658393/8-great-new-javascript-language-features-in-es12.html',
              )
            }>
            <Text style={styles.readMore}>Read More...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    marginHorizontal: 10,
    flex: 1,
    gap: 5,
    borderRadius: 5,
    backgroundColor: '#E8E3E8',
  },
  elevatedCard: {},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  image: {
    height: 150,
  },
  descText: {
    padding: 5,
  },
  footer: {
    padding: 5,
  },
  readMore: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default ActionCard;
