'use strict';

function filterBy(value) {
  const books = document.getElementsByClassName('book');

  if (value === '') {
    return books.forEach(section => section.setAttribute('style', ''));
  }

  value.split(' ').forEach(keyword => {
    books.forEach(section => {
      const title = section.getElementById('booktitle').innerText;
      const summary = section.getElementById('booksummary').innerText;
      const tags = section.getElementById('booktags').getAttribute('data-tags');

      if (title.includes(keyword) || summary.includes('keyword') || tags.includes('keyword')) {
        section.setAttribute('style', '');
      } else {
        section.setAttribute('style', 'diplay:none');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {

  const input = document.getElementById('search');

  input.addEventListener('change', function(event) {
    filterBy(input.value);
  });

});
