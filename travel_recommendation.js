// Datos simulados
const travelData = {
    destinations: [
        {
            name: "Sydney, Australia",
            imageUrl: "sydneyAustralia.jpg",
            description: "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
        },
        {
            name: "Melbourne, Australia",
            imageUrl: "MelbourneAustralia.jpg",
            description: "A cultural hub famous for its art, food, and diverse neighborhoods."
        },
        {
            name: "Tokyo, Japan",
            imageUrl: "TokyoJapan.jpg",
            description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
        },
        {
            name: "Kyoto, Japan",
            imageUrl: "KyotoJapan.jpg",
            description: "Known for its historic temples, gardens, and traditional tea houses."
        },
        {
            name: "Rio de Janeiro, Brazil",
            imageUrl: "Rio de JaneiroBrazil.jpg",
            description: "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
        },
        {
            name: "SÃ£o Paulo, Brazil",
            imageUrl: "SÃ£o PauloBrazil.jpg",
            description: "The financial hub with diverse culture, arts, and a vibrant nightlife."
        },
        {
            id: 1,
            name: "Angkor Wat, Cambodia",
            imageUrl: "Angkor WatCambodia.jpg",
            description: "A UNESCO World Heritage site and the largest religious monument in the world."
        },
        {
            id: 2,
            name: "Taj Mahal, India",
            imageUrl: "Taj MahalIndia.jpeg",
            description: "An iconic symbol of love and a masterpiece of Mughal architecture."
        },
        {
            id: 1,
            name: "Bora Bora, French Polynesia",
            imageUrl: "Bora BoraFrench Polynesia.jpg",
            description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
        },
        {
            id: 2,
            name: "Copacabana Beach, Brazil",
            imageUrl: "Copacabana BeachBrazil.jpg",
            description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
        },
        {
            name: "Sydney, Australia",
            imageUrl: "sydneyAustralia.jpg",
            description: "Una ciudad vibrante conocida por sus íconos como la Ópera de Sídney y el Puente de la Bahía."
        },
        {
            name: "Tokyo, Japan",
            imageUrl: "TokyoJapan.jpg",
            description: "Una metrópolis que mezcla tradición y modernidad, famosa por sus cerezos en flor."
        },
        {
            name: "Kyoto, Japan",
            imageUrl: "KyotoJapan.jpg",
            description: "Famoso por sus templos históricos, jardines y casas de té tradicionales."
        },
        {
            name: "Bora Bora, French Polynesia",
            imageUrl: "Bora BoraFrench Polynesia.jpg",
            description: "Una isla conocida por sus aguas turquesas y bungalows de lujo sobre el agua."
        }
    ]
};

// Obtener referencias a los elementos del DOM
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const presentationContainer = document.getElementById("presentation-container");

// Función para buscar y mostrar resultados
function searchDestination() {
    const query = searchInput.value.toLowerCase().trim();

    // Limpiar resultados previos
    presentationContainer.innerHTML = "";

    if (!query) {
        alert("Por favor, ingresa un destino o palabra clave.");
        return;
    }

    // Filtrar destinos que coincidan con la búsqueda (en nombre o descripción)
    const results = travelData.destinations.filter(destination => {
        const nameMatch = destination.name.toLowerCase().includes(query);
        const descriptionMatch = destination.description.toLowerCase().includes(query);
        return nameMatch || descriptionMatch;
    });

    if (results.length === 0) {
        alert("No se encontraron resultados para tu búsqueda.");
        return;
    }

    // Crear tarjeta para cada resultado
    results.forEach(result => {
        const card = document.createElement("div");
        card.classList.add("presentation-card");

        card.innerHTML = `
        <img src="${result.imageUrl}" alt="${result.name}">
        <div class="card-content">
          <h3 class="card-title">${result.name}</h3>
          <p class="card-description">${result.description}</p>
        </div>
      `;

        presentationContainer.appendChild(card);
    });
}

// Función para limpiar los resultados
function clearResults() {
    searchInput.value = ""; // Limpiar el campo de entrada
    presentationContainer.innerHTML = ""; // Limpiar las tarjetas de presentación
}

// Asignar eventos a los botones
searchButton.addEventListener("click", searchDestination);
clearButton.addEventListener("click", clearResults);
