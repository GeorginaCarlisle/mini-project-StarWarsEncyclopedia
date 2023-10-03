// Constant variables
const API_URL = "https://ci-swapi.herokuapp.com/api/films/"

// Load page before populating with the data from the API
window.onload = loadingMessage();

/**
 * Called on load
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
    contents.innerHTML = "On its way the film information is"
}


