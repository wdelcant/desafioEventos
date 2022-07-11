
// Funciones de orden superior
const menus = [{ // Lista de menú de opciones del día c/ entrada piscina 
    id: 1,
    name: 'Desayuno',
    price: 3500
    },{
    id: 2,
    name: 'Almuerzo',
    price: 8000
    },{ 
    id: 3,
    name: 'Once',
    price: 3500
    },
];

function menuComida(menus) {

    const nombreComidas = parseInt(prompt('Que deseas \n 1. Desayuno \n 2. Almuerzo \n 3. Once'));
    const comidasEncontrado = menus.find((comida) => comida.id === nombreComidas);
    if (comidasEncontrado) {
        alert(`El ${comidasEncontrado.name}, tiene un precio de: $${comidasEncontrado.price} por persona`);
            console.log(`El ${comidasEncontrado.name} tiene un precio de: $${comidasEncontrado.price} por persona`);
            console.log(comidasEncontrado);
    }
    else if (comidasEncontrado === undefined) {
        alert('No se encontró la comida');
    }
    showMenu();
    
}
