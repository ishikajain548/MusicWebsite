const container = document.getElementById("song-list");

const form = document.getElementById("insert-form");
const formBtn = document.getElementById("form-btn");
const search = document.getElementById("search");
const insertBtn = document.getElementById("insert");
const header = document.getElementById("header");
const pageHeading = document.getElementById("page-heading");

// Form Inputs
const titleInput = document.getElementById("title");
const artistInput = document.getElementById("artist");
const genreInput = document.getElementById("genre");
const youtubeInput = document.getElementById("youtubeLink");

// Detect genre from URL
const params = new URLSearchParams(window.location.search);
const currentGenre = params.get("genre");

let editId = null;

// Hide form initially
form.style.display = "none";

/* ---------------------------------------
   PAGE INITIALIZATION
----------------------------------------*/

if (currentGenre) {

    pageHeading.textContent = currentGenre;


} else {

    pageHeading.textContent = "All Songs";

}

/* ---------------------------------------
   VALIDATION
----------------------------------------*/

function validateSong(title, artist, youtubeLink) {

    if (!title || !artist || !youtubeLink) {
        alert("Please fill all fields.");
        return false;
    }

    if (title.length < 2) {
        alert("Song title must be at least 2 characters.");
        return false;
    }

    if (artist.length < 2) {
        alert("Artist name must be at least 2 characters.");
        return false;
    }

    const youtubeRegex =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//;

    if (!youtubeRegex.test(youtubeLink)) {

        alert("Please enter a valid YouTube link.");
        return false;

    }

    return true;

}

/* ---------------------------------------
   FORM FUNCTIONS
----------------------------------------*/

function showForm(buttonText) {

    container.style.display = "none";
    pageHeading.textContent = buttonText;
    header.style.display = "none";

    form.style.display = "block";

    formBtn.textContent = buttonText;

}

function hideForm() {

    form.reset();

    form.style.display = "none";

    container.style.display = "block";

    header.style.display = "grid";

    editId = null;

}

/* ---------------------------------------
   DISPLAY SONGS
----------------------------------------*/

function displaySongs(songArray) {

    container.innerHTML = "";

    if (songArray.length === 0) {

        container.innerHTML = "<h3>No songs found.</h3>";

        return;

    }

    songArray.forEach(song => {

        const songDiv = document.createElement("div");
        songDiv.className = "songD";

        const title = document.createElement("p");
        title.textContent = song.title;

        const artist = document.createElement("p");
        artist.textContent = song.artist;

        const viewBtn = document.createElement("button");
        viewBtn.className = "bt";
       viewBtn.innerHTML = '<i class="fa fa-play"></i>';        
        viewBtn.addEventListener("click", () => {

    frame.src = convertToEmbed(song.youtubeLink);

    modal.style.display = "flex";

});

        songDiv.append(title);
        songDiv.append(artist);
        songDiv.append(viewBtn);

        // Show Edit/Delete only on All Songs page
      


            const deleteBtn = document.createElement("button");
            deleteBtn.id = "delete";
           deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

            deleteBtn.addEventListener("click", () => {

                if (confirm("Delete this song?")) {

                    deleteSong(song.id);

                    refreshSongs();

                }

            });

            const editBtn = document.createElement("button");
            editBtn.id = "edit";
            editBtn.innerHTML = '<i class="fa fa-pencil"></i>';

            editBtn.addEventListener("click", () => {

                showForm("Update Song");

                titleInput.value = song.title;
                artistInput.value = song.artist;
                genreInput.value = song.genre;
                youtubeInput.value = song.youtubeLink;

                editId = song.id;

            });

            songDiv.append(deleteBtn);
            songDiv.append(editBtn);

        

        container.appendChild(songDiv);

    });

}

/* ---------------------------------------
   REFRESH SONGS
----------------------------------------*/

function refreshSongs() {

    let songs = getSongs();

    if (currentGenre) {

        songs = songs.filter(song => song.genre === currentGenre);

    }

    displaySongs(songs);

}

refreshSongs();

/* ---------------------------------------
   SEARCH
----------------------------------------*/

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    let songs = getSongs();

    if (currentGenre) {

        songs = songs.filter(song => song.genre === currentGenre);

    }

    songs = songs.filter(song =>

        song.title.toLowerCase().includes(value) ||

        song.artist.toLowerCase().includes(value)

    );

    displaySongs(songs);

});

/* ---------------------------------------
   ADD BUTTON
----------------------------------------*/



    insertBtn.addEventListener("click", () => {

        form.reset();

        editId = null;

        showForm("Add Song");

    });



/* ---------------------------------------
   FORM SUBMIT
----------------------------------------*/

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();
    const genre = genreInput.value;
    const youtubeLink = youtubeInput.value.trim();

    if (!validateSong(title, artist, youtubeLink)) {

        return;

    }

    if (editId === null) {

        const newSong = {

            id: Date.now(),

            title,

            artist,

            genre,

            youtubeLink

        };

        addSong(newSong);

    }

    else {

        const updatedSong = {

            id: editId,

            title,

            artist,

            genre,

            youtubeLink

        };

        updateSong(updatedSong);

    }

    hideForm();

    refreshSongs();

});

const modal = document.getElementById("videoModal");
const frame = document.getElementById("youtubeFrame");
const closeBtn = document.getElementById("closeModal");

function convertToEmbed(url){

    if(url.includes("watch?v=")){
        return url.replace("watch?v=","embed/");
    }

    if(url.includes("youtu.be/")){
        return url.replace("youtu.be/","youtube.com/embed/");
    }

    return url;
}
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    frame.src = "";

});
