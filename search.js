'use strict';

function filterBy(value) {
  const books = document.getElementsByClassName('book');

  if (value === '') {
    for (let i = 0; i < books.length; i++) {
      books[i].setAttribute('style', '');
    }
    return;
  }

  value.split(' ').forEach(keyword => {
    let matched = false;
    keyword = keyword.toLowerCase();

    for (let i = 0; i < books.length; i++) {
      const section = books[i];
      const title = section.getElementsByClassName('booktitle')[0].innerText.toLowerCase();
      const summary = section.getElementsByClassName('booksummary')[0].innerText.toLowerCase();
      const tags = section.getElementsByClassName('booktags')[0].getAttribute('data-tags').toLowerCase();

      if (title.includes(keyword) || summary.includes(keyword) || tags.includes(keyword)) {
        section.setAttribute('style', '');
        matched = true;
      } else {
        if (!matched) {
          section.setAttribute('style', 'display:none');
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {

  const input = document.getElementById('search');

  input.addEventListener('change', function(event) {
    filterBy(input.value);
  });

  input.addEventListener('keyup', function(event) {
    filterBy(input.value);
  });

});
