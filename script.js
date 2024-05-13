<script>
    // Initialise la carte
    var map = L.map('map').setView([51.505, -0.09], 13); // Centre la carte sur une position et définit le niveau de zoom initial

    // Ajoute une couche de tuiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
</script>
