import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IData } from "../../@types/data";

export function Container(props: IData) {
  return (
    <View className="bg-blue2 flex-1 px-6">
      <SafeAreaProvider>
        <SafeAreaView>
          <View>{props.children}</View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
