import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { addRecentlyViewed } from "./utils/recentlyViewed";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) {
      addRecentlyViewed(id as string);
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});