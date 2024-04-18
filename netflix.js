//Ao rolar o scroll, muda a barra superior
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_black')
    } else {
        nav.classList.remove('nav_black')
    }
})


// Ao passar o mouse sobre a lupa, mostra a caixa de pesquisa
const searchIcon = document.getElementById('search_icon');
const searchInput = document.getElementById('search_input');

let timeoutId;

searchIcon.addEventListener('mouseover', () => {
    searchInput.style.display = 'block';
});

searchIcon.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        searchInput.style.display = 'none';
    }, 500);
});

searchInput.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
});

searchInput.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        searchInput.style.display = 'none';
    }, 500);
});
