import { View, Text, StyleSheet, Platform } from "react-native";
// import PokemonCards from '@/components/mycomponents/pokemonCards'
// import Fruits from "@/components/mycomponents/Fruits";
// import SettingsTry from "@/components/mycomponents/SettingsTry";
import NumberMemorizationGame from "@/components/mycomponents/NumberMemorizationGame";

export default function Pokemon() {
  return (
    <View style={styles.container}>
      {/* <PokemonCards /> */}
      {/* <Fruits /> */}
      {/* <SettingsTry /> */}
      <NumberMemorizationGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
