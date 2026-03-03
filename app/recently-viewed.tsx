import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchRecentlyViewed } from "./services/api";

export default function RecentlyViewedScreen() {
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    console.log("RecentlyViewedScreen Loaded");

    const loadData = async () => {
      const data = await fetchRecentlyViewed("user123");

      console.log("Server Data:", data);

      if (data && data.recentlyViewed) {
        setRecent(data.recentlyViewed);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Recently Viewed (Server Data)
      </Text>

      <FlatList
        data={recent}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Product ID: {item?.productId}</Text>
            <Text>
              Viewed At:{" "}
              {item?.viewedAt
                ? new Date(item.viewedAt).toLocaleString()
                : ""}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
});