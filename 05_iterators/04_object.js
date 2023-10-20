// for in loop


const myObject = {
    js :'javascript',
    java :' java',
    swift :'swift'
}
for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for Array

const programmingArray1 = ["js","c++", "java", "python" ]
 for (const key in programmingArray1){
    // console.log(key);
 }

//  find value from keys

const programmingArray = ["js","c++", "java", "python" ]
 for (const key in programmingArray ){
    // console.log(programmingArray[key]);
 }
//   here map is not iteratable  it gives error 
 const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('USA', "America")
map.set('Fr',"France")

for (const key in map){
    // console.log(key);
}
const map1 = [1,2,3,4,5,3,5]
for (const key in map1){
    console.log(map1[key]);
}