// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which 
// calculates value of a linear equation, solveLinEquation.

    // function solveLinEquation(a, b, c){
    // let solution = false
    //     for(i = 0; i <= -c; i++){
    //         if ( ( -c- (a*i) ) % b == 0){
    //             solution = true
    //             console.log(`x = ${i}, y = ${((-c -( a * i))/b)}`)
    //         }
    //     }
    //     if (solution == false){
    //         console.log( 'no solution ')
    //     }
        
    // }
    // solveLinEquation(2,3,-7)

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation,
//  solveQuadEquation.

    // function solveQuadEquation(a, b, c){
    //     if (c <= 0){
    //         n = -c
    //     }
    //     else n = c
    //     solution = []
    //     console.log(c);
    //     for ( i = -n; i <= n; i++){
    //         let LHS = a*i*i + b*i + c
    //         if (LHS == 0){
    //             solution.push(i)
    //         }
    //     }
    //     console.log(solution);
    // }
    // solveQuadEquation(1, 0, -4)

// 3. Declare a function name printArray. It takes array as a parameter 
// and it prints out each value of the array.

    // function printArray(arr){
    //     for (let x of arr){
    //         console.log(x);
    //     }
    // }
    // printArray([2,'john',['2',3]])
     
// 4. Write a function name showDateTime which shows time in this
//  format: 08/01/2020 04:08 using the Date object.
          
    // function showDateTime(){
    //     let date = new Date()
    //     let hours = date.getHours()
    //     let minutes = date.getMinutes()
    //     hours = hours <= 9 ? '0' + hours : hours
    //     minutes = minutes <= 9 ? '0'+ minutes : minutes
    //     console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}   ${hours}:${minutes}`);
    // }
    // showDateTime()

// 5. 

// 6. Declare a function name reverseArray. It takes array as a parameter and it
//  returns the reverse of the array (don't use method).

    // function reverseArray(arr){
    //     let reverse = []
    //     let length = arr.length
    //    for(i=0; i<=length-1; i++){
    //        reverse.push(arr.pop())
    //    }
    //    console.log(reverse);
    // }
    // reverseArray([1,2,3,4,5])


// 6. Declare a function name reverseArray. It takes array as a parameter and 
// it returns the reverse of the array (don't use method).

    // function reverseArray(arr){
    //     let array = []
    //     let n = arr.length
    //     for ( i = 0; i <= arr.length-1 ; i++){
    //         array[i] = arr[n-1]
    //         n--
    //     }
    //     console.log(array);
    // }
    // reverseArray([1,3,4,6,7])

// 17.  Declare a function name randomHexaNumberGenerator. When this function is called it generates a
//  random hexadecimal number. The function return the hexadecimal number.

    // function randomHexaNumberGenerator(){
    //     let randomHex = Math.random().toString(16).substring(2,8)
    //     let randomColor = '#'+randomHex
    //     console.log(`%c RandomHexColor = ${randomColor}`, `color: ${randomColor}`);
    // }  
    // randomHexaNumberGenerator()

// 18. Declare a function name userIdGenerator. When this function is called it generates 
// seven character id. The function return the id.

    // function userIdGenerator(){
    //     let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    //     let userId = ''
    //     for ( i = 0; i <= 6; i++){
    //         let randomNumber = Math.floor(Math.random()*string.length)
    //         let char = string.charAt(randomNumber)
    //         userId += char
    //     }
    //     console.log(userId);
    // }
    // userIdGenerator()
   
    


