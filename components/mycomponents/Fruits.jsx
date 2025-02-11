import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from "react-native";

export default function Fruits() {
  const fruitsData = [
    {
      name: "Apple",
      price: 50,
      color: "red",
      quantity: 20,
    },
    {
      name: "Banana",
      price: 50,
      color: "yellow",
      quantity: 25,
    },
    {
      name: "Mango",
      price: 35,
      color: "yellowishgreen",
      quantity: 30,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fruitsData}
        ItemSeparatorComponent={() => (
          <View style={{ height: 20, width: 300 }}></View>
        )}
        renderItem={({ item }) => (
          <View style={styles.fruitContainer}>
            <View style={styles.fruitNameContainer}>
              <Text style={styles.fruitNameText}>{item.name}</Text>
            </View>
            <View style={styles.fruitPriceContainer}>
              <Text style={styles.fruitPriceText}>{item.price}</Text>
            </View>
            <View style={styles.fruitColorContainer}>
              <Text style={styles.fruitColorText}>{item.color}</Text>
            </View>
            <View style={styles.fruitQuantityContainer}>
              <Text style={styles.fruitQuantityText}>{item.quantity}</Text>
            </View>
          </View>
        )}
        keyExtractor={(fruit) => fruit.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  fruitContainer: {
    height: 300,
    backgroundColor: "white",
    borderWidth: 1, 
    borderColor: "black"
  },
  fruitNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fruitNameText: {
    fontSize: 20,
    width: "100%",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
    textAlign: "center",
  },
  fruitPriceContainer: {},
  fruitPriceText: {},
  fruitColorContainer: {},
  fruitColorText: {},
  fruitQuantityContainer: {},
  fruitQuantityText: {
    color: "green",
  },
});
