var map = L.map('map').setView([4.769166667, -74.030277778], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.769166667, -74.030277778]).addTo(map);
// Información del lugar (con valores aleatorios)
var lugarInfo = {
    nombre: getRandomValue(["Lugar A", "Lugar B", "Lugar C"]),
    barrio: getRandomValue(["Barrio 1", "Barrio 2", "Barrio 3"]),
    imgRef: "imgRef.jpg"
};
// Evento de pasar el ratón sobre el marcador
marker.on('mouseover', function () {
    mostrarInfo(lugarInfo);
});
// Evento de quitar el ratón del marcador
marker.on('mouseout', function () {
    map.closePopup();
});
function mostrarInfo(info) {
    // Crear el contenido HTML con la información del lugar
    var contenidoPopup = `
        <div>
            <h3>${info.nombre}</h3>
            <p>Barrio: ${info.barrio}</p>
            <img src="${info.imgRef}" alt="Imagen de referencia" style="max-width: 100%;">
        </div>
    `;
    // Crear y mostrar el popup en el marcador
    marker.bindPopup(contenidoPopup).openPopup();
}
function mostrarMarcadores() {
    if (!map.hasLayer(marker)) {
        map.addLayer(marker);
    }
}
function ocultarMarcadores() {
    if (map.hasLayer(marker)) {
        map.removeLayer(marker);
    }
}
// Función para obtener un valor aleatorio de un array
function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
