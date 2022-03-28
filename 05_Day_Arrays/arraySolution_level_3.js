
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


// 1. The following is an array of 10 students ages:
    
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/******** Sort the array and find the min and max age *********/
    
    // const sort = ages.sort()
    // const minAge = sort[0]
    // const maxAge = sort[sort.length-1]
    // console.log(minAge)
    // console.log(maxAge);

/******** Find the median age(one middle item or two middle items divided by two) *********/

    // if (ages.length % 2 == 1){
    //     let length = Math.floor(ages.length/2)
    //     let median = ages[length/2]
    //     console.log(median);
    // }
    // else if ( ages.length % 2 == 0 ){
    //     let length = ages.length/2
    //     let median = ages[length] + ages[length-1]
    //     console.log(median/2);
    // }

/********** Find the average age(all items divided by number of items) *******/ 
    
    // let sum = 0
    // for (let x of ages){
    //     sum += x
    // }
    // let average = sum/ages.length
    // console.log( 'Average of numbers : ' + average);

/************ Find the range of the ages(max minus min) ***********/

    // const sort = ages.sort()
    // const minAge = sort[0]
    // const maxAge = sort[sort.length-1]
    // let range = maxAge-minAge
    // console.log(range);

/************ Compare the value of (min - average) and (max - average), use abs() method 
 *            1.Slice the first ten countries from the countries array ************/

    // let minAvg = Math.abs(minAge - average)
    // let maxAvg = Math.abs(maxAge - average)
    // console.log(minAvg)
    // console.log(maxAvg)

    // console.log(countries.slice(0,10))

// 2. Find the middle country(ies) in the countries array

    // if (countries.length % 2 == 1){
    //     let middleItem = Math.floor(countries.length/2)
    //     console.log(countries[middleItem])
    // }
    // else if ( countries.length % 2 == 0){
    //     let middleItem = countries.length/2
    //     console.log(countries[middleItem]/countries[middleItem-1])
    // }

// 3. Divide the countries array into two equal arrays if it is even.
//  If countries array is not even , one more country for the first half.

    // if (countries.length % 2 == 1){
    //     let middleItem = Math.floor(countries.length/2)
    //     countries.push('India')
    //     console.log();
    //     let firstArray = countries.splice(0,middleItem+1)
    //     let secondArray = countries
    //     console.log(firstArray);
    //     console.log(secondArray);
        
    // }
    // else if ( countries.length % 2 == 0){
    //     let middleItem = countries.length/2
    //     let firstArray = countries.splice[0,middleItem] 
    //     let secondArray = countries
    //     console.log(firstArray);
    //     console.log(secondArray);
    // }
    



