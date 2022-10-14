/* import * as MainNav from './lib/mainnav.js';
window.MainNav = MainNav; */

const button = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

button.addEventListener('click', function() {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
    } else {
        nav.classList.remove('flex');
        nav.classList.add('hidden');
    }
})
