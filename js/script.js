console.log("Js is ready");
const photoDeck = document.getElementById("photo-deck")


axios.get("https://lanciweb.github.io/demo/api/pictures/")
     .then((response) => {
        const photoGallery = response.data.map(singleObject => {
            return {
                title: singleObject.title,
                date: singleObject.date,
                url: singleObject.url
            }
        })
        photoGallery.forEach(photo => {
            photoDeck.innerHTML += `<div class="polaroid">
                    <img src="./img/pin.svg" class="pin" alt="pin">
                    <img src=${photo.url} class="photo" alt="${photo.title}">
                    <div class="photo-caption">
                        <h5>${photo.title}.</h5>
                        <p>${photo.date}</p>
                    </div>
                </div>`
        })
     })

