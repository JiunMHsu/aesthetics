
document.addEventListener('DOMContentLoaded', function () {

    // photo switch animation
    let photoId = 1;

    let photoShown = document.getElementById(photoId);
    photoShown.style.display = "flex";

    function changePhoto() {
        photoShown.style.display = "none";
        photoId++;

        photoShown = document.getElementById(photoId);
        photoShown.style.display = "flex";

        photoId = (photoId == 9) ? 0 : photoId;
    }

    setInterval(() => {
        // change displayed photo
        // by setting display attribute
        changePhoto();
    }, 3500)
}) 

