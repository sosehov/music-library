const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(obj) {
  const playlistsObject = obj.playlists;
  for (const p in playlistsObject) {
    let playlistName = playlistsObject[p].name;
    let arrayOfTracks = playlistsObject[p].tracks;
    let tracksCount = arrayOfTracks.length;
    console.log(`${p}: ${playlistName} - ${tracksCount} tracks`); //need to refactor and print "track" if the number of tracks is 1
  }
};
//TEST CODE
printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(obj) {
  const tracksObject = obj.tracks;
  for (const t in tracksObject) {
    let trackName = tracksObject[t].name; //why can't I write tracksObject.t.name?
    let trackArtist = tracksObject[t].artist;
    let trackAlbum = tracksObject[t].album;
    console.log(`${t}: ${trackName} by ${trackArtist} (${trackAlbum})`);
  }
};
//TEST CODE
printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const playlistsObject = library["playlists"];
const tracksObject = library["tracks"];
const printPlaylist = function(playlistId) {
  const trackName = playlistsObject[playlistId]["name"];
  const playlistTracks = playlistsObject[playlistId]["tracks"];
  const tracksCount = playlistTracks.length;
  console.log(`${playlistId}: ${trackName} - ${tracksCount} tracks`);
  for (let t of playlistTracks) {
    let trackName = tracksObject[t]["name"];
    let trackArtist = tracksObject[t]["artist"];
    let trackAlbum = tracksObject[t]["album"];
    console.log(`${t}: ${trackName} by ${trackArtist} (${trackAlbum})`);
  }
};
//TEST CODE
printPlaylist("p01");
printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlistsObject = library["playlists"];
  let tracksArray = playlistsObject[playlistId]["tracks"];
  if (!tracksArray.includes(trackId)) {
    tracksArray.push(trackId);
  }
  return tracksArray.sort();
};
//TEST CODE
console.log(addTrackToPlaylist("t01", "p02"));
console.log(addTrackToPlaylist("t03", "p01"));
console.log(addTrackToPlaylist("t03", "p02"));//testing for duplicates

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  let tracksObject = library.tracks;
  //generate a unique track ID
  let trackId = "t" + generateUid();
  const allTrackIds = Object.keys(tracksObject);
  //check for uniqueness
  if (allTrackIds.includes(trackId)) {
    console.log("This track ID already exists, regenerating...");
    let trackId = "t" + generateUid(); //handle the case when the newly generated ID also exists
  } else {
    tracksObject[trackId] = {
      id:  trackId,
      name: name,
      artist:  artist,
      album:  album,
    };
    console.log(`Track ${trackId} added.`);
  }
};
//TEST CODE
addTrack("Believe","Cher","Runaway");

// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}