// for of 
// loops in array 
// ["","" ,""]
// [{},{},{}]
// syntax
// for (const iterator of object) {
    
// }


const arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
    
}

const greetings = "hello world"
for (greet of greetings){
    // console.log(`each char is ${greet}`)
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps : to find unique value , map is an object to hold key value pair , map is an object, print in same order
//  maps can be iterate by for of loop
const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('USA', "America")
map.set('Fr',"France")

// console.log(map);

for (const key of map){
    // console.log(key);
}

for (const [key,value] of map){
    // console.log(key,':-',value );
}
const myObject ={   // here for of loop can not iterate object it gives error it has other ethod to iterate
    'game' :'NFS',
    'game' : 'spiderman'
}
// for (const [key,value] of myObject){
//     // console.log(key,':-',value );
// }


