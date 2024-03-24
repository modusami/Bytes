import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { Image } from "react-native";

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/signup", {
        email,
        password,
      });
      if (response.status === 200) {
        navigation.navigate("Home");
      } else if (response.status !== 200) {
        setErr("User doesn't exists...");
      }
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message);
      } else {
        setErr("Error:" + error.message);
      }
    }
  };

  const handleContinueWithoutSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.img} />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.err}>{err}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContinueWithoutSignIn}>
        <Text style={styles.linkText}>Continue without signing in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  err: {
    color: "red",
  },
  img: {
    width: 215,
    height: 215,
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "blue",
    marginTop: 16,
  },
});

export default SignInScreen;
