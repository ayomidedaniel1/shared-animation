import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text } from 'react-native';

import cities from '../data/cities';

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.gridItem}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.cityName}>{item.name}</Text>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={cities}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.name + index}
      numColumns={2}
      initialNumToRender={8}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 4,
  },
  gridItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cityName: {
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#eee',
  },
});

export default HomeScreen;
