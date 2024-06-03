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

document.addEventListener("DOMContentLoaded", function() {
    const voirPlusLink = document.getElementById("voir-plus");
    const reduireText = document.querySelector(".reduire");

    voirPlusLink.addEventListener("click", function(event) {
        event.preventDefault();

        const autresPropositions = document.querySelectorAll(".info-box .autre-proposition");
        const autresLignes = document.querySelectorAll(".info-box .thin");

        autresPropositions.forEach(function(paragraph) {
            paragraph.style.display = "block";
        });

        autresLignes.forEach(function(line) {
            if (line.nextElementSibling && line.nextElementSibling.classList.contains('autre-proposition')) {
                line.style.display = "block";
            }
        });

        voirPlusLink.style.display = "none";
        reduireText.style.display = "block"; // Affiche le message de réduction
    });

    reduireText.addEventListener("click", function(event) {
        event.preventDefault();

        const autresPropositions = document.querySelectorAll(".info-box .autre-proposition");
        const autresLignes = document.querySelectorAll(".info-box .thin");

        autresPropositions.forEach(function(paragraph) {
            paragraph.style.display = "none";
        });

        autresLignes.forEach(function(line) {
            if (line.nextElementSibling && line.nextElementSibling.classList.contains('autre-proposition')) {
                line.style.display = "none";
            }
        });

        voirPlusLink.style.display = "block";
        reduireText.style.display = "none"; // Masque le message de réduction
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
            scrollToTopButton.classList.remove('hide');
        } else {
            scrollToTopButton.classList.add('hide');
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

