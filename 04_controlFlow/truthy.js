// const userEmail = "s@sakshi.ai"

if(userEmail){
//console.log("got user email");
} else{
    // console.log("don't have user email");
}

// truthy and Falsey value

// Falsey :- false, 0 , -0, BigInt 0n, "", null, undefined,NaN
// Truthy :- "0" , 'false' ," " , [] array , {} object , function(){} empty function 

const userEmail = ""

if (userEmail.length === 0 ) {
    console.log("Array is empty");
}