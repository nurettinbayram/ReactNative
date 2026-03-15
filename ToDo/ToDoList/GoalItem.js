import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

function GoalItem(props) {
  console.log("==========================");

  function showAlert() {
    Alert.alert("Empty Input", "Please ebter a goal!!!", [
      {
        text: "Change Status",
        onPress: () => props.completeTask(props.id),
      },
      {
        text: "Delete",
        onPress: () => props.deleteItem(props.id),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  }

  return (
    <Pressable
      onPress={showAlert}
      android_ripple={styles.itemEffect}
      style={({ pressed }) => pressed && styles.itemEffect}
    >
      <View style={styles.listItemBox}>
        <Text style={styles.listItem}>
          {props.complete ? " ✅  " : " 🟩  "} {props.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItemBox: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItem: {
    color: "white",
    fontSize: 18,
  },
  itemEffect: {
    opacity: 0.5,
  },
});

export default GoalItem;
