const bigCats = {
    "felidae": [
        { "name": "Tiger", "latin": "Panthera tigris", "location": "Asia", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Tiger"},
        { "name": "Lion", "latin": "Panthera leo", "location": "(Sub-Saharan Africa, Gir Forest in India", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Lion"},
        { "name": "Jaguar", "latin": "Panthera onca", "location": "The Americas", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Jaguar"},
        { "name": "Leopard", "latin": "Panthera pardus", "location": "Asia, Africa", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Leopard"},
        { "name": "Snow leopard", "latin": "Panthera uncia", "location": "Mountains of Central and South Asia", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Snow_leopard"},
        { "name": "Cheetah", "latin": "Acinonyx jubatus", "location": "Sub-Saharan Africa and Iran", "genus": "Acinonyx", "url": "https://en.wikipedia.org/wiki/Cheetah"},
        { "name": "Cougar", "latin": "Puma concolor", "location": "North and South America", "genus": "Puma", "url": "https://en.wikipedia.org/wiki/Cougar"}
    ]
};

console.log(bigCats);

listCats = (list) => {
    const myUL = document.querySelector("#cats");
    myUL.innerHTML = "";
    for (let cat of list){
        myUL.innerHTML += `<li>${cat.name} (${cat.latin})</li>`;
    }
}

listCats(bigCats["felidae"]);

const pantheraBtn = document.querySelector("button#panthera");
pantheraBtn.addEventListener('click', 
    () => listCats(bigCats["felidae"].filter(cat => cat.genus === "Panthera"))
);

const allBtn = document.querySelector("button#all");
allBtn.addEventListener('click', () => listCats(bigCats["felidae"]));
