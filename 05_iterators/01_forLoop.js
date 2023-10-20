//  for Loop
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// syntax
// for (let index = 0; index <= array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);  
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ) {
        // console.log("5 is best number.");
        
    }
    // console.log(element);  
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and Inner loop ${i}`);
        // console.log(i +'*' + j + '='+ i*j); // table printing 
    }
}

 const myArray = [100 , 200 , 300 , 400]
    // console.log(myArray.length);
    for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// break : to break the controlflow


// for (let index = 1; index <=20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is = ${index} `);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// continue : The continue statement can include an optional label that allows 
//the program to jump to the next iteration of a labeled loop statement instead of the innermost loop.

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        continue;
    }
    // console.log(`value of i is = ${index} `);
}


