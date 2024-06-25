// Resultados
const results = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
];

// Seleccionar los elementos de la interfaz
const widgets = document.querySelector('#widgets');
const result = document.querySelector('#result');


// Funciones
function cargarResultados(resultados) {

    widgets.innerHTML = '';

    resultados.forEach(resultado => {
        const widget = document.createElement('DIV');
        widget.classList.add('widget');
        widget.innerHTML = `
        <div class="widget__concept">
          <img src="${resultado.icon}" alt="icon ${resultado.category}" class="widget__icon">
          <h3 class="widget__heading-${resultado.category}">${resultado.category}</h3>
        </div>

        <p class="widget__score">${resultado.score} <span>/ 100</span></p>
    `
    widgets.appendChild(widget)
    }); 
}

function promedio(resultados) {
    let sum = 0;

    resultados.forEach(resultado => {
        sum += resultado.score
    });

    return Math.round(sum / resultados.length);
}

function cargarResultado(promedio) {
    result.innerHTML = '';

    const resultText = document.createElement('P');
    resultText.classList.add('results__result')
    resultText.innerHTML = `
        ${promedio} <span>of 100</span>
    `;

    result.appendChild(resultText);
}


// Cargar funciones 
// Scores 
cargarResultados(results);
//Promedio
cargarResultado(promedio(results));












