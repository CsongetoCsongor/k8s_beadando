const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

<<<<<<< HEAD
// Zenei "adatbázis" műfajok szerint
const musicByGenre = {
  pop: "Taylor Swift - Anti-Hero",
  rock: "AC/DC - Back In Black",
  jazz: "Miles Davis - So What",
  techno: "Charlotte de Witte - Overdrive",
  classical: "Ludwig van Beethoven - Symphony No. 5"
=======
// Egyszerű "adatbázis"
const oscars = {
  2020: "Parasite",
  2021: "Nomadland",
  2022: "CODA",
  2023: "Everything Everywhere All at Once",
  2024: "Oppenheimer",
  2025: "Anora"
>>>>>>> 039f9b5929a904d91c7eb1f00497f359e556cf9a
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