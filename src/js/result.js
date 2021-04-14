import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
// import render from './render.js'

    export default function errorNotice() {
      error({
      text: 'Too many matches found. Please enter a more spesific query!',
      delay: '2000',
      maxTextHeight: null,
    });
  }