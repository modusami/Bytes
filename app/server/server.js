const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(bodyParser.json());

const uri =
  "mongodb+srv://dhruvvarshneyemail:hoohacks2024@hoohacks2024.otyt9ir.mongodb.net/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    await client.connect();
    const database = client.db("bytes");
    const usersCollection = database.collection("users");

    // Check if the user already exists

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "Logged In!" });
    } else {
      // User does not exist, return 404 status code
      return res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.get("/college-news/uva", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("bytes");
    const newsCollection = database.collection("schoolnews");

    // Query the collection for news articles related to UVA, limiting the result to 5 articles
    const uvaNewsArticles = await newsCollection
      .find({ college: "UVA" })
      .limit(5)
      .toArray();

    if (uvaNewsArticles.length > 0) {
      res.status(200).json(uvaNewsArticles);
    } else {
      res.status(404).json({ message: "No news articles found for UVA." });
    }
  } catch (error) {
    console.error("Error fetching UVA college news:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.get("/college-news/vtech", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("bytes");
    const newsCollection = database.collection("schoolnews");

    // Query the collection for news articles related to UVA, limiting the result to 5 articles
    const vtNewsArticles = await newsCollection
      .find({ college: "VTECH" })
      .limit(5)
      .toArray();

    if (vtNewsArticles.length > 0) {
      res.status(200).json(vtNewsArticles);
    } else {
      res.status(404).json({ message: "No news articles found for VT." });
    }
  } catch (error) {
    console.error("Error fetching VT college news:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.get("/college-news/jmu", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("bytes");
    const newsCollection = database.collection("schoolnews");

    // Query the collection for news articles related to UVA, limiting the result to 5 articles
    const uvaNewsArticles = await newsCollection
      .find({ college: "JMU" })
      .limit(5)
      .toArray();

    if (uvaNewsArticles.length > 0) {
      res.status(200).json(uvaNewsArticles);
    } else {
      res.status(404).json({ message: "No news articles found for UVA." });
    }
  } catch (error) {
    console.error("Error fetching UVA college news:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
