const photoDeck = document.getElementById("photo-deck");
const overlay = document.getElementById("overlay");
const overlayCloseButton = document.querySelector(".btn")

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

        for (let i= 0; i < polaroids.length; i++) {
            let currentPhoto = photoGallery[i]; 
            polaroids[i].addEventListener("click", function () {
            overlay.innerHTML = `<button class="btn btn-danger">Chiudimi</button>
                                 <img src="${currentPhoto.url}" alt="${currentPhoto.title}">
                                 <p class="text-white m-0">${currentPhoto.date}</p>
                                 <h3 class="text-white">${currentPhoto.title}</h3>`
            console.log(currentPhoto.id);
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