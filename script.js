document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector(".menu-deroule");
    const navLinks = document.querySelector(".nav-links");

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });
});

//image fond//

// Fonction pour ouvrir la modale avec une liste d'images
function openModal(imageList) {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = ""; // Vide le contenu de la modale
    imageList.forEach(function(imageSrc) {
        var image = document.createElement("img");
        image.src = imageSrc;
        modalContent.appendChild(image);
    });
    modal.style.display = "block";
    document.body.classList.add("blur"); // Ajouter une classe pour flouter le fond
}

// Fonction pour fermer la modale
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.classList.remove("blur"); // Retirer la classe pour enlever le flou
}
