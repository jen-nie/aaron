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
/* export function init() {
    const nav = document.querySelector("#mainnav");
    const list = nav.querySelector("ul");
    const button = nav.querySelector("button");
}

// Toggle area-expanded atrribute
button.addEventListener('click', e => {
    if (button.classList.contains('closed')) {
        button.classList.remove('closed');
    } else {
        button.classList.add('closed');
    }
})

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        button.setAttribute('aria-expanded', false);
    }
}) */