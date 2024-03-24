const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(bodyParser.json());

const uri = "mongodb+srv://dhruvvarshneyemail:hoohacks2024@hoohacks2024.otyt9ir.mongodb.net/";
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
