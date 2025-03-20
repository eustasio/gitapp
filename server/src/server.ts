import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../router";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/server", router)

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur Express !");
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
