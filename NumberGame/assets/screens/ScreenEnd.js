import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constans/Color";
import PrimaryButton from "../components/PrimaryButton";

export default function ScreenEnd(props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Opponent's Guess</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../img/success.png")} />
      </View>
      <Text style={styles.txt}>
        Your phone needed <Text style={styles.highligt}>{props.round}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highligt}>{props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={props.newGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  title: {
    borderColor: "tomato",
    borderWidth: 4,
    borderRadius: 10,
    padding: 40,
  },
  titleTxt: {
    fontSize: 35,
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: "100%",
    // Blirtilen sinirlarin disina cikmayi engeller
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary500,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  txt: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
    marginVertical: 10,
  },
  highligt: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
