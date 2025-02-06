import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import stockMarketImg from "../../assets/images/stock-market.jpg"; // ✅ Import at the top
import startupImg from "../../assets/images/start-up.jpg"; // ✅ Import at the top
import valentineImg from "../../assets/images/valentine.jpeg"; // ✅ Import at the top
import datingImg from "../../assets/images/dating.jpeg"; // ✅ Import at the top

const categories = {
  Business: [
    {
      title: "Stock Market Hits New High",
      description:
        "Investors celebrate as the stock market reaches record levels...",
      image: stockMarketImg, // ✅ Use imported image
      rating: 5,
    },
    {
      title: "Startup Raises $10M in Funding",
      description: "A promising tech startup secures major investment...",
      image: startupImg,
      rating: 4,
    },
  ],
  Dating: [
    {
      title: "Love in the Digital Age",
      description: "How dating apps are shaping modern relationships...",
      image: datingImg,
      rating: 4,
    },
    {
      title: "Valentine’s Day Trends",
      description: "Top romantic ideas for this year's Valentine’s Day...",
      image: valentineImg,
      rating: 3,
    },
  ],
};

export default function NewsPage() {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(categories).map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {categories[category].map((news, newsIndex) => (
            <View key={newsIndex} style={styles.card}>
              {/* ✅ Handles both local & remote images */}
              <Image
                source={
                  typeof news.image === "string"
                    ? { uri: news.image }
                    : news.image
                }
                style={styles.image}
              />
              <View style={styles.content}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.rating}>{"⭐".repeat(news.rating)}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    marginTop: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "rgb(225, 225, 225)",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 6,
  },
  rating: {
    fontSize: 16,
    color: "#ff9800",
  },
});
