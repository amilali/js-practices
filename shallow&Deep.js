// Shallow copy
// copies references of object not actual value of object.
// [], {}, () --> these three are object in js which follows shallow copy

let amil =  [1,2,3];

let ali = new Array();

ali = amil; // --> it copies reference not actual object value

ali[0] = "Amil";

console.log(amil); //[ 'Amil', 2, 3 ] ---> shallow copy


// Deep Copy
// it copies actual value, deepcopy apply only on primitives not objects.
// it is done with primitives like : Strings, booleans , number etc.

let amil1 = "Amil";

let amil2 = amil1;
amil2 = 65; //65  --> deep copy
console.log(amil2);
