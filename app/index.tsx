import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-pink-400 "
    >
      {/* <Text className="text-xs text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-sm text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-base text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-lg text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-xl text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-2xl text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-3xl text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-4xl text-white">Hopefully this was helpful to you!</Text> */}
      <Text className="text-5xl text-white">Hopefully this was helpful to you!</Text>
      <Text className="text-6xl text-black">Hopefully this was helpful to you!</Text>
    </View>
  );
}
