'use strict';

function filterBy(value) {
  const books = document.getElementsByClassName('book');

  if (value === '') {
    return books.forEach(section => section.setAttribute('style', ''));
  }

  value.split(' ').forEach(keyword => {
    books.forEach(section => {
      const title = section.getElementsByClassName('booktitle')[0].innerText;
      const summary = section.getElementsByClassName('booksummary')[0].innerText;
      const tags = section.getElementsByClassName('booktags')[0].getAttribute('data-tags');

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
