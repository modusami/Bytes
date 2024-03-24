import { StyleSheet, Text, View, Image, Switch } from "react-native";
import { useState } from "react";

const ProfileScreen = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<View style={styles.profileSection}>
				<Image
					source={{ uri: "https://example.com/profile-picture.jpg" }}
					style={styles.profilePicture}
				/>
				<Text style={[styles.name, isDarkMode && styles.darkText]}>User</Text>
				<Text style={[styles.email, isDarkMode && styles.darkText]}>user@gmail.com</Text>
				<Text style={[styles.editButton, isDarkMode && styles.darkText]}>Edit</Text>
			</View>
			<View style={styles.optionsSection}>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>
						Push Notification
					</Text>
				</View>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>Language</Text>
				</View>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>
						Change Password
					</Text>
				</View>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>
						Dark Mode
					</Text>
					<Switch value={isDarkMode} onValueChange={toggleDarkMode} />
				</View>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>Help</Text>
				</View>
				<View style={styles.optionItem}>
					<Text style={[styles.optionText, isDarkMode && styles.darkText]}>Logout</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	darkContainer: {
		backgroundColor: "#000",
	},
	profileSection: {
		alignItems: "center",
		marginBottom: 40,
	},
	profilePicture: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 10,
		backgroundColor: "blue",
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	email: {
		fontSize: 16,
		color: "#888",
		marginBottom: 10,
	},
	editButton: {
		fontSize: 16,
		color: "#007AFF",
	},
	optionsSection: {
		borderTopWidth: 1,
		borderTopColor: "#ccc",
	},
	optionItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	optionText: {
		fontSize: 16,
	},
	darkText: {
		color: "#fff",
	},
});

export default ProfileScreen;
