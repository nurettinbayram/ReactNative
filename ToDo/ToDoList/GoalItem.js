import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.deleteItem.bind(this, props.id)}
      android_ripple={styles.itemEffect}
      style={({ pressed }) => pressed && styles.itemEffect}
    >
      <View style={styles.listItemBox}>
        <Text style={styles.listItem}>✅ {props.text}</Text>
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
