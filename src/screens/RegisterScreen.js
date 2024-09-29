import { View, Text, Alert, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SIZES } from "../constants";
import { TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

export default function RegisterScreen({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const validateInputs = () => {
    const { email, password, name } = data;

    // Basic validation
    if (!email || !password || !name) {
      Alert.alert("Error", "Please fill all fields.");
      return false;
    }

    // Simple email format validation (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (validateInputs()) {
      // Handle login logic here
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        navigation.navigate("Login");
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
      // You can navigate to another screen or perform further actions
    }
  };
  return (
    <View className="bg-amber-300 flex-1">
      {/* Login Title */}
      <View className="py-12 items-center ">
        <Text
          className=" font-bold tracking-widest uppercase"
          style={{
            fontSize: SIZES.height * 0.04,
          }}
        >
          Firebase Authentication
        </Text>
      </View>
      <View className="mx-2 p-3">
        <Text className="py-1 font-medium">Name</Text>
        <TextInput
          placeholder="Enter Name"
          value={data.name}
          onChangeText={(value) => handleInputChange("name", value)}
          autoCapitalize="none"
          className="border border-black-300 rounded-md p-2"
        />
        <Text className="pt-3 font-medium">Email</Text>
        <TextInput
          placeholder="Enter Email"
          value={data.email}
          onChangeText={(value) => handleInputChange("email", value)}
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-black-300 rounded-md p-2"
        />
        <Text className="pt-3 pb-1 font-medium">Password</Text>
        <TextInput
          placeholder="Enter Password"
          className="border border-black-300 rounded-md p-2"
          onChangeText={(value) => handleInputChange("password", value)}
          secureTextEntry={true}
          value={data.password}
        />
        <TouchableOpacity
          className="bg-black py-3 mt-4 rounded-md items-center"
          onPress={handleLogin}
        >
          <Text className="text-white font-semibold text-base">SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View className=" items-center justify-center flex-1 mb-3 ">
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text className="tracking-tight font-normal text-base text-blue-800">
            Already have account? Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
