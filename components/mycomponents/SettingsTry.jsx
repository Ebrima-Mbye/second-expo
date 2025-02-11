import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

export default function SettingsTry() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => setShowSettings(!showSettings)}>
        <MaterialIcons style={styles.settingsIcon} name="settings" />
      </TouchableHighlight>

      <View style={styles.settingsModal}>
        <Modal></Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  settingsIcon: {
    fontSize: 54,
    color: "white",
    position: "absolute",
    right: 10,
    top: 10,
  },
  settingsModal: {
    backgroundColor: "black",
    width: 200,
    height: "100%",
  },
});
