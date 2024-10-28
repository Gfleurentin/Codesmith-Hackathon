// const generateMusic = async (mood) => {
//   const moodPlaylist = {
//     happy: { seed_genres: "pop", energy: 0.8 },
//     sad: { seed_genres: "acoustic", energy: 0.2 },
//   };
//   //extract the genre and energy level for selected mood
//   const { seed_genres, energy } = moodPlaylist[mood];
//   //spotify url request
//   const url = `https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&target_energy=${energy}&limit=5`;

//   const token = "YOUR_SPOTIFY_ACCESS_TOKEN";

//   // Attempt to fetch data from Spotify API
//   try {
//     // Send a GET request to the Spotify API with authorization header
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Add token for authentication
//       },
//     });

//     // Check if response is successful
//     if (!response.ok) {
//       // If response fails, throw an error to trigger catch block
//       throw new Error("Failed to fetch songs");
//     }

//     // Convert response to JSON format to work with the data
//     const data = await response.json();

//     // Call displayMusic function to display the songs on the page
//     displayMusic(data.tracks, mood);
//   } catch (error) {
//     // In case of error, display an error message on the page
//     document.getElementById("music-display").innerText =
//       "Error fetching songs!";
//   }
// };

// fetch("https://api.spotify.com/v1/browse/categories/party/playlists", {
//   headers: {
//     Authorization: "Bearer " + accessToken,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const playlist = data.playlists.items[0]; // Example playlist
//     document.getElementById(
//       "musicSuggestion"
//     ).innerHTML = `<a href="${playlist.external_urls.spotify}" target="_blank">Listen to ${mood} music</a>`;
//   });

const moodPlaylist = {
  happy: "https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7",
  sad: "https://open.spotify.com/playlist/37i9dQZF1EIeOoLWBf6eek",
  energetic: "https://open.spotify.com/playlist/37i9dQZF1EIcVD7Tg8a0MY",
  calm: "https://open.spotify.com/playlist/37i9dQZF1EIfTmpqlGn32s",
  romantic: "https://open.spotify.com/playlist/37i9dQZF1EVGJJ3r00UGAt",
  focused: "https://open.spotify.com/playlist/37i9dQZF1EIeSTCg9cy53h",
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
// const generatePlaylist = (mood) => {
//   const display = document.getElementById("playlist-display");
//   display.innerHTML = `<h2>${
//     mood.charAt(0).toUpperCase() + mood.slice(1)
//   } Playlist</h2>`;

//   // Get the playlist for the selected mood
//   const moodPlaylist = playlists[mood];

//   moodPlaylist.forEach((song) => {
//     const songElement = document.createElement("div");
//     songElement.innerHTML = `
//              <p><strong>${song.name}</strong> by ${song.artist}</p>
//              <a href="${song.url}" target="_blank">Listen</a>
//          `;
//     display.appendChild(songElement);
//   });
// };

// Function to suggest the playlist based on the selected mood
function suggestPlaylist(mood) {
  const playlistURL = moodPlaylist[mood]; // Get the playlist URL from the object

  if (playlistURL) {
    document.getElementById("playlist-display").innerHTML = `
      <h4>${mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h4>
      <a href="${playlistURL}" target="_blank">Listen on Spotify</a>
    `;
  } else {
    document.getElementById("playlist-display").innerHTML =
      "No playlist available for this mood.";
  }
}
