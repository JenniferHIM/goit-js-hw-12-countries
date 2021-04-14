import './styles.css';

import refs from './js/refs.js';
import API from './js/fetchCountries.js';
import errorNotice from './js/result.js';
import { debounce } from 'lodash';
import render from './js/render.js';

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(e) {
  e.preventDefault();

  const form = e.target;
  const searchCountry = e.target.value;

API.fetchCountry(searchCountry)
  .then(render)
  .catch(errorNotice)
  .finally(setTimeout(reset, 7000));

   if (!searchCountry) {
  refs.countryList.innerHTML = '';
  return;
   }
  }

  function reset() {
    refs.input.value = "";
  }

