// // https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/national/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97
// // https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/states/{stateAbbr}/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97


// // console.log(baseUrl)

// const getFBIdata = async () => {
//   const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97' 
//   const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`;

//   try {
//     const response = await axios.get(statesBaseUrl)
//     optionValues(response.data.results)
//     // console.log(stateOptions)
  
// } catch (error) {
//   console.log(`Error logging: ${error}`)
//   } 
// }
// getFBIdata()

// function optionValues(list) {
//   list.forEach((stateAbbr) => {
//     const select = document.querySelector('#stateselectcrime')
//     const stateValue = document.createElement('option')
//     stateValue.value = stateAbbr.state_name
//     stateValue.text = stateAbbr.state_name
//     console.log(stateValue)    
//     select.append(stateValue)
//   })
// }

// function getValues(e) {
//   e.preventDefault()
//   const optionChoice = document.querySelector('#stateselectcrime')
//   console.log(optionChoice)
// }


// const form = document.querySelector('form')
// form.addEventListener('submit', getValues)

const getYearData = async () => {
  const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97' 
  const yearsBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/estimates/national/1985/2018?API_KEY=${API_KEY}`;
   

  try {
    const response = await axios.get(yearsBaseUrl)
    optionValues2(response.data.results)
    console.log(optionValues2(response.data.results))
  
} catch (error) {
  console.log(`Error logging: ${error}`)
  } 
}
getYearData()


function optionValues2(list) {
  list.forEach((yearElement) => {
    const select = document.querySelector('#natrangefrom', '#natrangeto')
    const yearValue = document.createElement('option')
    yearValue.value = yearElement.year
    yearValue.text = yearElement.year
    console.log(yearValue)    
    select.append(yearValue)
  })
}

function getValues(e) {
  e.preventDefault()
  const optionChoice2 = document.querySelector('#natrangefrom', '#natrangeto')
  console.log(optionChoice2)

}


// async function getStateInfo()


const form = document.querySelector('form')
form.addEventListener('submit', getValues)
