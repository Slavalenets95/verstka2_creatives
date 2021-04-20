import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const hamburger = document.getElementById('hamburger-menu')
const nav = document.getElementById('main-nav')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('display_none')
})
