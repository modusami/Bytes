import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
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
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";

const API_KEY = "4e632e3fae9f417e91341ad24d4ae22d";
// const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const BACKUP_IMG = "https://cdn-icons-png.flaticon.com/512/190/190565.png";

const { width, height } = Dimensions.get("window");

const NewsItem = ({ article }) => {
  const handleSpeech = () => {
    const text = `${article.title}. ${article.description}`;
    Speech.speak(text);
  };

  return (
    <View style={styles.newsItem}>
      <View style={styles.imgContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
          <Image
            source={{ url: article.urlToImage }}
            style={styles.newsImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{article.title}</Text>
        <Text style={styles.newsDescription} numberOfLines={8}>
          {article.description}
        </Text>

        <TouchableOpacity style={[styles.button]} onPress={handleSpeech}>
          <Ionicons name="ear" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = ({ selectedCategory = "general" }) => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`;

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (selectedCategory) {
      case "vtech":
      case "jmu":
      case "uva":
        {
          fetchSchoolArticles();
        }
        break;
      default: {
        fetchArticles();
      }
    }
  }, [selectedCategory]);

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

  const fetchSchoolArticles = async () => {
    const url = `http://localhost:3000/college-news/${selectedCategory}`;
    try {
      const response = await axios.get(url);

      console.log(response);
      setArticles(response.data);
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
        snapToInterval={height - StatusBar.currentHeight}
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
    width: width,
    height: height - StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    height: "35%",
    width: "100%",
    marginBottom: 10,
  },
  newsItem: {
    width: width,
    height: height,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  newsImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
  },
  newsContent: {
    flex: 1,
    padding: 20,
  },
  newsTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 20,
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
  button: {
    padding: 8,
    borderRadius: 999, // For rounded full shape
    backgroundColor: "#007BFF", // Blue color
    display: "absolute",
    width: 42,
    height: 42,
    marginTop: 5,
  },
});

export default HomeScreen;
