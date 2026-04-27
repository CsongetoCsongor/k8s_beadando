const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Zenei "adatbázis" műfajok szerint
const musicByGenre = {
  pop: "Taylor Swift - Anti-Hero",
  rock: "AC/DC - Back In Black",
  jazz: "Miles Davis - So What",
  techno: "Charlotte de Witte - Overdrive",
  classical: "Ludwig van Beethoven - Symphony No. 5",
  metal: "lorem ipsum"
};

// Végpont, amely a műfaj alapján ad vissza egy zenét
app.get("/music/:genre", (req, res) => {
  const genre = req.params.genre.toLowerCase(); // Kisbetűsítés a biztonság kedvéért
  const track = musicByGenre[genre];

  if (track) {
    res.json({ genre, track });
  } else {
    res.status(404).json({ error: "Sajnos ez a műfaj nem található az adatbázisban." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A szerver fut a http://localhost:${PORT} címen`);
});