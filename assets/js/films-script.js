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
    let filmData = ``;
    for (let i = 0; i < numberItems; i++) {
        const film = data[i];
        console.log(film);
        // build film data
        const filmData = `
            <div class="bg-slate-900 p-3 mt-10 mx-8 rounded sm:mx-16 md:mx-8">
                <h2 class="text-center text-red-500 text-2xl font-bold mb-4">${film.title}</h2>
                <p class="mb-4"><span class="font-bold mr-3">Episode:</span><span>${film.episode_id}</span><span class="font-bold mr-3 ml-6">Released:</span><span>${film.release_date}</span></p>
                <p class="mb-4"><span class="font-bold mr-3">Opening crawl:</span><span>${film.opening_crawl}</span></p>
                <div class="flex justify-items-end">
                    <button id="btn-filmData-${i}" class="bg-amber-500 hover:bg-red-700 p-1 text-xl text-black rounded-md mx-auto">
                        Find out more
                    </button>
                </div>
            </div>`
        // Add film data into the DOM
        infoContainer.insertAdjacentHTML("beforeend", filmData);
        // Add event listener
        const buttonClick = document.getElementById(`btn-filmData-${i}`);
        buttonClick.addEventListener('click', extraFilmInfo);
    }
}

/**
 * Called by event listener attached to find out more button
 * Passed event and from this id of button pressed located
 * 
 */
function extraFilmInfo(event) {
    console.log(event.srcElement.id);
    const buttonClicked = event.srcElement.id;
}





 // build extra film data
 const extraFilmData = `
 <div id="filmData-modal-${i}">
     <h2 class="text-center text-red-500 text-2xl font-bold mb-4">${film.title}</h2>
     <p class="mb-4"><span class="font-bold mr-3">Episode:</span><span>${film.episode_id}</span></p>
     <p class="mb-4"><span class="font-bold mr-3">Director:</span><span>${film.director}</span></p>
     <p class="mb-4"><span class="font-bold mr-3">Producer:</span><span>${film.producer}</span></p>
     <p class="mb-4"><span class="font-bold mr-3">Director:</span><span>${film.director}</span></p>
 </div>
`;