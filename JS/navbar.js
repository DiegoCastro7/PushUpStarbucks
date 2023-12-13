let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
let contenido = document.querySelector('.content');

const compressEvent = (navigation, close, open, content) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
    contenido.style.display = content;
};

openHam.addEventListener('click', () => compressEvent("flex", "block", "none", "none"));
closeHam.addEventListener('click', () => compressEvent("none", "none", "block", "flex"));