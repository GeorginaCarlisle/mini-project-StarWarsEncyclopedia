// Constant variables
const API_URL = "https://ci-swapi.herokuapp.com/api/films/"

// Load page before populating with the data from the API
window.onload = getFilmData();

/**
 * Called on load
 * Connects to SWAPI passing data to ??? function
 * Calls LoadingMessage while connecting
 * Displays error message to user if connection fails
 */
async function getFilmData() {
    loadingMessage();
    const response = await fetch(API_URL);
    const data = await response.json();

    if (response.ok) {
        closeLoadingMessage();
        displayFilmData(data.results);
        console.log(data);
    } else {
        displayErrorMessage(data);
        throw new Error(data.error);
    }
}

/**
 * Called while connection being made to SWAPI
 * Displays a message to inform the user that the data is loading
 */
function loadingMessage() {
    // Locate items in the DOM to be altered
    messageContainer = document.getElementById("message-container");
    heading = document.getElementById("message-heading");
    contents = document.getElementById("message-contents");
    // Display message container
    messageContainer.style = "display:block";
    // Add heading and message
    heading.innerHTML = "Have patience";
    contents.innerHTML = `
    On its way the film information is<br><br>
    However if waiting a long time you are, please try again or contact us
    `
}

/**
 * Called once connection to SWAPI confirmed
 * Re-hides message container
 */
function closeLoadingMessage() {
    // Locate items in the DOM to be altered
    messageContainer = document.getElementById("message-container");
    // Hide message container
    messageContainer.style = "display:hidden";
}


/**
 * Called if error is received when connecting to API
 * Displays message to DOM
 */
function displayErrorMessage(data) {
    // Locate items in the DOM to be altered
    messageContainer = document.getElementById("message-container");
    heading = document.getElementById("message-heading");
    contents = document.getElementById("message-contents");
    // Display message container
    messageContainer.style = "display:block";
    // Add heading and message
    heading.innerHTML = "More work to be done";
    contents.innerHTML = "failed to connect to the API you have";
}

/**
 * Called once API has been successfully contected too
 * Displays a selection of film data from API into the DOM
 */
function displayFilmData(data) {
    // Display info container
    infoContainer = document.getElementById("film-info");
    infoContainer.style = "display:grid";

    // Iterate through the array adding data into the DOM
    console.log(data);
    const numberItems = data.length;
    console.log(numberItems);
    for (let i = 0; i < numberItems; i++) {
        let film = data[i];
        console.log(film);
        // Add title to DOM
        title = document.getElementById(`title-${i}`);
        title.innerHTML = film.title;
        // Add episode number to DOM
        episode = document.getElementById(`episode-${i}`);
        episode.innerHTML = film.episode_id;
        // Add opening crawl to DOM
        opening = document.getElementById(`opening-${i}`);
        opening.innerHTML = film.opening_crawl;
        // Add created to DOM
        created = document.getElementById(`created-${i}`);
        created.innerHTML = film.created;
    }
}




