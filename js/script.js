const photoDeck = document.getElementById("photo-deck");
const overlay = document.getElementById("overlay");
const overlayCloseButton = document.querySelector(".btn")

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((response) => {
        let generateCard = "";
        const photoGallery = response.data 
        photoGallery.forEach((photo, i) => {
            generateCard += `
            <div class="col">
                <div class="polaroid" data-photoindex="${i}">
                    <img src="./img/pin.svg" class="pin" alt="pin">
                    <img src="${photo.url}" class="photo img-fluid" alt="${photo.title}">
                <div class="photo-caption my-2">
                    <p class="m-0">${photo.date}</p>
                    <h5>${photo.title}</h5>
                </div>
                </div>
            </div>` 
        })
        photoDeck.innerHTML = generateCard; 
        const polaroids = document.querySelectorAll(".polaroid"); 
        console.log("Ecco il nodo", polaroids); // Stampo il nodo //
        for (polaroid of polaroids) {
            console.log(polaroid.dataset); // Stampo il singolo elemento del nodo con l'index//
            polaroid.addEventListener("click", function () {
            console.log("Hai cliccato foto", this.dataset.photoindex);
            overlay.classList.remove("d-none");
         }) 
        }
    })

    /* Eventi di chiusura overlay */ 
    overlayCloseButton.addEventListener("click", function () {
        overlay.classList.add("d-none")
        })  
        
    document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        overlay.classList.add("d-none");
    }})