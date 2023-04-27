import { Image, View } from "react-native";
import logoSrc from "../../assets/logo.png";

export function Logo() {
  return (
    <View className="m-1">
      <Image source={logoSrc} className="w-[100px] h-[106px]" />
    </View>
  );
}
