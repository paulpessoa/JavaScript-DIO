let object = { 
    string: 'string',
    number: 1,
    Boolean: true,
    array: ['array'],
    objectInterno: { objectInterno: 'Objeto Interno'}
}

console.log(object);
console.log(object.Boolean);
console.log(object.objectInterno.objectInterno);




var string = object.string;
console.log(string);


var arrayInterno = object.array;
console.log(arrayInterno);



var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, object);