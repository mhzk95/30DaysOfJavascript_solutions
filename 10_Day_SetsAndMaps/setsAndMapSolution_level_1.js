const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const country = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set

    // let set = new Set()
    // console.log(set);

// 2. Create a set containing 0 to 10 using loop

    // let set = new Set()
    // let numbers = [1,2,3,4,5,6,7,8,9,10]
    // for(let x of numbers){
    //     set.add(x)
    // }
    // console.log(set);

//5. create a set of 5 String elements fromm array

    // let set = new Set()
    // let string = ['English','Arabic', 'Spanish', 'Italian', 'French']
    // for(let x of string){
    //     set.add(x)
    // }
    // console.log(set);

// 6. Create a map of countries and number of characters of a country

    // let map = new Map()
    // for(let x of countries){
    //     map.set(x,x.length)
    // }
    // console.log(map);

    /***********LEVEL 2 ************/

// 1. Find a union b

    // let c = [...a,...b]
    // let aUnionB = new Set(c)
    // console.log(aUnionB);

// 2. Find a intersection b
    
    // let c = a.filter(num => b.includes(num))
    // let C = new Set(c)
    // console.log(C);
    
    /************LEVEL 3 **********/

// 1. How many languages are there in countries object file

    // let reduceLang = countries.reduce((acc,cur) => {
    //     let items = cur.languages
    //     return [...acc,...items]
    // },[])
    // let NoOfLang = new Set(reduceLang)
    // console.log(NoOfLang);

// 2. Use the countries data to find the 10 most spoken languages:

    // function mostSpokenLanguages(countries,num){

    // let reduceLang = countries.reduce((acc,cur) => {
    //     let items = cur.languages
    //     return [...acc,...items]
    // },[])

    // let NoOfLang = new Set(reduceLang)

    // let langArr = []
    // for( let lang of NoOfLang ){
    //     let count = reduceLang.filter(a => a==lang)
    //     let lan = {}
    //     lan[lang] = count.length
    //         langArr.push(lan)
    // }

    // let sortedArr = langArr.sort((a,b) => Object.values(b)-Object.values(a))
    // let slice = sortedArr.slice(0,num)
    // return slice
    // }
    // console.log(mostSpokenLanguages(countries,5)); 
    
    
    
