import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import cities from '../data/cities';
import SkeletonLoader from '../components/SkeletonLoader';

const cityItem = ({ item }) => (
  <Link href={`/${item.name}`} asChild>
    <Pressable style={styles.gridItem}>
      <Animated.Image
        sharedTransitionTag={`image-${item.name}`}
        style={styles.image}
        source={{ uri: item.image }}
      />

      <Animated.Text
        sharedTransitionTag={`title-${item.name}`}
        style={styles.cityName}
      >
        {item.name}
      </Animated.Text>
    </Pressable>
  </Link>
);

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1800);
  // }, []);

  if (loading) {
    return <FlatList
      data={Array(10)}
      renderItem={() => <SkeletonLoader />}
      numColumns={2}
      contentContainerStyle={styles.gridContainer}
    />;
  }

  return (
    <FlatList
      data={cities}
      renderItem={cityItem}
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
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    backgroundColor: 'gainsboro',
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    // textAlign: 'center',
    backgroundColor: '#eee',
  },
});

export default HomeScreen;
