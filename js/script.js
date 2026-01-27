console.log("Js is ready");
const photoDeck = document.getElementById("photo-deck")

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((response) => {
        let generateCard = "";
        const photoGallery = response.data 
        photoGallery.forEach(photo => {
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
    })


