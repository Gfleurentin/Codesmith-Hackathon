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
