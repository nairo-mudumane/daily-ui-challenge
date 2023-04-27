import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IData } from "../../@types/data";
import { IContainerProps } from "./@types";

export function Container(props: IContainerProps) {
  return (
    <View
      className="bg-blue2 flex-1"
      style={{ paddingHorizontal: props.px ? props.px : "1.5rem" }}
    >
      <SafeAreaProvider>
        <SafeAreaView>{props.children}</SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
