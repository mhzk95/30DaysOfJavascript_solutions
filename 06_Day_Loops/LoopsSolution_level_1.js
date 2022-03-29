


// 1.Iterate 0 to 10 using for loop, do the same using while and do while loop
    
    /*****using for loop ******/

    // for(i=0; i<=10; i++){
    //     console.log(i)
    // }

    /******while loop *******/

    // let i = 0
    // while(i<=10){
    //     console.log(i);
    //     i++
    // }

    /*******do while loop *******/

    // let i = 0
    // do{
    //  console.log(i)
    //  i++   
    // }
    // while(i <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

    /*****using for loop ******/

    // for(i=10; i>=0; i--){
    //     console.log(i)
    // }

    /******while loop *******/

    // let i = 10
    // while(i>=0){
    //     console.log(i);
    //     i--
    // }

    /*******do while loop *******/

    // let i = 10
    // do{
    //  console.log(i)
    //  i--  
    // }
    // while(i >= 0)

// 3. Iterate 0 to n using for loop

    // const n = 20;
    // for(i=0; i <= n; i++){
    //     console.log(i)
    // }

// 4. Write a loop that makes the following pattern using console.log():

    // let string = ''
    // for(i=0; i<=6; i++){
    //     // console.log('\n');
    //     for(j=0; j<=i; j++){
    //         string += '*'
    //     }
    //     string += '\n'
    // }
    // console.log(string);

// 5. Use loop to print the following pattern:

    // for(i=0; i<=10; i++){
    //     console.log(`${i} * ${i} = ${i*i}`)
    // }

// 6. Using loop print the following pattern

    // console.log('i   i^2   i^3');
    // for(i=0; i<=10; i++){
    //     console.log(`${i}     ${i*i}    ${i*i*i}`)
    // }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

    // for(i=1; i<=100; i++){
    //     if(i%2 == 0){
    //         console.log(i);
    //     }
    // }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

    // for(i=1; i<=100; i++){
    //     if(i%2 == 1){
    //         console.log(i);
    //     }
    // }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
    
    
    // for( i = 2 ; i <= 100; i++ ){
    //     let isPrime = true
    //     for( j = 2 ; j < i; j++ ){
    //         if ( i % j == 0 ){
    //         isPrime = false
    //         break
    //         }
    //     }
    //     if( isPrime ){
    //         console.log(i);
    //     }
    // }
   

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    
    // let sum = 0
    // for ( i = 0 ; i <= 100 ; i++){
    //     sum += i
    // }
    // console.log('The sum of all numbers from 0 to 100 is : ' + sum );

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens 
// and the sum of all odds.

    // let evenSum = 0
    // let oddSum = 0
    // for ( i = 0 ; i <= 100 ; i++){
    //     if ( i % 2 == 0 ){
    //         evenSum += i
    //     }
    //     else oddSum += i
    // }
    // console.log('The sum of evens from 0 t0 100 is : ' + evenSum)
    // console.log('The sum of odd from 0 to 100 is : ' + oddSum)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens 
// 

    // let sum = []
    // let evenSum = 0
    // let oddSum = 0
    // for ( i = 0 ; i <= 100 ; i++){
    //     if ( i % 2 == 0 ){
    //         evenSum += i
    //     }
    //     else oddSum += i
    // }
    // sum.push(evenSum)
    // sum.push(oddSum)
    // console.log(sum)

// 13. Develop a small script which generate array of 5 random numbers
    
    // let randomArray = []
    // for ( i = 0 ; i < 5 ; i++ ){
    //     let randomNumber = Math.floor(Math.random()*10)
    //     randomArray.push(randomNumber)
    // }
    // console.log( randomArray )

// 14. Develop a small script which generate array of 
// 5 random numbers and the numbers must be unique

    // let randomArray = []
    
    // do{
    //     let randomNumber = Math.floor(Math.random()*10)
    //     if ( randomArray.includes(randomNumber)){

    //     }else randomArray.push(randomNumber)

    // }
    // while( randomArray.length < 5 )
    // console.log( randomArray )

// 15. Develop a small script which generate a six characters random id:

    // let characters = 'abcdefghijklmnopqrstuvxyz0123456789'
    // let id = ''
    // let length = characters.length
    // for ( i = 0 ; i <= 5 ; i++ ){
    //     let string = characters.charAt(Math.floor(Math.random()*length))
    //     id += string
    // }
    // console.log(id)


   

    