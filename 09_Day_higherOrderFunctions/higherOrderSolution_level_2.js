const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

    // let sum = products.filter(product => product.price !== '')
    //                   .map(product => product.price)
    //                   .reduce((acc,cur) => acc + cur,0)
    // console.log(sum);

// 2. Find the sum of price of products using only reduce reduce(callback))

    // let sum = products.reduce((acc, cur) => 
    //      (cur.price !== '') ?  acc + cur.price : acc 

    // , 0)
    // console.log(sum);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js

    // function categorizeCountries(){
    //     let land = countries.reduce((acc,cur) => 
    //     cur.includes('land') ? [...acc,cur] : acc, [])
    //     console.log(land);
    //     // similarly other countries

    // }
    // categorizeCountries()

// 4. Create a function which return an array of objects, which is the
//  letter and the number of times the letter use to start with a name of a country.
    
    // function letter(){
    //     let letter = countries.reduce((acc,cur) => {
    //       let firstLetter = cur.name[0]
    //       acc[firstLetter] = ((acc[firstLetter] || 0) + 1)
    //       return acc
    //     },[] )
    //     console.log(letter);
    // }
    // letter()
   

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional
//  programming to work on the countries.js array

    // function getFirstTenCountries(countries){
    
    //     let result = countries.slice(0,10).map(cur => cur.name)
    //     console.log(result);
    // }
    // getFirstTenCountries(countries)

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

    // function getLastTenCountries(countries){
    //     let result = countries.slice(-10).map(cur => cur.name)
    //     console.log(result);
    // }
    // getLastTenCountries(countries)

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

    // let result = countries.reduce((acc,cur) => {
    //     let item = cur.name[0]
    //     acc[item] = (acc[item] || 0) + 1
    //     return acc
    // },{});
    // console.log(result);
    // let maxInitial;
    // let max = 0
    // for(let x in result){
    //     if(max < result[x]){
    //         max = result[x]
    //         maxInitial = x
    //     }
    // }
    // console.log(`country starting with letter '${maxInitial}' with ${max} occurances` );

// 




    


          
    
      
      
    

