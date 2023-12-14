import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const SkeletonLoader = () => {
  const opacity = useSharedValue(0.9);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
  }, []);

  return (
    <View style={styles.gridItem}>
      <Animated.View style={[styles.image, { opacity }]} />

      <Animated.View style={{ height: 20, width: '50%', backgroundColor: 'gainsboro', margin: 8, opacity, }} />
    </View>
  );
};

export default SkeletonLoader;

const styles = StyleSheet.create({
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
});
