import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTitle({ color, title, onPress }) {
  return (
    <View style={styles.gridItem}>
      {/* ///BURADAKI STYLE AKLINDA OLSUN */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContaine, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    //!IOS'te shadow gozukmesi icin background color beyaz olarak ayarlanmali.
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible", ///bu android_ripple efectinin disari tasmasini engeller.
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContaine: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryGridTitle;
