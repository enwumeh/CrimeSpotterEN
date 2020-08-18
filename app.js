// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/national/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97
// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/states/{stateAbbr}/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97


// console.log(baseUrl)

const getFBIdata = async () => {
  const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97' 
  const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`;

  try {
    const response = await axios.get(statesBaseUrl)
    const stateList = response.data.results
    const stateOptions = stateList.map((state) => {
      state.state_name
    })
    optionValues(stateList)
    console.log(stateOptions)
  
} catch (error) {
  console.log(`Error logging: ${error}`)
  } 
}
getFBIdata()

function optionValues(list) {
  list.forEach((stateAbbr) => {
    const select = document.querySelector('#stateselectcrime')
    const stateValue = document.createElement('option')
    stateValue.value = `${stateAbbr}`
    stateValue.text = `${stateAbbr}`
console.log(stateValue)    // stateValue = `${stateAbbr}`
    // const option = document.querySelector('option')
    // option.textContent = `${stateAbbr}`
    select.append(stateValue)
  })
}

function getValues(e) {
  e.preventDefault()
  const optionChoice = document.querySelector('#state-select-crime')
}

const form = document.querySelector('form')
form.addEventListener('submit', getValues)

