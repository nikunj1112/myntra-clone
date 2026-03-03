const BASE_URL = "http://192.168.29.174:2004";

export const fetchRecentlyViewed = async (userId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/recently-viewed/${userId}`
    );

    if (!response.ok) throw new Error("Failed to fetch");

    return await response.json();
  } catch (error) {
    console.log("GET API Error:", error);
    return null;
  }
};