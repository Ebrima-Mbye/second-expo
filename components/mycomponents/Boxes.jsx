import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native";

const COLORS = [
  "#FFFACD",
  "#DDA0DD",
  "#FFDAB9",
  "#98FB98",
  "#ADD8E6",
  "#FFA07A",
  "#FA8072",
  "#E6E6FA",
  "#F0E68C",
];

const Box = ({ color, index }) => (
  <Pressable
    onPress={() => Alert.alert("Box " + index)}
    style={[styles.box, { backgroundColor: color }]}
  >
    <Text style={styles.text}>Box {index + 1}</Text>
  </Pressable>
);

const BoxGrid = () => {
  return (
    <FlatList
      data={COLORS}
      renderItem={({ item, index }) => <Box color={item} index={index} />}
      keyExtractor={(_item, index) => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
  );
};

const Boxes = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BoxGrid />
      <Button title="go to profile" onPress={() => router.push("/profile")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  grid: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  box: {
    width: 100,
    height: 100,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 5, // Adds shadow effect on Android
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default Boxes;
