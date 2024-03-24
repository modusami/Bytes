import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
	Linking,
} from "react-native";
import axios from "axios";

const API_KEY = "bdd28d4b8aba4880a6ba243ebd2cc0d7";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const BACKUP_IMG = "https://cdn-icons-png.flaticon.com/512/190/190565.png";

const { width, height } = Dimensions.get("window");

const NewsItem = ({ article }) => {
	const handlePress = () => {
		const url = article.url; // Replace this with your URL
		Linking.openURL(url);
	};

	return (
		<View style={styles.newsItem}>
			<Image source={{ uri: article.urlToImage ?? BACKUP_IMG }} style={styles.newsImage} />
			<View style={styles.newsContent}>
				<Text style={styles.newsTitle}>{article.title}</Text>
				<Text style={styles.newsDescription}>{article.description}</Text>
				<TouchableOpacity style={styles.readMoreButton} onPress={handlePress}>
					<Text style={styles.readMoreButtonText}>Read More</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const HomeScreen = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchArticles();
	}, []);

	const fetchArticles = async () => {
		try {
			const response = await axios.get(API_URL);
			setArticles(response.data.articles);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching articles:", error);
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={articles}
				renderItem={({ item }) => <NewsItem article={item} />}
				keyExtractor={(item) => item.url}
				showsVerticalScrollIndicator={false}
				pagingEnabled
				snapToAlignment="start"
				decelerationRate="fast"
				getItemLayout={(data, index) => ({
					length: height,
					offset: height * index,
					index,
				})}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	newsItem: {
		height,
		width,
		backgroundColor: "#fff",
	},
	newsImage: {
		width: "100%",
		height: height * 0.5,
		resizeMode: "cover",
	},
	newsContent: {
		padding: 20,
	},
	newsTitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	newsDescription: {
		fontSize: 16,
		marginBottom: 20,
	},
	readMoreButton: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
	},
	readMoreButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default HomeScreen;
