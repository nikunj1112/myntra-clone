import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "recentlyViewed";

export const addRecentlyViewed = async (productId: string) => {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    let list = existing ? JSON.parse(existing) : [];

    list = list.filter((item: any) => item.productId !== productId);

    list.unshift({
      productId,
      viewedAt: new Date().toISOString(),
    });

    if (list.length > 20) {
      list = list.slice(0, 20);
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    console.log("Error saving recently viewed:", error);
  }
};

export const getRecentlyViewed = async () => {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  return existing ? JSON.parse(existing) : [];
};