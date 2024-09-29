import React from "react";
import AppNavigation from "./src/routes/AppNavigation";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}
