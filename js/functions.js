    /* Functions and event listeners */
    const overlayCloseButton = overlay.querySelector(".btn");

    function polaroidClick(singlePolaroid, photo) {
    pickPhotoAudio.play();
    activePolaroid = singlePolaroid;
    singlePolaroid.classList.remove("polaroid-is-hover");
    singlePolaroid.classList.add("d-none");
    overlay.classList.remove("d-none");
    overlayContents.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
        <p class="text-white m-0">${photo.date}</p>
        <h3 class="text-white m-0">${photo.title}</h3>
    `;
    }

    function mouseLeave (elementToStopHover, elementIwantBack) {
                elementToStopHover.classList.remove("polaroid-is-hover");
                elementIwantBack.classList.toggle("d-none");
    }

    function mouseEnter (elementToStartHover, elementIWannaHide) {
                hoverSound.play();
                elementToStartHover.classList.add("polaroid-is-hover");
                elementIWannaHide.classList.toggle("d-none");
    }
    
    overlayCloseButton.addEventListener("click", function () {
        leavePhotoAudio.play();
        overlay.classList.toggle("d-none");
        if (activePolaroid) {
            activePolaroid.classList.remove("d-none");
            activePolaroid = null;
    }
        })  

    document.addEventListener("keydown", function(event) {
        leavePhotoAudio.play();
        if (event.key === "Escape") {
        overlay.classList.add("d-none");
        if (activePolaroid) {
            activePolaroid.classList.remove("d-none");
            activePolaroid = null;
    }
    }})