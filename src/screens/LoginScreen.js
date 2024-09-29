import { View, Text, Alert, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SIZES } from "../constants";
import { TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import {
  handleFirebaseAuthError,
  showErrorToast,
  showSuccessToast,
} from "../helpers";

export default function LoginScreen({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const validateInputs = () => {
    const { email, password } = data;

    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
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
        const user = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        showSuccessToast("User Login successfull");
        navigation.navigate("Home");
      } catch (error) {
        showErrorToast(error.code);
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
        <Text className="py-1 font-medium">Email</Text>
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
          <Text className="text-white font-semibold text-base">LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View className=" items-center justify-center flex-1 mb-3 ">
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text className="tracking-tight font-normal text-base text-blue-800">
            Don't have account? Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
