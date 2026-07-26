if(!localStorage.getItem("songs"))
{
    localStorage.setItem("songs",JSON.stringify(songs));
}
function getSongs()
{
    return JSON.parse(localStorage.getItem("songs"));
}
function saveSongs(updatedSongs)
{
    localStorage.setItem("songs",JSON.stringify(updatedSongs));
}
function addSong(song)
{
    const songs=getSongs();
    songs.push(song);
    saveSongs(songs);
}
function deleteSong(id) {
    const songs = getSongs().filter(song => song.id !== id);
    saveSongs(songs);
}
function updateSong(updatedSong) {
    const songs = getSongs().map(song =>
        song.id === updatedSong.id ? updatedSong : song
    );

    saveSongs(songs);
}