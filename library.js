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
  },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    const playlistsObject = this.playlists;
    for (const p in playlistsObject) {
      let playlistName = playlistsObject[p].name;
      let arrayOfTracks = playlistsObject[p].tracks;
      let tracksCount = arrayOfTracks.length;
      //check if tracksCount is 1 or more and print accordingly
      let trackLabel = tracksCount === 1 ? "track" : "tracks";
      console.log(`${p}: ${playlistName} - ${tracksCount} ${trackLabel}`); //
    }
  },
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    const tracksObject = this.tracks;
    for (const t in tracksObject) {
      let trackName = tracksObject[t].name; //why can't I write tracksObject.t.name?
      let trackArtist = tracksObject[t].artist;
      let trackAlbum = tracksObject[t].album;
      console.log(`${t}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    const playlistsObject = this.playlists;
    const tracksObject = this.tracks;
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
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlistsObject = this.playlists;
    let tracksArray = playlistsObject[playlistId]["tracks"];
    if (!tracksArray.includes(trackId)) {
      tracksArray.push(trackId);
    }
    return tracksArray.sort();
  },
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library
  addTrack: function(name, artist, album) {
    let tracksObject = this.tracks;
    //generate a unique track ID
    let trackId = "t" + this.generateUid();
    const allTrackIds = Object.keys(tracksObject);
    //check for uniqueness
    if (allTrackIds.includes(trackId)) {
      console.log("This track ID already exists, regenerating...");
      let trackId = "t" + this.generateUid(); //stretch for later: handle the case when the newly generated ID also exists
    } else {
      tracksObject[trackId] = {
        id:  trackId,
        name: name,
        artist:  artist,
        album:  album,
      };
      console.log(`Track ${trackId} added.`);
    }
  },
  // adds a playlist to the library
  addPlaylist: function(name) {
    const playlistsObject = this.playlists;
    let playlistId = "t" + this.generateUid();
    const allPlaylistsId = Object.keys(playlistsObject);
    if (allPlaylistsId.includes(playlistId)) {
      console.log("This playlist already exists, regenerating...");
      let playlistId = "t" + this.generateUid(); //stretch for later: handle the case when the newly generated ID also exists
    } else {
      playlistsObject[playlistId] = {
        id:  playlistId,
        name: name,
        tracks:  "t01"
      };
      console.log(`Playlist ${playlistId} added.`);
    }
  }
};

//TEST CODE
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.printPlaylist("p02");
library.addTrackToPlaylist("t01", "p02");
library.addTrackToPlaylist("t03", "p01");
library.addTrackToPlaylist("t03", "p02");//testing for duplicates
library.addTrack("Believe","Cher","Runaway");
console.log(library.tracks);
library.addPlaylist();
console.log(library.playlists);

//STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {

//}