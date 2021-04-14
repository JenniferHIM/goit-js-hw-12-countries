import templateCard from '../templates/template-card.hbs';
import templateList from '../templates/template-list.hbs';
import refs from './refs.js';
import errorNotice from './result.js';

export default function render(country) {
  const notFoundPage = country.status === 404;

if (notFoundPage) {
    refs.countryList.innerHTML = '';
     errorNotice();
  return;
}

if (country.length > 10) {
  errorNotice();
  refs.countryList.innerHTML = '';
  return;
}

if (country.length >= 2 && country.length <= 10) {
  const markupList = templateList(country);
  refs.countryList.innerHTML = markupList;
  return;
}
const markupCard = templateCard(country);
refs.countryList.innerHTML = markupCard;
}

 