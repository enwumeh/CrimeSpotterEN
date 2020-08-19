// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/national/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97
// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/states/{stateAbbr}/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97


// console.log(baseUrl)

const getFBIdata = async () => {
  const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97' 
  const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`;

  try {
    const response = await axios.get(statesBaseUrl)
    optionValues(response.data.results)
  
} catch (error) {
  console.log(`Error logging: ${error}`)
  } 
}
getFBIdata()

function optionValues(list) {
  list.forEach((stateAbbr) => {
    const select = document.querySelector('#stateselectcrime')
    const stateValue = document.createElement('option')
    stateValue.value = stateAbbr.state_name
    stateValue.text = stateAbbr.state_name
    console.log(stateValue)    
    select.append(stateValue)
  })
}

function getValues(e) {
  e.preventDefault()
  const optionChoice = document.querySelector('#stateselectcrime')
  console.log(optionChoice)
}


const form = document.querySelector('form')
form.addEventListener('submit', getValues)

const getYearData = async () => {
  const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97' 
  const yearsBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/estimates/national/1985/2018?API_KEY=${API_KEY}`;
   

  try {
    const response = await axios.get(yearsBaseUrl)
    optionValues2(response.data.results)
  
} catch (error) {
  console.log(`Error logging: ${error}`)
  } 
}
getYearData()


function optionValues2(list) {
  list.forEach((yearElement) => {
    const select = document.querySelector('#natrangefrom')
    const select2 = document.querySelector('#natrangeto')
    const select3 = document.querySelector('#staterangefrom')
    const select4 = document.querySelector( '#staterangeto')
    const yearValue = document.createElement('option')
    const yearValue2 = document.createElement('option')
    const yearValue3 = document.createElement('option')
    const yearValue4 = document.createElement('option')
    yearValue.value = yearElement.year
    yearValue.text = yearElement.year
    yearValue2.value = yearElement.year
    yearValue2.text = yearElement.year
    yearValue3.value = yearElement.year
    yearValue3.text = yearElement.year
    yearValue4.value = yearElement.year
    yearValue4.text = yearElement.year
    select.append(yearValue)
    select2.append(yearValue2)
    select3.append(yearValue3)
    select4.append(yearValue4)
   
  })

}

function getValues2(e) {
  e.preventDefault()
  const optionChoice2 = document.querySelector('#natrangefrom', '#natrangeto')
  console.log(optionChoice2)

}


const form2 = document.querySelector('form')
form2.addEventListener('submit', getValues2)
