import { useFonts } from "expo-font";
import { customFonts } from "../contstants/fonts";

/// customFonts objesini useFonts yardimi ile komponent icinden donderdik.
/// bunu yapmamizin sebebi her yerde tekrardan kacinip kullanabilmetir.
export function useAppFonts() {
  return useFonts(customFonts);
}
