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
    console.log
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
