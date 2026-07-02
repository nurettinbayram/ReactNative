import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import MealDetails from "./MealDetails";

export default function MealItem({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  mealId,
}) {
  ///Bu component navigation sayfasi olarak belirlenmedigi icin route ve navigation propslarini almaz bu yuzden
  ///navigation'i import edip erisimi saglamamiz gerekiyor.
  const navigation = useNavigation();

  ///Ilgili yemek tiklanma sirasinda yonelecegi sayfaya mealId gonderir. ordanda route.params yardimi ile cikarilir
  function headleMealDetails() {
    navigation.navigate("MealDetails", {
      mealId: mealId,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={headleMealDetails}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.onPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    minWidth: "90%",
    borderRadius: 8,
    margin: 20,
    backgroundColor: "white",
    // overflow: "hidden", ///overflow hiddden kullanildiginda shadow'u kapatir bu yuzden Platform API'i kullanarak IOS olmasi durumunda overflow ozelligini visible yapiyoruz
    //!IOS'te shadow gozukmesi icin background color beyaz olarak ayarlanmali.
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible", ///bu android_ripple efectinin disari tasmasini engeller.
    elevation: 4, ///Android Shadow
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },

  onPressed: {
    opacity: 0.7,
  },
});
