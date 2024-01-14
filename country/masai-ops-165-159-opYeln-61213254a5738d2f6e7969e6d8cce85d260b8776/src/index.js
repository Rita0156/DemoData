let data = [];
let container=document.getElementById("all_countries")
console.log("Rita")
let fecthCountries = async () => {
  // make an API
  await dataData()
};
fecthCountries()

let countryCard = (element) => {
  let cardDiv = document.createElement("div");
  // create a div element for each card and append the details
    cardDiv.className="country"
      let img=document.createElement("img")
      img.src=element.flags.png
      let population=document.createElement("p")
      population.innerText="Population :"+element.population

      let name=document.createElement("h2")
      name.innerText=element.name.common
      let relig=document.createElement("p")
      relig.innerText="Region :"+element.region
      let capital=document.createElement("p")
      capital.innerText="Capital :"+element.capital
      cardDiv.append(img,name,population,capital,relig)

  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");

  // loop through the cards and append to main container
  container.innerHTML=null
   data.forEach((element) => {
     // let div=document.createElement("div")
      
      container.append(countryCard(element))

   });
  return container;
};


let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data
  
  //order=pop
  //pop.addEventListener("change",()=>{
    if(order=="asc"){
      data.sort(function(a,b){return Number(a.population)-Number(b.population)})
      //DisplayData(result)
    }
    else if(order=="desc"){
      data.sort(function(a,b){return Number(b.population)-Number(a.population)})
      //DisplayData(result)
    }
    else{
      return data
    }
  //})

  //renderData(data)
   
  return data
};
//sortLogic(pop.value,data)

let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData
  //regionName=fil.value
   data=data.filter((element)=>{
     //if (regionName===element.region) {
       return regionName==element.region
    
  })
 // renderData(data)
  return data
  
};


let handleSortAndFilter = () => {
  
  //filterByRegionLogic(data,fil.value)
  const pop=document.getElementById("sort_population")
  let fil=document.getElementById("filter_region")

  pop.addEventListener('change',(e)=>{
    let ans=sortLogic(e.target.value,data)
     renderData(ans)
  })

  fil.addEventListener('change',(e)=>{
     let ans=filterByRegionLogic(data,e.target.value)
     renderData(ans)
  })
  
  


};
handleSortAndFilter()

 function dataData() {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter
   fetch('https://restcountries.com/v3.1/all')
  .then((req)=>{
    return req.json()
  })
  .then((res)=>{
    console.log(res);
    data=res
    renderData(res)
  })
  return data;
};


if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
