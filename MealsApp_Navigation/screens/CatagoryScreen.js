import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

///Eger component Stack.Screen olarak kaydedilmisse o komponentte navigation ve route propsu saglanir. buna edisim mumkun.
function CategoryScreen({ navigation }) {
  ///Flatlist fonksiyona degeri otomatik gonderir bu veride itemData'dir.
  function renderCategoryItems(itemData) {
    function pressHandler() {
      ///navigate gidecegi ekran ismini alip eger birde bilgi gonderecekse bunu obje seklinde ikinci parametre olarak gecebiliriz.
      navigation.navigate("MealOverview", {
        catagoryID: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderCategoryItems} ///FlatList ile fonksiyon kullanimi // CATEGORIES otomatik fonksiyona gonderiyor itemData olarak.
      numColumns={2} ///colon sayisini belirtir.
    />
  );
}

export default CategoryScreen;
