import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Boxes from "@/components/mycomponents/Boxes";

export default function Page() {
  return (
    <View style={styles.container}>
      <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
