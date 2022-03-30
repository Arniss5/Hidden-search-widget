const button = document.querySelector('.search-icon');
const searchBar = document.querySelector('.input');


button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    searchBar.classList.toggle('open');
    searchBar.focus()
})