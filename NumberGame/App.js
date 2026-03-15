import { StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";

//npx expo install expo-font indirilmeli.
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import ScreenStart from "./assets/screens/ScreenStart";
import ScreenPlay from "./assets/screens/ScreenPlay";
import ScreenEnd from "./assets/screens/ScreenEnd";
import Colors from "./constans/Color";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  //Font burada tanimlanmali
  // npx expo install expo-app-loading bu paket expo-fonttan sonra neden indirildi ogren
  // fontsLoaded ifadesi bool oldugundan ve fontlarin yuklenmesini bekler yuklenmedigi surece false doner
  // fontFamily: "open-sans-bold", seklinde style verilebilir
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  //font yuklenene kadar bu ekran calistirilir
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameIsOverHendler() {
    setIsGameOver(true);
  }

  function roundsHandler(round) {
    setRounds(round);
  }

  function pickUserNumberHandler(num) {
    setUserNumber(num);
    setIsGameOver(false);
  }

  function newGameHendler() {
    setUserNumber(null);
    setRounds(0);
  }

  // DEGISKEN TANIMLANARAK EKRAN GECISLERI BU SEKILDE YAPILIBILIR.
  let screen = <ScreenStart pickUserNumber={pickUserNumberHandler} />;

  if (userNumber) {
    screen = (
      <ScreenPlay
        userNumber={userNumber}
        gameIsOver={gameIsOverHendler}
        roundsHandler={roundsHandler}
      />
    );
  }

  if (userNumber && isGameOver) {
    screen = (
      <ScreenEnd
        round={rounds}
        userNumber={userNumber}
        newGame={newGameHendler}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Colors.primary600, Colors.tertiary500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/img/background.png")}
          resizeMode="cover"
          style={styles.image}
          // burada imageStyle ozelligine dikkat et opasity buna verilerek daha dogru bir goruntu elde edilir
          imageStyle={styles.imageStyling}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  imageStyling: {
    opacity: 0.6,
  },
});
