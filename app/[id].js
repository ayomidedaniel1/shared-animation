import { Feather } from '@expo/vector-icons';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import cities from '../data/cities';

const CityDetails = () => {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const city = cities.find(city => city.name === id);

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={{ paddingTop: StatusBar.currentHeight }}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      <Animated.Image
        sharedTransitionTag={`image-${city.name}`}
        style={styles.image}
        source={{ uri: city.image }}
      />

      <View style={styles.detailsContainer}>
        <Animated.Text
          sharedTransitionTag={`title-${city.name}`}
          style={styles.cityName}
        >
          {city.name}
        </Animated.Text>
        <Text style={styles.cityDetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem exercitationem possimus id corrupti beatae similique culpa laborum numquam, voluptatem omnis, fugit, magni ratione deserunt asperiores vitae repudiandae voluptatibus qui sit. Alias accusantium sint atque voluptatibus eos corporis, dolorem fugiat rem voluptate? Reiciendis assumenda dolores esse. Aut eligendi cumque voluptatem labore nisi voluptatibus consequuntur nemo natus harum accusantium quae perferendis dolorum totam ratione optio assumenda vero, ex iusto doloribus quibusdam qui minus commodi. Nihil sed molestiae expedita, voluptate totam impedit autem in maiores itaque similique reiciendis. Obcaecati accusantium modi sit similique placeat magnam nam? Molestias, animi soluta sint pariatur voluptates illo.</Text>

        <Text style={styles.cityDetails}>{city.details}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 16 + StatusBar.currentHeight,
    left: 16,
    zIndex: 2,
    borderRadius: 8,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cityDetails: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default CityDetails;
