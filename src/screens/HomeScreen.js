import { View, Text, Pressable } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="bg-red-100 flex-1 items-center justify-center border-spacing-2 border-x-2 px-2 mx-2 my-2 rounded-full">
      <Text className="font-bold text-red-500">Ali</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>SIGN OUT</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
