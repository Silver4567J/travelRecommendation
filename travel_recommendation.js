// Datos simulados
const travelData = {
    destinations: [
        {
            name: "Sydney, Australia",
            imageUrl: "enter_your_image_for_sydney.jpg",
            description: "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
        },
        {
            name: "Melbourne, Australia",
            imageUrl: "enter_your_image_for_melbourne.jpg",
            description: "A cultural hub famous for its art, food, and diverse neighborhoods."
        },
        {
            name: "Tokyo, Japan",
            imageUrl: "enter_your_image_for_tokyo.jpg",
            description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
        },
        {
            name: "Kyoto, Japan",
            imageUrl: "enter_your_image_for_kyoto.jpg",
            description: "Known for its historic temples, gardens, and traditional tea houses."
        },
        {
            name: "Rio de Janeiro, Brazil",
            imageUrl: "enter_your_image_for_rio.jpg",
            description: "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
        },
        {
            name: "SÃ£o Paulo, Brazil",
            imageUrl: "enter_your_image_for_sao-paulo.jpg",
            description: "The financial hub with diverse culture, arts, and a vibrant nightlife."
        },
        {
            id: 1,
            name: "Angkor Wat, Cambodia",
            imageUrl: "enter_your_image_for_angkor-wat.jpg",
            description: "A UNESCO World Heritage site and the largest religious monument in the world."
        },
        {
            id: 2,
            name: "Taj Mahal, India",
            imageUrl: "enter_your_image_for_taj-mahal.jpg",
            description: "An iconic symbol of love and a masterpiece of Mughal architecture."
        },
        {
            id: 1,
            name: "Bora Bora, French Polynesia",
            imageUrl: "enter_your_image_for_bora-bora.jpg",
            description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
        },
        {
            id: 2,
            name: "Copacabana Beach, Brazil",
            imageUrl: "enter_your_image_for_copacabana.jpg",
            description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
        },
        {
            name: "Sydney, Australia",
            imageUrl: "https://via.placeholder.com/150",
            description: "Una ciudad vibrante conocida por sus íconos como la Ópera de Sídney y el Puente de la Bahía."
        },
        {
            name: "Tokyo, Japan",
            imageUrl: "https://via.placeholder.com/150",
            description: "Una metrópolis que mezcla tradición y modernidad, famosa por sus cerezos en flor."
        },
        {
            name: "Kyoto, Japan",
            imageUrl: "https://via.placeholder.com/150",
            description: "Famoso por sus templos históricos, jardines y casas de té tradicionales."
        },
        {
            name: "Bora Bora, French Polynesia",
            imageUrl: "https://via.placeholder.com/150",
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
