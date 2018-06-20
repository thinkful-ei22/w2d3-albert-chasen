'use strict';

/* global shoppingList, store */




// IIFE
// declare a const BASE_URL = constant containing
//  the API will keep all items under this name separate from others.)
const api = (function(name){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/albert-chasen';

  const getItems = function (callback){
    return $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback
    });

  };

  return{
    getItems, 
    createItem
  };


// return {
// createitems
// updateitems
// }
}());
