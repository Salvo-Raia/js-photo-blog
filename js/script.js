const photoDeck = document.getElementById("photo-deck");
const overlay = document.getElementById("overlay");
const overlayContents = document.getElementById("overlay-contents")
const overlayCloseButton = overlay.querySelector(".btn")

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((response) => {
        let generateCard = "";
        const photoGallery = response.data 
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
            </div>` 
        })
        photoDeck.innerHTML = generateCard; 
        const polaroids = document.querySelectorAll(".polaroid"); 
        const pin = document.querySelectorAll(".pin")
        console.log(polaroids);
        console.log(pin);
        
        for (let i= 0; i < polaroids.length; i++) {
            let currentPhoto = photoGallery[i]; 
            let currentPin = pin[i];
            polaroids[i].addEventListener("mouseenter", function () {
                console.log("stai passando su di me", currentPin);
                currentPin.classList.toggle("d-none")
            })
            polaroids[i].addEventListener("mouseleave", function () {
                console.log("stai passando su di me", currentPin);
                currentPin.classList.toggle("d-none")
            })
            polaroids[i].addEventListener("click", function () {
            overlay.classList.toggle("d-none");
            overlayContents.innerHTML = `
                                 <img src="${currentPhoto.url}" alt="${currentPhoto.title}">
                                 <p class="text-white m-0">${currentPhoto.date}</p>
                                 <h3 class="text-white m-0">${currentPhoto.title}</h3>`;
         }) 
        }
    })

    /* Eventi di chiusura overlay */
    overlayCloseButton.addEventListener("click", function () {
    overlay.classList.toggle("d-none")
        })  

    document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        overlay.classList.add("d-none");
    }})