import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";

const ExploreScreen = () => {
	const [selectedSchool, setSelectedSchool] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([]);

	const schools = ["Select a school", "VTECH", "UVA", "JMU"];

	const handleSchoolChange = (value) => {
		setSelectedSchool(value);
	};

	const handleClick = (category) => {
		console.log(category);
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>THE NEWS</Text>
			<Text style={styles.subtitle}>Select Categories</Text>
			<Text style={styles.description}>
				Choose your interests here and get the best news recommendations.
			</Text>
			<ScrollView contentContainerStyle={styles.categoriesContainer}>
				<View style={styles.row}>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("General") && styles.selectedCategory,
						]}
						onPress={() => handleClick("General")}
					>
						<Text style={styles.categoryIcon}>&#128240;</Text>
						<Text style={styles.categoryText}>General</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("Politics") && styles.selectedCategory,
						]}
						onPress={() => handleClick("Politics")}
					>
						<Text style={styles.categoryIcon}>&#127758;</Text>
						<Text style={styles.categoryText}>Politics</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("Technology") && styles.selectedCategory,
						]}
						onPress={() => handleClick("Technology")}
					>
						<Text style={styles.categoryIcon}>&#128240;</Text>
						<Text style={styles.categoryText}>Technology</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("Sports") && styles.selectedCategory,
						]}
						onPress={() => handleClick("Sports")}
					>
						<Text style={styles.categoryIcon}> &#9917;</Text>
						<Text style={styles.categoryText}>Sports</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("VTECH") && styles.selectedCategory,
						]}
						onPress={() => handleClick("VTECH")}
					>
						<Text style={styles.categoryIcon}>🎓</Text>
						<Text style={styles.categoryText}>VTECH</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.category,
							selectedCategories.includes("JMU") && styles.selectedCategory,
						]}
						onPress={() => handleClick("JMU")}
					>
						<Text style={styles.categoryIcon}>🎓</Text>
						<Text style={styles.categoryText}>JMU</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={[
						styles.category,
						selectedCategories.includes("UVA") && styles.selectedCategory,
					]}
					onPress={() => handleClick("UVA")}
				>
					<Text style={styles.categoryIcon}>🎓</Text>
					<Text style={styles.categoryText}>UVA</Text>
				</TouchableOpacity>
			</ScrollView>

			<TouchableOpacity style={styles.continueButton}>
				<Text style={styles.continueButtonText}>Continue</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		color: "#888",
		marginBottom: 20,
	},
	categoriesContainer: {
		flexGrow: 1,
		justifyContent: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	category: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#f1f1f1",
		borderRadius: 10,
		paddingVertical: 30,
		paddingHorizontal: 10,
		marginHorizontal: 10,
	},
	categoryIcon: {
		fontSize: 32,
		marginBottom: 10,
	},
	categoryText: {
		fontSize: 18,
	},

	continueButton: {
		backgroundColor: "#007AFF",
		borderRadius: 5,
		paddingVertical: 15,
		alignItems: "center",
	},
	continueButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});
