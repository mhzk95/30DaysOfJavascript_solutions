


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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]



// 


// 2. First remove all the punctuations and change the string
//  to array and count the number of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    
    const removeChara = text.replace(/[,.]/g, '')
    const words = Array.from(removeChara.split(' '))
    console.log(words)
    console.log(words.length)

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']  

     /******** add 'Meat' in the beginning of your shopping cart ********/

    shoppingCart.includes('Meat') ? null : shoppingCart.unshift('Meat') 
    console.log(shoppingCart);

    /******** add Sugar at the end of you shopping cart if it has not been already added ********/

    shoppingCart.includes('Sugar') ? null : shoppingCart.push('Sugar') 
    console.log(shoppingCart);

    /******** remove 'Honey' if you are allergic to honey ********/

    const index = shoppingCart.indexOf('Honey')
    shoppingCart.splice(index,1)
    console.log(shoppingCart)

    /******** modify Tea to 'Green Tea' ********/

    const indexTea = shoppingCart.indexOf('Tea')
    shoppingCart[indexTea] = 'Green Tea'
    console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//  If it does not exist add to the countries list.

    if (countries.includes('Ethiopia')){
        let index = countries.indexOf('Ethiopia')
        console.log(countries[index].toUpperCase());
    } else countries.push('Ethiopia')


// 5. In the webTechs array check if Sass exists in the array and if it exists print
//  'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    
    if (webTechs.includes('Sass')){
        console.log("Sass is a preprocessor");
    
    } else webTechs.push('Sass')
    
    console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    
    const fullStack = frontEnd.concat(backEnd)
    
    console.log(fullStack)











