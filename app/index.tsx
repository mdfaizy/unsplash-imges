import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "../firebase";
import { ValidationFromData } from "../constants/Vaidation";
export default function Index() {
  const router = useRouter();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleClickButton = () => {
    const message = ValidationFromData(email, password);
    setErrorMessage(message);

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Validation message:", message);

    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .then(() => {
          router.push("/home");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.code + ": " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in: ", user);
          router.push("/home");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.code + ": " + error.message);
        });
    }
  };
  const toggleToSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.backgroundImage}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>{isSignInForm ? "Sign In" : "Sign Up"}</Text>

        {!isSignInForm && (
          <TextInput
            placeholder="Enter Full Name"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
          />
        )}
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleClickButton}>
          <Text style={styles.buttonText}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleToSignUpForm}>
          <Text style={styles.toggleText}>
            {isSignInForm
              ? "New to Search Images? Sign Up Now"
              : "Already registered? Sign In Now."}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    position: "absolute",
    top: "30%",
    left: "10%",
    right: "10%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#e50914",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  toggleText: {
    color: "#fff",
    marginTop: 15,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});
