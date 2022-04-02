// 1. Declare a function fullName and it print out your full name.
    
    // function fullName(){
    //     let firstName = "Muhammad"
    //     let lastName = "zakeer"
    //     console.log(`${firstName} ${lastName}`)
    // }
    // fullName()

// 2. Declare a function fullName and now it takes firstName, lastName 
// 

    // function fullName(firstName, lastName){
    //     console.log(`${firstName} ${lastName}`)
    // }
    // fullName('muhammad', 'zakeer')

// 3. Declare a function addNumbers and it takes two two parameters and
// 

    // function addNumbers(num1, num2){
    //     let sum = num1 + num2
    //     return sum
    // }
    // console.log(addNumbers(5,6))

// 4. An area of a rectangle is calculated as follows: area = length x width.
//  Write a function which calculates areaOfRectangle.

    // function areaOfRectangle(length, width){
    //     let area = length * width
    //     return area
    // }
    // console.log(areaOfRectangle(5,6))

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//  Write a function which calculates perimeterOfRectangle.

    // function perimeterOfRectangle(length, width){
    //     let perimeter = 2 * (length + width)
    //     return perimeter
    // }
    // console.log(perimeterOfRectangle(5,6))

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//  Write a function which calculates volumeOfRectPrism.

    // const volumeOfRectPrism = (length, width, height) => length * width * height
    // console.log(volumeOfRectPrism(3,4,5))

// 7. Area of a circle is calculated as follows: area = π x r x r.
//  Write a function which calculates areaOfCircle

    // const areaOfCircle = r => Math.PI * r * r
    // console.log(areaOfCircle(5));

// 8.Circumference of a circle is calculated as follows: 
// circumference = 2πr. Write a function which calculates circumOfCircle

    // const circumOfCircle = r => 2 * Math.PI * r
    // console.log(circumOfCircle(4));

// 9. Density of a substance is calculated as follows:density= mass/volume.
//  Write a function which calculates density.

    // const density = (mass, volume) => mass / volume
    // console.log(density(30, 25));

// 10. Speed is calculated by dividing the total distance covered by a moving
//  object divided by the total amount of time taken. Write a function which 
//  calculates a speed of a moving object, speed.

    // function speed(distance, time){
    //     let speed = distance/time
    //     console.log(`${speed} km/hr`)
    // }
    // speed(200, 30)

// 11. Weight of a substance is calculated as follows: weight = mass x gravity.
//  Write a function which calculates weight.

    // const weight = (mass, gravity = 9.81) => mass * gravity
    // console.log(`${weight(15)} N `);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
//  Write a function which convert oC to oF convertCelsiusToFahrenheit.

    // function convertCelsiusToFahrenheit(oC){
    //     let oF = (oC * 9/5) + 32.
    //     console.log(`${oF} F`)
    // }
    // convertCelsiusToFahrenheit(32)

// 13. Body mass index(BMI) is calculated as follows: 
// bmi = weight in Kg / (height x height) in m2.
//  Write a function which calculates bmi. 
//  BMI is used to broadly define different weight groups in adults 
//  20 years old or older.Check if a person is underweight, normal,
//   overweight or obese based the information given below.

    // const bmi = (weight, height) => {
    //     let bmi = weight / ( height * height )
    //     if ( bmi < 18.5 ){
    //         console.log('Underweight')
    //     }
    //     else if ( bmi >= 18.5 && bmi <=24.9 ){
    //         console.log('Normal weight')
    //     }
    //     else if ( bmi >= 25 && bmi <= 29.9 ){
    //         console.log('overweight')
    //     }
    //     else if (bmi > 30 ){
    //         console.log('Obese')
    //     }
    // }
    // bmi (90, 1.75)

// 14. Write a function called checkSeason, it takes a month parameter and 
// returns the season:Autumn, Winter, Spring or Summer.

    // function season(month){

    //     let string = month[0].toUpperCase() + month.slice(1)
    //     let winter = ['December', 'January', 'February']
    //     let Spring = ['March', 'April', 'May']
    //     let summer = ['June', 'July', 'August']
    //     let Autumn = ['September', 'October', 'November']

    //     if (winter.includes(string)){
    //         console.log('Its winter...')
    //     } else if (Spring.includes(string)){
    //         console.log('Its spring')
    //     } else if (summer.includes(string)){
    //         console.log('Its summer...')
    //     }
    //     else console.log('Its Autumn...');
    // }
    // season('april')

// 15. Math.max returns its largest argument.
//  Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    // const maxNumber = (num1, num2, num3) => {
    //     if(num1 > num2){
    //         if ( num1 > num3 ){
    //             console.log(num1)
    //         }
    //         else console.log(num3)
    //     }
    //     else if ( num2 > num3 ){
    //         console.log(num2)
    //     }
    //     else console.log(num3)
    // }
    // maxNumber(5,7,2)










