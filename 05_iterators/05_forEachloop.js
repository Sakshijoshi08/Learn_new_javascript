// forEach : it take call back function
// call back function do not have name 

const programmingArray = ["js","c++", "java", "python" ]

programmingArray.forEach(function (item) {
    // console.log(item);
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrow function 

programmingArray.forEach((item) => {
    // console.log(item);
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function printMe(item){
    // console.log(item);
}
programmingArray.forEach(printMe)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// other parameters of forEach Loop

programmingArray.forEach((item, index,arr) => {
    // console.log(item , index, arr);
})
const myCoding =[
    {
        languageName : "javascript",
        languageFileName :"js",

    },
    {
        languageName : "java",
        languageFileName :"java",
        
    },
    {
        languageName : "python",
        languageFileName :"py",
        
    }
]
myCoding.forEach((item)=>{
console.log(item);
console.log(item.languageFileName);
console.log(item.languageName);
})




