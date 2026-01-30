"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = " 42";
let numericLength = response.length; // Using 'as' for forceful type assertion
let bookString = '{"name":"TypeScript Basics"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
//# sourceMappingURL=moreTypes.js.map