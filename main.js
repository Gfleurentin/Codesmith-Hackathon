const generateMusic = async (mood) => {
  const moodPlaylist = {
    happy: { seed_genres: "pop", energy: 0.8 },
    sad: { seed_genres: "acoustic", energy: 0.2 },
  };
  //extract the genre and energy level for selected mood
  const { seed_genres, energy } = moodPlaylist[mood];
  //spotify url request
  const url = `https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&target_energy=${energy}&limit=5`;

  const token = "YOUR_SPOTIFY_ACCESS_TOKEN";

  // Attempt to fetch data from Spotify API
  try {
    // Send a GET request to the Spotify API with authorization header
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token for authentication
      },
    });

    // Check if response is successful
    if (!response.ok) {
      // If response fails, throw an error to trigger catch block
      throw new Error("Failed to fetch songs");
    }

    // Convert response to JSON format to work with the data
    const data = await response.json();

    // Call displayMusic function to display the songs on the page
    displayMusic(data.tracks, mood);
  } catch (error) {
    // In case of error, display an error message on the page
    document.getElementById("music-display").innerText =
      "Error fetching songs!";
  }
};

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

// Function to display the list of recommended music tracks based on the mood
const displayMusic = (tracks, mood) => {
  // Get the music display area by its ID
  const display = document.getElementById("music-display");

  // Set a title for the mood-based playlist
  display.innerHTML = `<h2>${
    mood.charAt(0).toUpperCase() + mood.slice(1)
  } Playlist</h2>`;
  display.innerHTML += `<p>Here are some ${mood} songs for you!</p>`;

  // Loop over each track in the list of recommended tracks
  tracks.forEach((track) => {
    // Create a div for each track
    const trackElement = document.createElement("div");

    // Set inner HTML to display track details and audio player
    trackElement.innerHTML = `
             <p>${track.name} by ${track.artists[0].name}</p>
             <audio controls>
                 <source src="${track.preview_url}" type="audio/mpeg">
                 Your browser does not support the audio element.
             </audio>
         `;

    // Append the trackElement to the display area
    display.appendChild(trackElement);
  });
};
