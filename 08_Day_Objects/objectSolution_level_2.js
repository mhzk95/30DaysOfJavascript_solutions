const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
// 1. Find the person who has many skills in the users object.

   
    // let max = 0
    // let user = ''
    // for (let key of Object.keys(users)){
    //     let length = users[key].skills.length 
    //     if (max < length){
    //         max = length
    //         user = key
    //     }
    // }
    // console.log(user)
    

// 2. Count logged in users, count users having greater than equal to 
// 50 points from the following object.
   
    // console.log('Logged in users');
    // for(let properties of Object.entries(users)){
    //     let userProp = properties[1]
    //     if(userProp.isLoggedIn){
    //         console.log(` ${properties[0]}`)
    //     }
    // }
    // console.log('Users with 50 point or more');
    // for ( let properties of Object.entries(users) ){
    //     let userProp = properties[1]
    //     if(userProp.points >= 50){
    //         console.log(`${properties[0]}`)
    //     }
    // }

// 3. Find people who are MERN stack developer from the users object

    // let mernStack = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node']

    // for(let properties of Object.entries(users)){
    //     let userProp = properties[1]
    //     let skills = userProp.skills
    //     let number = 0
    //     for(let x of skills){
    //         if(mernStack.includes(x)){
    //             number++ 
    //         }
    //         if(number >= 7){
    //             console.log(properties[0])    
    //         }
    //     }
    // }

// 4. Set your name in the users object without modifying the original users object

    // let duplicate = {...users}
    // duplicate.zakeer = {
    //     email : 'zakeer@gmail.com' ,
    //     skills : ['HTML', 'CSS', 'Javascript'],
    //     age : 25,
    //     isLoggedIn : false,
    //     points : 30
    // }
    // console.log(duplicate);

// 5. Get all keys or properties of users object

    // let keys = Object.keys(users)
    // console.log(keys);

// 6.  Get all the values of users object

    // let values = Object.values(users)
    // console.log(values);

// 7. Use the countries object to print a country name, capital, populations and languages.



    




    