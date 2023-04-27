import { Text } from "react-native";
import { ITitle } from "./@types";

export default function Title({ text, ...props }: ITitle) {
  return (
    <Text {...props} className="text-white font-light text-4xl uppercase">
      {text}
    </Text>
  );
}
