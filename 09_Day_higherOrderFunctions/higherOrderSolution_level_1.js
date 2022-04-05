const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

// 7. Use map to create an array of countries length from countries array.

    // let lengthArr = countries.map(country => country.length)
    // console.log(lengthArr);

// 10.  Use map to map the products array to its corresponding prices.

    // let productArr = products.map(product => console.log(`${product['product']} = ${product['price']}Rs`))

// 14. Use filter to filter out country start with 'E'

    // let firstE = countries.filter(country => country.startsWith('E'))
    // console.log(firstE);

// 15. Use filter to filter out only prices with values.

    // let pricesWithValues = products.filter(product => product.price !== '')
    // console.log(pricesWithValues);
    
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an
//  array only with string items.

    // let array = [1,3,'5',true,'john', ]
    // function getStringLists(arr){
    //     let stringArr = arr.filter(element => typeof element == 'string')
    //     console.log(stringArr);
    // }
    // getStringLists(array)

// 17. Use reduce to sum all the numbers in the numbers array.

    // let sum = numbers.reduce((acc,cur) => acc + cur , 0)
    // console.log(sum);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden,
//  Denmark, Norway, and IceLand are north European countries

    // let string = countries.reduce((acc, cur) =>{
    //     if (cur == countries[countries.length-1] ){
    //         return acc + `and ${cur} are north European countries.`
    //     }
    //     else return acc + cur + ', '
    // },'' )
    // console.log(string);

// 20. Use some to check if some names' length greater than seven in names array

    // let some = names.some(name => name.length > 7)
    // console.log(some);

// 21. Use find to find the first country containing only six letters in the countries array

    // let find = countries.find(country => country.length == 6)
    // console.log(find);

