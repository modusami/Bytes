import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const ExploreScreen = () => (
	<View style={styles.container}>
		<Text>Explore Screen</Text>
	</View>
);

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
