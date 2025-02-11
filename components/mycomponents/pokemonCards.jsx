import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonCards() {
  const charmandarData = {
    name: "Charmander",
    image: require("../../assets/images/pokemon/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../assets/images/pokemon/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../../assets/images/pokemon/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Thunder Shock", "Quick Attack", "Tail Whip", "Thunderbolt"],
    weaknesses: ["Ground"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("../../assets/images/pokemon/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Withdraw", "Bubble"],
    weaknesses: ["Electric", "Grass"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmandarData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...squirtleData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
