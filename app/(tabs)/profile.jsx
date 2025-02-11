import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const imagePlaceholder = require("../../assets/images/profile-placeholder.jpeg");
const CAMERA_OPTION = "Photo-camera";
const GALLERY_OPTION = "photo-library";
const DELETE_OPTION = "delete";

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
  const [showChooseImageModal, setShowChooseImageModal] = useState(false);
  const [image, setImage] = useState(null); // Initialize to null

  const uploadOptions = [
    { label: "Camera", name: CAMERA_OPTION },
    { label: "Gallery", name: GALLERY_OPTION },
    { label: "Remove", name: DELETE_OPTION },
  ];

  const uploadImage = async (option) => {
    setShowChooseImageModal(false); // Close modal immediately

    if (option === CAMERA_OPTION) {
      try {
        await ImagePicker.requestCameraPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          setImage(result.assets[0].uri);
        } else {
          console.warn("No assets found in the result or cancelled");
        }
      } catch (error) {
        alert("Error uploading image: " + error.message);
      }
    } else if (option === GALLERY_OPTION) {
      try {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          setImage(result.assets[0].uri);
        } else {
          console.warn("No assets found in the result or cancelled");
        }
      } catch (error) {
        alert("Error selecting image from gallery: " + error.message);
      }
    } else if (option === DELETE_OPTION) {
      setImage(null); // Clear the image
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={showChooseImageModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setShowChooseImageModal(false)}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Profile Photo</Text>
              <FlatList
                data={uploadOptions}
                keyExtractor={(item) => item.name}
                numColumns={3}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => uploadImage(item.name)}
                  >
                    <MaterialIcons
                      style={styles.optionImage}
                      name={item.name}
                      size={30}
                      color="blue"
                    />
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <StatusBar hidden />
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Account</Text>
        <MaterialIcons
          name="settings"
          size={24}
          color="white"
          style={styles.settingsIcon}
        />
      </View>

      <View style={styles.pictureSection}>
        <View style={styles.imageContainer}>
          <Image
            source={image ? { uri: image } : imagePlaceholder}
            style={styles.image}
          />

          <TouchableOpacity
            style={styles.imageUploadButton}
            onPress={() => setShowChooseImageModal(true)}
          >
            <MaterialCommunityIcons
              name="camera-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.personName}>Tyler Smith</Text>
        <Text style={styles.points}>173 Points</Text>
        <Text style={styles.personRequest}>
          I want to be introduced to the following types of people:
        </Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <MaterialIcons name={item.icon} size={24} color="blue" />
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
  settingsIcon: {
    position: "absolute",
    right: 20,
    bottom: 6,
  },
  modalContainer: {
    flex: 1,
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 15,
    borderRadius: 10,
    alignItems: "center",
    height: 185,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  option: {
    backgroundColor: "rgba(245, 245, 245, 0.9)",
    marginHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    gap: 8,
    justifyContent: "space-between",
  },
  optionImage: {
    padding: 5,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  optionText: {
    fontSize: 14,
    color: "black",
  },
  pictureSection: {
    marginTop: 50,
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  imageUploadButton: {
    position: "absolute",
    right: -10,
    bottom: -10,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 8,
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
    gap: 10,
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
