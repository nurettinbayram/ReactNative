import { StyleSheet, Text, View } from "react-native";

export default function DataSet({ items }) {
  return (
    <View style={styles.container}>
      <View style={[styles.txtBox, styles.emailBox]}>
        <Text style={styles.txt}>{items.email}</Text>
      </View>
      <View style={[styles.txtBox, styles.nameLastname]}>
        <Text style={styles.txt}>{items.name}</Text>
      </View>
      <View
        style={[styles.txtLastname, styles.txtLastname, styles.nameLastname]}
      >
        <Text style={styles.txt}>{items.lastname}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
  },
  txtBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingRight: 10,
    borderRightWidth: 2,
  },
  emailBox: {
    width: "55%",
  },
  nameLastname: {
    width: "22%",
  },
  txtLastname: {
    borderRightWidth: 0,
  },
  txt: {
    fontSize: 16,
  },
});
