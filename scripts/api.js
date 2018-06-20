'use strict';

/* global shoppingList, store */




// IIFE
// declare a const BASE_URL = constant containing
//  the API will keep all items under this name separate from others.)
const api = (function(name){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/albert-chasen';

  const getItems = function (callback){

    $.getJSON(${BASE_URL}/items, callback);
   //callback('api module works!');
};
const createItems;

  return{
    getItems , BASE_URL
  };


return {
createitems
updateitems
}
}());
