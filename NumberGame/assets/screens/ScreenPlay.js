import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import PreviuseNumber from "../components/PreveuseNumber";

//BURADAKI ICONLARI INSTALL ETMEMIZ GEREKMIYOR CUNKU BUNLAR MEVCUT ZATEN BUNLARI EXPO-ICON SITESINDEN BULUYORUZ
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Colors from "../../constans/Color";

//BU IKI DEGISKENI DISARI ALDIK CUNKU HER STATE DEGISIKLIGINDE BYNLARU=IN TEKRARDAN BASTAN SET
// EDILMESI GEREKMIYOR BUNLAR BELIRTILEN DEGERDE KALMALI CUNKU HER STATE DEGISIKLIGINDE COMPONENT RENDER EDILIR BU DEGERLER
// DEGISMEMIS OLUR EGER ICERDE TANIMLANIRSA
let minBoundary = 0;
let maxBoundary = 100;

export default function ScreenPlay(props) {
  const initialGuess = getRandomNumber(0, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numberList, setnumberList] = useState([]);

  // USEEFFECT SONDA BELIRTILEN LISTEDEKI DEGISKENLERE DEGISIMINE GORE BU BOLUM CALISTIRILIR EGER HERHANGI BIR
  // DEGISIKLIK YOKSA BU BOLUM GECILIR.
  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.gameIsOver();
      props.roundsHandler(numberList.length);

      //SADECE ALTERNATIF OLARAK BU VERILERIN BURADA SIFIRLANACAGINI BELIRTMEK ICINDIR
      // minBoundary = 0;
      // maxBoundary = 100;
    }
  }, [currentGuess, props.userNumber, props.gameIsOver]);

  // let minBoundary = 0;let maxBoundary = 100; degerleri oyun oynadiktan sonra degiskenler componentin
  // disinda kaldiklari icin ve yeni degerler oyun sirasinda atandigi icin yeni bir oyun oynandiginda
  // hata verir bu verileri sifirlamamiz gerekir bunun icin useEffect kullaniyoruz.
  // useEffect bos liste parantezler ile tanimlandiginda bu sadece components
  // ilk calistirildiginda calisir bir dahada calismaz bu sekilde degerlerini sifirlariz
  // bunun alternatif cozumu game over oldugunda yani diger useEffect bolumunde if blogu calistiginda
  // bu verileri sifirlayabiliriz.
  useEffect(() => {
    minBoundary = 0;
    maxBoundary = 100;
  }, []);

  function getRandomNumber(min, max, exculde) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exculde) {
      return getRandomNumber(minBoundary, maxBoundary, exculde);
    } else {
      return rndNum;
    }
  }

  function addNumberToList(num) {
    setnumberList((currentList) => [
      ...currentList,
      { num: num, id: numberList.length.toString() },
    ]);
  }

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Warning: Wrong button!", "Don't lie!!!", [
        {
          title: "OK",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = getRandomNumber(minBoundary, maxBoundary, currentGuess);
    addNumberToList(currentGuess);
    setCurrentGuess(newRndNum);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Opponent's Guess</Text>
      </View>
      <View style={styles.number}>
        <Text style={styles.numberTxt}>{currentGuess}</Text>
      </View>
      <View style={styles.formBox}>
        <View>
          <Text style={styles.formTxt}>Higher or lower</Text>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.buttonContainer}>
            {/* BURADA BIR KES DAHA bind() METODU KULLANILMIS VE COMPONENT UZERINDEN CAGRILMASINA DIKKAT ET */}
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign
                name="minus-circle"
                size={24}
                color={Colors.primary500}
              />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Feather name="plus-circle" size={24} color={Colors.primary500} />
            </PrimaryButton>
          </View>
        </View>
      </View>

      {/* burada flatListi cevrelememiz daha duzgun scrollable olmasi icin */}
      <View style={styles.listOfNumber}>
        <FlatList
          data={numberList}
          renderItem={(itemData) => <PreviuseNumber itemData={itemData} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 130,
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
  number: {
    marginTop: 20,
    paddingHorizontal: 80,
    paddingVertical: 40,
    borderColor: "tomato",
    borderWidth: 4,
    borderRadius: 10,
    // bu yontem ile sadece arka plan soluklasir
    backgroundColor: "rgba(0,0,0,0.6)",
    opacity: 0.7,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  numberTxt: {
    fontSize: 40,
    color: "tomato",
    fontFamily: "open-sans-bold",
  },

  formBox: {
    backgroundColor: "tomato",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    width: "88%",
    marginVertical: 20,
  },
  formTxt: {
    fontSize: 22,
    fontFamily: "open-sans",
  },
  buttonBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#000",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  buttonContainer: {
    flex: 1,
  },
  listOfNumber: {
    width: "88%",
    flex: 1,
  },
  flatList: {},
});
