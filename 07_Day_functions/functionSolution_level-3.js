// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
//  It doesn’t take any parameter but it takes two inputs using prompt(). One of the input
//   is the number of characters and the second input is the number of ids which are supposed 
//   to be generated.

    // function userIdGeneratedByUser(){
    //     let noOfChar = prompt('No Of Characters : ')
    //     let noOfId = prompt('No Of Id\'s')
    //     let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    //         let userId = ''
    //         for (i=1; i <= noOfId; i++){
    //              userId = ''
    //         for ( j = 1; j <= noOfChar; j++){
    //             let randomNumber = Math.floor(Math.random()*string.length)
    //             let char = string.charAt(randomNumber)
    //             userId += char
    //         }
    //         console.log(userId);
    //     } 
    // }
    // userIdGeneratedByUser()

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

//    function rgbColorGenerator(){

//        let r = Math.floor(Math.random()*255)
//        let g = Math.floor(Math.random()*255)
//        let b = Math.floor(Math.random()*255)
//        console.log(`%c random rgb color : rgb(${r},${g},${b})`,`color : rgb(${r},${g},${b}) `)
//    }
//    rgbColorGenerator()


// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

    // function componentToHex(c) {
    //     var hex = c.toString(16);
    //     return hex.length == 1 ? "0" + hex : hex;
    //   }
      
    //   function rgbToHex(r, g, b) {
    //     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    //   }
      
    //   console.log(rgbToHex(0, 51, 255) ); 

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

    // function shuffleArray(arr){
    //     let sortedArray = arr.slice().sort()
    //     for(i = 0; i <= arr.length-1; i++){
    //         let random =  Math.floor(Math.random()*arr.length)
    //         let temp = sortedArray[i]
    //         sortedArray[i] = sortedArray[random]
    //         sortedArray[random] = temp
    //     }
    //     console.log(sortedArray);
    // }
    // shuffleArray([3,6,1,3,6,8,9])

// 9. Call your function factorial, it takes a whole number as a parameter and
//  it return a factorial of the number

    // function factorial(n){
    //     if (n == 0){
    //         return 1
    //     }
    //     else return n * factorial(n -1 )
    // }
    // const result = factorial(4)
    // console.log(result)

