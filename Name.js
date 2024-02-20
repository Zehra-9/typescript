"use strict";
let personname = "Farzan Abbas";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
let firstletter = personname.charAt(0).toUpperCase();
let restletter = personname.slice(1).toLowerCase();
let titleCase = firstletter + restletter;
console.log(titleCase);
