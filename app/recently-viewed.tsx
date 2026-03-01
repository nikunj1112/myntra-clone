import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getRecentlyViewed } from "./utils/recentlyViewed";

export default function RecentlyViewedScreen() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getRecentlyViewed();
      setData(result);
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Product ID: {item.productId}</Text>
            <Text>{item.viewedAt}</Text>
          </View>
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
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
});