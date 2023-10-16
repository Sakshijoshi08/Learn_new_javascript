const name = " sakshi"
const repoCount = 40 

// console.log(name + repoCount+ 2) // old method 

// string Iterpolation 

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);
// console.log(`hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);

const gameName =  new String('sakshi-pal') // string is an object here 
// console.log(gameName[0]); //s
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase()); // it didnt chnge the original value 
// console.log(gameName.charAt(2)); // k 
// console.log(gameName.indexOf('k')); //2
// const newString = gameName.substring(0,3)
// console.log(newString); 

const anotherValue = gameName.slice(-8,4)
// console.log(anotherValue);

 const newString1 = "    sakshi pal   "

//  console.log(newString1);
//  console.log(newString1.trim());

 const url = " https://sakshi.com/sakshi20pal"

//  console.log(url.replace('sakshi','pal'));  // https://pal.com/sakshi20pal
console.log(url.replace('20','-'));
console.log(url.includes('sakshi')); //true
console.log(gameName.split('-'));// [ 'sakshi', 'pal' ] saperaor 
console.log(gameName.slice(0,2));