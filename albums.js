console.log("Hello, world from album.js");

const bestAlbumsOfAllTime = `
{
    "albums": [
        { "title":"Dookie", "artist":"Green Day", "year": 1994, "cover":"https://www.geek.no/noroff/albums/Green_Day_-_Dookie_cover.jpg" },
        { "title":"London Calling", "artist":"The Clash", "year": 1979, "cover":"https://www.geek.no/noroff/albums/TheClashLondonCallingalbumcover.jpg" },
        { "title":"The Number of the Beast", "artist":"Iron Maiden", "year": 1982, "cover":"https://www.geek.no/noroff/albums/IronMaiden_NumberOfBeast.jpg" },
        { "title":"Nevermind", "artist":"Nirvana", "year": 1991, "cover":"https://www.geek.no/noroff/albums/NirvanaNevermindalbumcover.jpg" },
        { "title":"The Final Cut", "artist":"Pink Floyd", "year": 1983, "cover":"https://www.geek.no/noroff/albums/FloydFC-Cover01.jpg" },
        { "title":"Appetite For Destruction", "artist":"Guns N' Roses", "year": 1987, "cover":"https://www.geek.no/noroff/albums/GunsnRosesAppetiteforDestructionalbumcover.jpg" },
        { "title":"Legend", "artist":"Bob Marley and the Wailers", "year": 1984, "cover":"https://www.geek.no/noroff/albums/BobMarley-Legend.jpg" },
        { "title":"Tattoo You", "artist":"The Rolling Stones", "year": 1981, "cover":"https://www.geek.no/noroff/albums/TattooYou81.jpg" },
        { "title":"The Process of Belief", "artist":"Bad Religion", "year": 2002, "cover":"https://www.geek.no/noroff/albums/BadReligionTheProcessOfBelief.jpg" },
        { "title":"The Stone Roses", "artist":"The Stone Roses", "year": 1989, "cover":"https://www.geek.no/noroff/albums/Stoneroses.jpg" }
    ]
}
`;

const albumArray = JSON.parse(bestAlbumsOfAllTime).albums;
console.log(albumArray);

const ouputElement = document.querySelector("ol#albums");
listAlbums(albumArray);
// ouputElement.innerHTML = "";
// for (const album of albumArray) {
//     ouputElement.innerHTML += `<li>${album.title}, ${album.artist}, ${album.year}</li>`;
// }

const btnA = document.querySelector("button#sortByArtist");
btnA.addEventListener('click', () => {
    //console.log("Button A is clicked");
    albumArray.sort(sortMe);
    listAlbums(albumArray);
});

const btnB = document.querySelector("button#sortByYearAsc");
btnB.addEventListener('click', () => {
    //console.log("Button B is clicked");
    albumArray.sort((a, b) => a.year - b.year);
    listAlbums(albumArray);
});

const btnC = document.querySelector("button#sortByYearDesc");
btnC.addEventListener('click', () => {
    //console.log("Button C is clicked");
    albumArray.sort((a, b) => b.year - a.year);
    listAlbums(albumArray);
});

const btnD = document.querySelector("button#originalOrder");
btnD.addEventListener('click', () => {
    console.log("Button D is clicked");
    const orgAlbumArray = JSON.parse(bestAlbumsOfAllTime).albums;
    // Need to re-parse original (alternatively slice the array in the other functions)
    listAlbums(orgAlbumArray);
});

sortMe = (a, b) => {
    var nameA = a.artist.toUpperCase(); // ignore upper and lowercase
    var nameB = b.artist.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

function listAlbums (list) {
    ouputElement.innerHTML = "";
    for (const album of list) {
        ouputElement.innerHTML += `
        <li>
            <img src="${album.cover}" alt="${album.title} by ${album.artist}">
            <h2>${album.title}</h2>
            <p><strong>${album.artist}</strong></p>
            <p>(${album.year})</p>
        </li>`;
    }
}