import { Text, View } from "react-native";
import { Container, Logo } from "../../components";
import Title from "./title";

export function SignUp() {
  return (
    <Container>
      <View className="justify-between">
        <View className="w-max max-w-[220px] mx-auto py-20">
          <Logo />

          <View className="mt-8">
            <Title text="Protect" />
            <Title text="Your Data" />
            <Title text="With us." />

            <View className="flex-row gap-1 mt-2">
              <Text className="text-white">230,100.04</Text>
              <Text className="text-zinc-200">People trust us!</Text>
            </View>
          </View>
        </View>

        <View className="bg-white py-10">
          <Text>form</Text>
        </View>
      </View>
    </Container>
  );
}
