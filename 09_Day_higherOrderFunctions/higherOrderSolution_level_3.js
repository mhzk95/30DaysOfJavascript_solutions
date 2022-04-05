// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

    // let byName = countries.sort((a,b) => {
    //     let x = a.name.toLowerCase()
    //     let y = b.name.toLowerCase()
    //     return x < y ? -1 : x > y ? 1 : 0;
    // })
    // console.log(byName);

    // let byCapital = countries.sort((a,b) => {
    //     let x = a.capital.toLowerCase()
    //     let y = b.capital.toLowerCase()
    //     return x < y ? -1 : x > y ? 1 : 0;
    // })
    // console.log(byCapital);

    // let byPopulation = countries.sort((a,b) => {
    //     return a.population - b.population
    // })
    // console.log(byPopulation);

// 2. *** Find the 10 most spoken languages:

    // function mostSpokenLanguages(countries,num){

    //   let languages = countries.reduce((acc,cur) => {
    //     let items = cur.languages
    //     return [...acc,...items]
    //   },[])
      
    //   let langSet = new Set(languages)
      
    //   let arr = []

    //   for(let l of langSet){
    //     let lang = languages.filter(a => a == l)
    //     arr.push({'language' : l, 'count' : lang.length})
    //   }
    //   let sortedArr = arr.sort((a,b) => b.count - a.count)
      
    //   let slice = sortedArr.slice(0,num)
      
    //   return slice
    // }

    // console.log(mostSpokenLanguages(countries,3))

// 3. Use countries_data.js file create a function which create the ten most populated countries

    // function mostPopulatedCountries(countries,num){
    // let sortedArr = countries.sort((a,b) => b.population - a.population)
    
    // let slice = sortedArr.slice(0,num)
    
    // let map = slice.map(country => {
    //   let property = {
    //     'country' : country.name,
    //     'population' : country.population
    //   }
    //   return property
    // })
    // return map
    // }

    // console.log(mostPopulatedCountries(countries,10));

    



 