// DOM Elements // 
const photoDeck = document.getElementById("photo-deck");
const overlay = document.getElementById("overlay");
const overlayContents = document.getElementById("overlay-contents");
const pickPhotoAudio = document.getElementById("paper-lift");
const leavePhotoAudio = document.getElementById("paper-leave");
const hoverSound = document.getElementById("hover-sound");
let activePolaroid = null; 

// API and cards generator // 
axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((response) => {
        let generateCard = "";
        const photoGallery = response.data; 
        photoGallery.forEach((photo) => {
            generateCard += `
            <div class="col">
                <div class="polaroid">
                    <img src="./img/pin.svg" class="pin" alt="pin">
                    <img src="${photo.url}" class="photo img-fluid" alt="${photo.title}">
                <div class="photo-caption my-2">
                    <p class="m-0">${photo.date}</p>
                    <h5>${photo.title}</h5>
                </div>
                </div>
            </div>`; 
        })

        photoDeck.innerHTML = generateCard; 
        const polaroids = document.querySelectorAll(".polaroid"); 
        const pin = document.querySelectorAll(".pin");
        
        for (let i= 0; i < polaroids.length; i++) {
            let currentPhoto = photoGallery[i]; 
            let currentPin = pin[i];
            polaroids[i].addEventListener("mouseenter", function () {
                mouseEnter(polaroids[i], currentPin);
            })
            polaroids[i].addEventListener("mouseleave", function () {
                mouseLeave(polaroids[i], currentPin);
            })
            polaroids[i].addEventListener("click", function () {
                polaroidClick(polaroids[i], currentPhoto);
         }) 
        }
    })
.catch((error) => {
    photoDeck.className = ("text-center");
    photoDeck.innerHTML = `
            <div class="alert alert-danger border border-danger">
            <p class="fs-3 m-0">😯 Impossibile caricare i contenuti: ${error} ❌</p>
            </div>`; 
})
