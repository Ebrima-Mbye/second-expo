import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

const SEQUENCE_SHOW_DELAY = 500;

const boxes = Array.from({ length: 9 }, (_, i) => ({
  value: i + 1,
  color: "#d3d3d3", // Neutral gray for all boxes
}));

export default function NumberMemorizationGame() {
  const [numberSequence, setNumberSequence] = useState([]);
  const [highlightedBox, setHighlightedBox] = useState(null);
  const [userInput, setUserInput] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [showError, setShowError] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [userPressedBox, setUserPressedBox] = useState(null);

  function startGame() {
    setShowStartModal(false);
    setShowError(false);
    setGameStarted(true);
    setNumberSequence([]);
    setUserInput([]);
    generateNextSequence([]);
  }

  function generateNextSequence(prevSequence) {
    const randomNumber = Math.floor(Math.random() * boxes.length) + 1;
    const newSequence = [...prevSequence, randomNumber];

    setNumberSequence(newSequence);
    setUserInput([]);
    playSequence(newSequence);
  }

  function playSequence(sequence) {
    setIsShowingSequence(true);

    sequence.forEach((num, index) => {
      setTimeout(() => {
        setHighlightedBox(num);
        setTimeout(() => {
          setHighlightedBox(null);
          if (index === sequence.length - 1) {
            setIsShowingSequence(false);
          }
        }, SEQUENCE_SHOW_DELAY);
      }, index * SEQUENCE_SHOW_DELAY * 2);
    });
  }

  function handleUserPress(value, isPressed) {
    if (isShowingSequence || !gameStarted) return;

    if (isPressed) {
      setUserPressedBox(value);
    } else {
      setUserPressedBox(null);
      const newUserInput = [...userInput, value];

      if (newUserInput[userInput.length] !== numberSequence[userInput.length]) {
        setShowError(true);
        return;
      }

      setUserInput(newUserInput);

      if (newUserInput.length === numberSequence.length) {
        setTimeout(() => generateNextSequence(numberSequence), 1000);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Start Game Modal */}
      <Modal visible={showStartModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Start Game?</Text>
            <Button title="Yes" onPress={startGame} />
          </View>
        </View>
      </Modal>

      {/* Wrong Answer Modal */}
      <Modal visible={showError} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Wrong choice! Try again?</Text>
            <Button title="Restart" onPress={startGame} />
            <Button
              title="Exit"
              onPress={() => {
                setShowError(false);
                setShowStartModal(true);
              }}
            />
          </View>
        </View>
      </Modal>

      {/* Score Display */}
      <Text style={styles.scoreText}>Score: {numberSequence.length}</Text>

      {/* Boxes */}
      <FlatList
        data={boxes}
        renderItem={({ item }) => (
          <Box
            onPressIn={() => handleUserPress(item.value, true)}
            onPressOut={() => handleUserPress(item.value, false)}
            value={item.value}
            color={
              highlightedBox === item.value || userPressedBox === item.value
                ? "red"
                : item.color
            }
          />
        )}
        keyExtractor={(item) => item.value.toString()}
        numColumns={3}
        contentContainerStyle={styles.boxesContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  scoreText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  boxText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

function Box({ value, color, onPressIn, onPressOut }) {
  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.box, { backgroundColor: color }]}
    >
      <Text style={styles.boxText}>{value}</Text>
    </TouchableOpacity>
  );
}
