import { useGlobalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import cities from '../data/cities';

const CityDetails = () => {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const city = cities.find(city => city.name === id);

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Image style={styles.fullWidthImage} source={{ uri: city.imageUrl }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.cityDetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem exercitationem possimus id corrupti beatae similique culpa laborum numquam, voluptatem omnis, fugit, magni ratione deserunt asperiores vitae repudiandae voluptatibus qui sit. Alias accusantium sint atque voluptatibus eos corporis, dolorem fugiat rem voluptate? Reiciendis assumenda dolores esse. Aut eligendi cumque voluptatem labore nisi voluptatibus consequuntur nemo natus harum accusantium quae perferendis dolorum totam ratione optio assumenda vero, ex iusto doloribus quibusdam qui minus commodi. Nihil sed molestiae expedita, voluptate totam impedit autem in maiores itaque similique reiciendis. Obcaecati accusantium modi sit similique placeat magnam nam? Molestias, animi soluta sint pariatur voluptates illo.</Text>

        <Text style={styles.cityDetails}>{city.details}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
    borderRadius: 8,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  fullWidthImage: {
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
