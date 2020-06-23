import './styles.css';
import menuTemplate from './menu.json';
import itemsTemplate from './templates/galery-items.hbs';

const markup = itemsTemplate(menuTemplate);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

/* -------------------------------------------------- */

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switchInput: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const defaultTheme = Theme.LIGHT;

switch (localStorage.getItem('theme')) {
  case null:
    localStorage.setItem('theme', defaultTheme);
    applyTheme(defaultTheme);

    break;

  case Theme.LIGHT:
    applyTheme(Theme.LIGHT);

    break;

  case Theme.DARK:
    refs.switchInput.setAttribute('checked', 'checked');
    applyTheme(Theme.DARK);

    break;
}

refs.switchInput.addEventListener('click', handleThemeChange);

function handleThemeChange() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.DARK);
    applyTheme(localStorage.getItem('theme'));
    return;
  }

  localStorage.setItem('theme', Theme.LIGHT);
  applyTheme(localStorage.getItem('theme'));
}

function applyTheme(theme) {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);

  refs.body.classList.add(theme);
}
