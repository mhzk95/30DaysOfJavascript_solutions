// 
// 
//
// 
/******* I am a beginner So these are solutions from my point of view ***********/
/******** So if there is any better solutions or if there is any mistake  *******/
/********************               pls let me know                  ****************/
// 
// 
// 
// 
// 

// 1. Declare an empty array

// const emptyArray = []
// console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements


     /******** DON'T COMMENT THIS *********/
const array = ['HTML', 'CSS', 'Javascript', 'React', 'Redux']



// 3. Find the length of your array

// const length = array.length
// console.log('Length of the array : ' + length)



// 4. Get the first item, the middle item and the last item of the array

// const firstItem = array[0]
// console.log('First Item : '+ firstItem)

// const indexOfmiddle = Math.floor(array.length/2)
// const middleItem = array[indexOfmiddle]
// console.log('Middle Item : ' + middleItem)

// const lastItem = array[array.length-1]
// console.log('Last Item : ' + lastItem)



// 5. Declare an array called mixedDataTypes, put different data
//    types in the array and find the length of the array. 
//    The array size should be greater than 5

// const mixedDataTypes = [1, '1', 'one', true, ['hello', 'world'], { 0: 0, 1: 'one'} ]
// console.log('Length of mixedDataTypes : ' + mixedDataTypes.length)



// 6. Declare an array variable name itCompanies and assign initial values
//    Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon


            /******* DON'T COMMENT THIS *********/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']



//  7. Print the array using console.log()

// console.log(itCompanies)



//  8. Print the number of companies in the array

// console.log('No of companies : ' + itCompanies.length)



//  9. Print the first company, middle and last company

// const firstCompany = itCompanies[0]
// console.log('First Company : '+ firstCompany)

     
// const noOfComp  = itCompanies.length
    
// const indexOfmiddleCompany = Math.floor(noOfComp/2)
// const middleCompany = itCompanies[indexOfmiddleCompany]
// console.log('Middle Company : ' + middleCompany)

// const lastCompany = itCompanies[noOfComp-1]
// console.log('Last Company : ' + lastCompany)



//  10. Print out each company
      
     /* print out using for-of */
// for(let x of itCompanies){
//     console.log(x)
// }



//  11. Change each company name to uppercase one by one and print them out

// for(let x of itCompanies){
//     const upperCase = x.toUpperCase()
//     console.log(upperCase)
// }



// 12. Print the array like as a sentence: 
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(itCompanies.toString())



// 13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found

// const company = prompt('Q 13. Enter the Company(case sensitive) : ')
// if ( itCompanies.includes(company) ) {
//     let index = itCompanies.indexOf(company)
//     console.log('Company Found : ' + itCompanies[index]);
// }
// else console.log('Company not found')



// 14. Filter out companies which have more than one 'o' without the filter method
  
           /* I think there is a better solution for this problem */
// console.log('Company with 2 "o" : ');
// for (let x of itCompanies){
//        let split = x.split('')
//     let count = 0;
//     for(let x of split){
//         if(x.includes('o')){
//             count++
//         }
//     }
//     if ( count == 2){
//         console.log( x);
//     }
// }


 
    /**** Both, sort and reverse , are mutable in nature *****/
// 15. Sort the array using sort() method

// const sortItCompanies = itCompanies.sort()
// console.log(sortItCompanies)



// 16. Sort the array using sort() method

// const reverseItCompanies = itCompanies.reverse(itCompanies.sort())
// console.log(reverseItCompanies);



//  17. Slice out the first 3 companies from the array

// const sliceItCompanies = itCompanies.slice(0,3)
// console.log(sliceItCompanies);



//  18. Slice out the last 3 companies from the array

// const sliceLastItCompanies = itCompanies.slice(-3)
// console.log(sliceLastItCompanies);



//  19. Slice out the middle IT company or companies from the array

// if ( itCompanies.length % 2 == 1 ){
//     let middleItem = Math.floor(itCompanies.length/2)
//     console.log(itCompanies[middleItem])

// }
// else if ( itCompanies.length % 2 == 0 ){
//     let middleItem = itCompanies.length/2
//     console.log(itCompanies[middleItem-1] +' '+ itCompanies[middleItem])
// }



       /* splice is mutable */

// 20. Remove the first IT company from the array

// console.log(itCompanies.splice(0,1));



// 21. Remove the middle IT company or companies from the array

// if ( itCompanies.length % 2 == 1 ){
//     let middleItem = Math.floor(itCompanies.length/2)
//     console.log(itCompanies.splice(middleItem,1))

// }
// else if ( itCompanies.length % 2 == 0 ){
//     let middleItem = itCompanies.length/2
//     console.log(itCompanies.splice(middleItem-1, 2))
// }



// 22. Remove the last IT company from the array

// console.log(itCompanies.splice(-1,1))



//  23. Remove all IT companies

// console.log(itCompanies.splice(0,itCompanies.length))
// console.log(itCompanies)












