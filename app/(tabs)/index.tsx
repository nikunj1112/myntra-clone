import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { router } from "expo-router";
import { products } from "../data/products";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Button
        title="GO TO RECENTLY VIEWED"
        onPress={() => router.push("/recently-viewed")}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/product?id=${item.id}`)}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
