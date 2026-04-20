import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../../constans/Color";
import PrimaryButton from "../components/PrimaryButton";

export default function ScreenEnd(props) {
  const { width, height } = useWindowDimensions();
  let imgWidth = width > 450 ? 100 : 300;
  let imgHeight = width > 450 ? 100 : 300;

  const marginTopDistant = width > 450 ? 10 : 150;

  const imageStyles = {
    width: imgWidth,
    height: imgHeight,
    borderRadius: "100%",
  };
  return (
    <View style={[styles.container, { marginTop: marginTopDistant }]}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Opponent's Guess</Text>
      </View>
      <View style={[styles.imageContainer, imageStyles]}>
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: 150,
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
    ///Here, the image size is determined based on the screen width.
    // width: deviceWidth < 420 ? 200 : 300,
    // height: deviceWidth < 420 ? 200 : 300,
    // borderRadius: "100%",
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
