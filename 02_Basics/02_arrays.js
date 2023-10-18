const mv_superHeros = ["thor","ironman", "spiderman"]
const dc_superheros = ["superman", "batman","flash"]  
// mv_superHeros.push(dc_superheros) // this creates a problem that it will create array into array

// console.log(dc_superheros);
// console.log(mv_superHeros); // o/p is  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(mv_superHeros[3][1]);

// // you can use concat() instead of push(). concat() always retuen new array 
// const all_heros = mv_superHeros.concat(dc_superheros) 
// console.log(all_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// More easy way to add 2 arrays
//  spread
const all_new_heros = [... mv_superHeros,...dc_superheros]
// console.log(all_new_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]


//  flat := it resolves array into array into array 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_array = another_array.flat(3) //it takes depth or can give (infinite)
// console.log(real_array);
// const real_array = another_array.flat(Infinity) 
// console.log(real_array);

// isArray() // with this we can ask is this is an array or not 

console.log(Array.isArray("sakshi")); // it gives true or false 
// it can convert everything into array 
console.log(Array.from("sakshi"));
console.log(Array.from({name: "sakshi"})); //intresting case, it gives empty array we have to gives and value for this

let score1= 100
let score2= 200
let score3= 300

// retuns new array from the set of elements 
console.log(Array.of(score1,score2,score3));

