// firebaseHelpers.js

// toastHelpers.js
import Toast from "react-native-toast-message";

export const showSuccessToast = (message) => {
  Toast.show({
    type: "success",
    text1: "Success",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export const showErrorToast = (message) => {
  Toast.show({
    type: "error",
    text1: "Error",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export const showWarningToast = (message) => {
  Toast.show({
    type: "info",
    text1: "Warning",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export const showInfoToast = (message) => {
  Toast.show({
    type: "info",
    text1: "Info",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export const handleFirebaseAuthError = (error) => {
  switch (error) {
    case "auth/invalid-email":
      return "The email address is not valid. Please enter a valid email.";
    case "auth/email-already-in-use":
      return "This email is already in use. Please use a different email.";
    case "auth/weak-password":
      return "The password is too weak. Please choose a stronger password.";
    case "auth/user-not-found":
      return "No user found with this email. Please register first.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/operation-not-allowed":
      return "Operation not allowed. Please contact support.";
    case "auth/internal-error":
      return "An internal error occurred. Please try again later.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again later.";
    case "auth/timeout":
      return "The operation has timed out. Please try again.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};
