'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: returns input value unchanged
 * @param: {Any Value} value: any value available in Javascript.
 * @return: {Any Value} value: returns given value unchanged. 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: returns string of type of given value
 * @param: {Any Value} value: any value available in Javascript.
 * @return: {Any Value} value: returns string of type of given value
 */
 
 function typeOf(value){
    if(value === null ) return 'null';
 if(value instanceof Date) return 'date';
 if(Array.isArray(value) === true) return 'array';
 else return typeof value;
}

module.exports.typeOf = typeOf;

/** 
 * first: Returns a new array with first <number> of elements in <array>. If it 
 * is not given an array, or if it is given a negative number, it returns an 
 * empty array. If it is given a number higher than the length of the array, it 
 * returns the entire array. If number is not a number or not given, it returns 
 * the first element of the array. 
 * @param: {Array} array: an array
 * @param: {Number} num: a number
 * @return: {Array} array: a new array with the first <number> of elements in
 * <array>.
 */

function first(array, num){
    var result = [];
    if(Array.isArray(array) !== true || num < 0){
        return result;
    } else if(num === undefined || typeof num !== 'number'){
        return array[0];
    } else if (num > array.length) {
        return array;
    } else {
        for(var i = 0; i < num; i++){
            result.push(array[i]);
        }
    }
    return result;
}

module.exports.first = first;

/**
 * last: returns a new array with last <number> of elements in <array>. If it 
 * is not given an array, or if it is given a negative number, it returns an 
 * empty array. If it is given a number higher than the length of the array, it 
 * returns the entire array. If number is not a number or not given, it returns 
 * the last element of the array. 
 * @param: {Array} array: an array
 * @param: {Number} num: a number
 * @return: {Array} array: a new array with the last <number> of elements in 
 * <array>.
 */

function last (array, num){
    var result = [];
    if(Array.isArray(array) !== true || num < 0){
        return result;
    } else if(num === undefined || typeof num !== 'number'){
        return array[array.length - 1];
    } else if (num > array.length - 1) {
        return array;
    } else {
        for(var i = array.length - 1; i >= num -1; i--){
            result.unshift(array[i]);
        }
    }
    console.log(result);
    return result;
}

module.exports.last = last;

/**
 * indexOf: returns the index of the first occurance of <value> in <array>.
 * Returns -1 if the <value> is not in the <array>.
 * @param: {Array} array: an array
 * @param: {Value} value: any value
 * @return: {Number} index: returns the index of the first occurance of <value>
 * in <array>, or -1 if <value> is not in <array>.
 */

function indexOf(array, value){
    var result = [];
    for(var i = 0; i < array.length; i++){
       if(array[i] === value){
           result.push(i);
       } else if (!array.includes(value)){
           return -1;
       }
    } return result[0];
}

module.exports.indexOf = indexOf;

/**
 * contains: returns true if <array> contains <value>; returns false otherwise.
 * @param: {Array} array: an array
 * @param: {Value} value: any value
 * @return: {Boolean} boolean: returns true if <value> is in <array> and false
 * otherwise.
 */
 
function contains(array, value){
    return(array.indexOf(value) !== -1 ? true : false);
}

module.exports.contains = contains;

/**
 * each: if given <collection> is an array, each calls function <func> once for each
 * element in the <collection> with the arguments <element>, <index>, and
 * <collection>. If given <collection> is an object, each calls function <func> 
 * once for each property in the <collection> with the arguments <value>, <key>,
 * and <collection>.
 * @param: {Collection} collection: an array or object
 * @param: {Func} function: a function
 * @return: none
 */

function each(collection, func){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
           var element = collection[i];
        func(element, i, collection);
        }
    } else {
        for(var key in collection){
            var value = collection[key];
            func(value, key, collection);
        }
    }
}

module.exports.each = each;

/**
 * unique: Returns an array of unique elements.
 * @param: {Array} array: an array
 * @return: returns a new array of elements from <array> with duplicates
 * removed
 */
 
function unique(array){
    var result = [];
    for(var i = 0; i < array.length; i++){
     var element = array[indexOf(array, array[i])]; 
     if(result.includes(element)){
     } else {
         result.push(element);
     }
    } return result;
}

module.exports.unique = unique;

/**
 * filter: Returns a new array of elements for which calling the function <func>
 * returned true.
 * @param: {Array} array: an array
 * @param: {Function} func: a function
 * @return: Returns a new array of elements for which calling the function <func>
 * returned true.
 */

function filter(array, func){
    var result = [];
    for(var i = 0; i < array.length; i++){
        var element = array[i];
       if(func(element, i, array) === true){
           result.push(element);
       }
    } return result;
}

module.exports.filter = filter;


/**
 * reject: Returns a new array of elements for which calling function <func>
 * returned false;
 *@param: {Array} array: an array
 * @param: {Function} func: a function
 * @return: Returns a new array of elements for which calling the function <func>
 * returned false.
 */
 
 function reject(array, func){
    var result = filter(array, func);
    var rejectResult = [];
    for(var i = 0; i < array.length; i++){
        if(result.includes(array[i])){
        } else{
            rejectResult.push(array[i]);
        }
    }
    return rejectResult; 
}

module.exports.reject = reject;

/**
 * partition: Returns a new array that contains one subarray containing the 
 * elements that returned true when passed to the the function, and a second 
 * subarray containing the elements that returned false when passed to the 
 * function. 
 * @param: {Array} array: an array
 * @param: {Function} func: a function
 * @return: Returns a new array that contains one subarray containing the 
 * elements that returned true when passed to the the function, and a second 
 * subarray containing the elements that returned false when passed to the 
 * function. 
 */
 
function partition(array, func){
    var result = [];
    var truthy = [];
    var falsey = [];

    for(var i = 0; i < array.length; i++){
        var element = array[i];
       if(func(element, i, array) === true){
           truthy.push(element);
       } else {
           falsey.push(element);
       }
    } result.push(truthy, falsey);
    return result;
}

module.exports.partition = partition;

/**
 * map: If <collection> is an array, map passes each element, its index, and 
 * collection to its <function> and saves the return value to a new array.
 * If <collection> is an object, map passes each value, its key, and the 
 * collection to its <function> and saves the return value in a new array. It
 * returns this new array.
 * @param: {Collection} collection: an array or object
 * @param: {Function} func: a function
 * @Return: Returns a new array that holds the result of each function call.
 */

function map(collection, func){
    var result = [];
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            var arrResult = func(collection[i], i, collection);
            result.push(arrResult);
        }
    }else{
        for(var key in collection){
            var objResult = func(collection[key], key, collection);
            result.push(objResult);
        }
    } return result;
}

module.exports.map = map;

/**
 * pluck: Takes an array and a property and returns a new array of values 
 * matched with <property> in <array>
 * @param: {Array} array: an array of objects
 * @param: {Property} property: a key that identifies the values to be returned
 * in a new array
 * @return: returns a new array of values that <property> was paired with as
 * their key on the <array> of objects. 
 */

function pluck (array, property){
var arr = map(array, function(element, key, array){
    return element[property];
});
return arr;
}

module.exports.pluck = pluck;

/**
 * every: Returns true if the return value after each internal function call is
 * true; otherwise it returns false. 
 * @param: {Collection} collection: an array or object
 * @param: {Function} func: a function
 * @return: Returns true if the return value after each internal function call is
 * true; otherwise it returns false.
 */

function every(collection, func){
var result = [];
if(func === undefined && Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        if(collection[i]){
            result.push(collection[i]);
        }
    }if(result.length === collection.length){
        return true; 
    } else {
        return false;
    }
} else if(func === undefined) {
    for(var key in collection){
        if(collection[key]){
            result.push(collection[key]);
        }
    } if(result.length === collection.keys().length){
        return true;
    } else {
        return false;
    }
    
}
if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
       if(func(collection[i], i, collection) === false){
            result.push(collection[i]);
        }
    }
} else {
    for(var key in collection){
        if(func(collection[key], key, collection) === false){
            result.push(collection[key]);
        }
    }
}
if(result.length === 0){
    return true;
} else {
    return false;
}
  
}

module.exports.every = every;

/**
 * some: Returns false if the return value after each internal function call is
 * false; otherwise it returns true. 
 * @param: {Collection} collection: an array or object
 * @param: {Function} function: a function
 * @return: Returns false if the return value after each internal function call is
 * false; otherwise it returns true.
 */

function some (collection, func){
   var result = [];
   var falsy = [];
if(func === undefined && Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        if(collection[i]){
            result.push(collection[i]);
        } else {
            falsy.push(collection[i]);
        }
    }if(falsy.length < collection.length){
        return true; 
    } else {
        return false;
    }
} else if(func === undefined) {
    for(var key in collection){
        if(collection[key]){
            result.push(collection[key]);
        } else {
            falsy.push(collection[key]);
        }
    } if(falsy.length < collection.keys().length){
        return true;
    } else {
        return false;
    }
}
if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
       if(func(collection[i], i, collection) === true){
            result.push(collection[i]);
        } else {
            falsy.push(collection[i]);
        }
    }
} else {
    for(var key in collection){
        if(func(collection[key], key, collection) === true){
            result.push(collection[key]);
        } else {
            falsy.push(collection[key]);
        }
    }
}
if(result.length > 0){
    return true;
} else {
    return false;
}
}

module.exports.some = some;

/**
 * reduce: Reduces an array to a single value; returns the result of the final 
 * function call after the function has been called once for every element in 
 * the <array>.
 * @param: {Array} array: an array
 * @param: {Function} function: a function that takes result of the previous
 * function call, each element, and its index
 * @param: {Seed} seed: A value that stands in for the previous result during
 * the first function call. If there is no seed, the first value in the array
 * is used instead. 
 * @return: returns the result of the final function call 
 */

function reduce(array, func, seed){
    if (seed !== undefined){
    for(var j = 0; j < array.length; j++){
        seed = func(seed, array[j], j);
    }
  } else if(seed === undefined){
      seed = array[0];
      for(var i = 1; i < array.length; i++){
        seed = func(seed, array[i], i);
      }
  } 
    return seed;
}

module.exports.reduce = reduce;

/**
 * extend: Copies properties the the first object given to it as an argument from
 * any following object properties
 * @param: {Object} <obj1>: an object
 * @param: {Object} <...obj2>: an object or multiple objects
 * @return: returns the first object with new values added to it from the
 * following objects
 */

function extend(obj1, ...obj2){
    for(var i = 0; i < obj2.length; i++){
        for(var key in obj2[i]){
            obj1[key] = obj2[i][key]; 
        }
    } return obj1;
}

module.exports.extend = extend;