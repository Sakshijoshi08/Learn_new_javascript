const coding = ["js", "ruby", "javascript "]

 const newval = coding.forEach((item)=>{
//  console.log(item);
})
// console.log(newval);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// filter : it also takes call back function, here if we r using {} then return keyword is vry important  
const myNums = [1,2,3,4,5,6,7,8,9]

// myNums.filter((item)=>{})
// myNums.filter((item)=>())
// myNums.filter((item)=>)
// +++++++++++++++++++++++++++++++++++++++++++++++++

let newNums1 = myNums.filter((item)=>item > 4)
// console.log(newNums);
// ======================================================================================
// filter is taking call back function and explicite return
const newNum = myNums.filter((item)=>{
   return item > 4
})
// console.log(newNum);
// =======================================================================================
//  using foreach 


const newNums =[]
 myNums.forEach((num)=>{
 if(num > 4){
    newNums.push(num)
 }
 })
//  console.log(newNums);
// ==========================================================================================

const books = [
    {
        title: 'Book One ' ,genre : 'Fiction ' , publish : '1981', edition : 2004
    },
    {
        title: 'Book Two ' ,genre : 'Non-Fiction ' , publish : '1992', edition : 1994
    },
    {
        title: 'Book Three ' ,genre : 'History ' , publish : '1999', edition : 2011
    },
    {
        title: 'Book Four ' ,genre : 'Non-Fiction ' , publish : '1986', edition : 2016
    },
    {
        title: 'Book Five ' ,genre : 'Fiction ' , publish : '2011', edition : 1989
    },
    {
        title: 'Book Six ' ,genre : 'History ' , publish : '1981', edition : 2004
    },
];
//  const userBooks= books.filter((bk)=> bk.genre == "History ")
let userBooks = books.filter((bk)=> { 
    return bk.publish >=1995 && bk.genre == "History "
})
console.log(userBooks);


