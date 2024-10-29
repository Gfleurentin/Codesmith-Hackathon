//created playlist object with urls for each mood
const moodPlaylist = {
  happy: "https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7",
  sad: "https://open.spotify.com/playlist/37i9dQZF1EIeOoLWBf6eek",
  energetic: "https://open.spotify.com/playlist/37i9dQZF1EIcVD7Tg8a0MY",
  calm: "https://open.spotify.com/playlist/37i9dQZF1EIfTmpqlGn32s",
  romantic: "https://open.spotify.com/playlist/37i9dQZF1EVGJJ3r00UGAt",
  focused: "https://open.spotify.com/playlist/37i9dQZF1EIeSTCg9cy53h",
};

// Function to open Spotify playlist in a new tab
const suggestPlaylist = (mood) => {
  // Get the URL for the selected mood
  const playlistUrl = moodPlaylist[mood];

  // If the URL exists, open it in a new tab
  if (playlistUrl) {
    window.open(playlistUrl, "_blank"); // Opens the link in a new tab
  } else {
    console.log("Playlist not found for mood:", mood);
  }
};

// targeted each elemetn and Called the addEventListner method to check for the mood thats been clicked
document.getElementById("happy").addEventListener("click", function () {
  suggestPlaylist("happy");
});

document.getElementById("sad").addEventListener("click", function () {
  suggestPlaylist("sad");
});
document.getElementById("energetic").addEventListener("click", function () {
  suggestPlaylist("energetic");
});
document.getElementById("calm").addEventListener("click", function () {
  suggestPlaylist("calm");
});
document.getElementById("romantic").addEventListener("click", function () {
  suggestPlaylist("romantic");
});
document.getElementById("focused").addEventListener("click", function () {
  suggestPlaylist("focused");
});

const gradients = [
  "linear-gradient(to right, #ff7e5f, #feb47b)",
  "linear-gradient(to right, #6a11cb, #2575fc)",
  "linear-gradient(to right, #00c6ff, #0072ff)",
  "linear-gradient(to right, #f7971e, #ffd200)",
  "linear-gradient(to right, #ffafbd, #ffc3a0)",
  "linear-gradient(to right, #2193b0, #6dd5ed)",
  "linear-gradient(to right, #cc2b5e, #753a88)",
  "linear-gradient(to right, #ee9ca7, #ffdde1)",
  "linear-gradient(to right, #42275a, #734b6d)",
  "linear-gradient(to right, #4568dc, #b06ab3)",
];

// Function to apply a random gradient background
function setRandomGradientBackground() {
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;

  // Apply the same gradient as the hover effect for buttons
  const style = document.createElement("style");
  style.innerHTML = `
       button:hover {
           background: ${randomGradient};
           color: white;
           transition: background 0.3s ease;
       }
   `;
  document.head.appendChild(style);
}

// Run on popup load
document.addEventListener("DOMContentLoaded", setRandomGradientBackground);
