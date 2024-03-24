import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const SignInScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [email, setEmail] = useState("");
	const [university, setUniversity] = useState("");

	const handleSignIn = () => {
		// Perform sign-in logic here
		navigation.navigate("Home");
	};

	const handleContinueWithoutSignIn = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign In</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TextInput
				style={styles.input}
				placeholder="Confirm Password"
				secureTextEntry
				value={passwordConfirmation}
				onChangeText={setPasswordConfirmation}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="University"
				value={university}
				onChangeText={setUniversity}
			/>
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
