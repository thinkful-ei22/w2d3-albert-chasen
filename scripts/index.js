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


// api.getItems(function(data) {
//   console.log(data);
// });

//console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });



api.getItems((items) => {
  console.log(items);

  items.forEach( function(item){
    store.addItem(item) ;
  });
  // const item = items[0];

  const item = store.items[0];
  console.log(store);
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);



  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });


});