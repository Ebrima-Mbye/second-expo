import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const profilePicture = require("../../assets/images/avatar.jpeg");

// 🔹 Array of categories with corresponding MaterialIcons
const categories = [
  {
    id: "1",
    title: "Business",
    description: "Title Company processors and marketers",
    icon: "business",
  },
  {
    id: "2",
    title: "Dating",
    description: "Fun women in their 30’s in NYC",
    icon: "favorite",
  },
  {
    id: "3",
    title: "Friendship",
    description: "Ambitious and motivated people to hang with in NYC",
    icon: "group",
  },
  {
    id: "4",
    title: "Interests",
    description: "Bike riding, boxing, and chess in NYC",
    icon: "sports",
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* 🔹 Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Account</Text>
        <MaterialIcons
          name={"settings"}
          size={24}
          color="white"
          style={{position: "absolute", right: "20", bottom: "6"}}
        />
      </View>

      {/* 🔹 Profile Section */}
      <View style={styles.pictureSection}>
        <Image source={profilePicture} style={styles.image} />
        <Text style={styles.personName}>Tyler Smith</Text>
        <Text style={styles.points}>173 Points</Text>
        <Text style={styles.personRequest}>
          I want to be introduced to the following types of people:
        </Text>
      </View>

      {/* 🔹 List of Categories */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <MaterialIcons
              name={item.icon}
              size={24}
              color="white"
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listDescription}>{item.description}</Text>
            </View>
            <MaterialIcons name="edit" size={20} color="green" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    height: 70,
    backgroundColor: "rgb(0, 0, 255)",
    elevation: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 8,
  },
  topBarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pictureSection: {
    marginTop: 50,
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  personName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "rgb(0, 0, 255)",
  },
  points: {
    fontSize: 16,
    color: "green",
  },
  personRequest: {
    textAlign: "center",
    color: "gray",
    marginHorizontal: 40,
    marginTop: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "rgb(250, 250, 250)",
  },
  icon: {
    backgroundColor: "rgb(0, 0, 255)",
    padding: 8,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  listDescription: {
    fontSize: 13,
    color: "gray",
  },
});
