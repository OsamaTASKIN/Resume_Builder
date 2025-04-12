const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas URI
const uri = "mongodb+srv://osama_1:AptechQatar123@cluster0.ycpui.mongodb.net/Resume_Builder_Website?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Add TLS options to handle SSL errors
const client = new MongoClient(uri, {
  tls: true,
  tlsAllowInvalidCertificates: true, // only for development
});

async function startServer() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("Resume_Builder_Website");
    app.locals.db = db;

    app.get("/test-db", async (req, res) => {
      try {
        const collections = await db.listCollections().toArray();
        res.json({ message: "DB connected", collections });
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch collections" });
      }
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

startServer();
