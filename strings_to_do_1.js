// Remove blanks - Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function remove_blanks(str1) {
    let str2 = str1.replaceAll(" ", "");
    return str2;
}
let str1 = " Pl ayTha tF u nkyM usi c "
console.log(remove_blanks(str1))

// Get digits - Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function get_digits(str3){
    let str4 = str3.replace(/\D/g, "");
    return str4;
}
let str3 = "0s1a3y5w7h9a2t4?6!8?0";
console.log(get_digits(str3));

// Acronyms - Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str5){
    var strArr5 = str5.split(" ");
    var str6 = "";
    for (var ind = 0; ind < strArr5.length; ind++) {
        if (strArr5[ind] == false) {
            continue;
        } else {
            str6 += strArr5[ind][0].toUpperCase();
        }
    }
    return str6;
}
var str5 =  " there's no free lunch - gotta pay yer way. ";
console.log(acronyms(str5));

// Zip Array into map - Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.


var data = {},
    arr1 = ["abc", 3, "yo"] 
    arr2 = [42, "wassup", true]
    
arr1.forEach(function (k, i) {
    this[k] = arr2[i];
}, data);

console.log(data);

