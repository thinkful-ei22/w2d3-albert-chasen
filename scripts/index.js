'use strict';

/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

// store.items.push();

// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//     console.log('api response: ' , response);
// });

api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});