import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const ProfileScreen = () => {
	const handleProfilePicturePress = () => {
		console.log("Profile picture placeholder pressed");
	};

	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		university: "",
	});

	const handleInputChange = (name, value) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleEditProfile = () => {
		console.log("Edit Profile button pressed");
		// Add logic for editing profile, such as navigation or opening a modal
	};

	const handleChangePassword = () => {
		console.log("Change Password button pressed");
		// Add logic for changing password, such as navigation or opening a modal
	};

	const handleDarkMode = () => {
		console.log("Dark Mode button pressed");
		// Add logic for enabling dark mode
	};

	const handleLightMode = () => {
		console.log("Light Mode button pressed");
		// Add logic for enabling light mode
	};

	const handleSignOut = () => {
		console.log("Sign Out button pressed");
		// Add logic for signing out the user
	};

	const CustomButton = ({ title, onPress, color }) => {
		return (
			<TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.profileRow}>
				<TouchableOpacity
					style={styles.profilePicContainer}
					onPress={handleProfilePicturePress}
				>
					<Text style={styles.profilePicText}>Add Photo</Text>
				</TouchableOpacity>
				<View style={styles.inputContainer}>
					<View style={styles.inputRow}>
						<Text style={styles.label}>Name:</Text>
						<TextInput
							style={[styles.input, styles.halfWidth]}
							value={userInfo.name}
							onChangeText={(text) => handleInputChange("name", text)}
						/>
					</View>
					<View style={styles.inputRow}>
						<Text style={styles.label}>Email:</Text>
						<TextInput
							style={[styles.input, styles.halfWidth]}
							value={userInfo.email}
							keyboardType="email-address"
							onChangeText={(text) => handleInputChange("email", text)}
						/>
					</View>
					<View style={styles.inputRow}>
						<Text style={styles.label}>University:</Text>
						<TextInput
							style={[styles.input, styles.halfWidth]}
							value={userInfo.university}
							onChangeText={(text) => handleInputChange("university", text)}
						/>
					</View>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonWrapper}>
					<CustomButton
						title="Edit Profile"
						onPress={handleEditProfile}
						color="#468263"
					/>
					<CustomButton
						title="Change Password"
						onPress={handleEditProfile}
						color="#468263"
					/>
				</View>

				<View style={styles.modeButtonContainer}>
					<CustomButton title="Dark Mode" onPress={handleEditProfile} color="#468263" />
					<View style={{ width: 10 }} />
					<CustomButton title="Light Mode" onPress={handleEditProfile} color="#468263" />
				</View>
			</View>

			<View style={styles.signOutButtonContainer}>
				<CustomButton title="Sign Out" onPress={handleEditProfile} color="#808080" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 20,
	},
	profileRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	profilePicContainer: {
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor: "#cccccc",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 20,
	},
	profilePicText: {
		color: "white",
	},
	inputContainer: {
		flex: 1,
		marginLeft: 20,
	},
	inputRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	label: {
		marginRight: 10,
		fontWeight: "bold",
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#000",
		flex: 1,
	},
	halfWidth: {
		width: "50%",
	},
	buttonsContainer: {
		marginTop: 70,
	},

	button: {
		backgroundColor: "#468263",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 20, // Add some margin between buttons
	},

	buttonText: {
		color: "#fff",
		fontSize: 16,
		textAlign: "center",
	},

	buttonWrapper: {
		marginBottom: 5,
	},

	modeButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	signOutButtonContainer: {
		position: "absolute",
		bottom: 20,
		slignSelf: "center",
	},
});

export default ProfileScreen;
