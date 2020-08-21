
const natRangeFrom = document.querySelector('#nat-range-from')
const natRangeTo = document.querySelector('#nat-range-to')
const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97'
const stateSelect = document.querySelector('#state-select-crime')
const selectRangeFrom = document.querySelector('#state-range-from')
const selectRangeTo = document.querySelector('#state-range-to')
const getDataButton = document.querySelector('#get-data-button')
const stateDataDiv = document.querySelector('.state-data')
const pageFormat = document.querySelector('.page-format')



///STATE NAME/////
function stateOptionValues(list) {
  list.forEach((stateObj) => {

    let stateValue = document.createElement('option')
    stateValue.value = stateObj.state_abbr
    stateValue.text = stateObj.state_name
    stateSelect.appendChild(stateValue)

  })
}

const getFBIdata = async () => {
  const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`

  try {
    const response = await axios.get(statesBaseUrl)

    stateOptionValues(response.data.results)

  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}
getFBIdata()


//////////STATE YEAR//////////
function stateOptionYearsFrom(list) {
  list.forEach((stateObj) => {
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeFrom.append(stateValue)

  })
}

function stateOptionYearsTo(list) {
  list.forEach((stateObj) => {
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeTo.append(stateValue)


  })
}

const getYearData = async () => {
  const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97'
  const yearsBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/estimates/national/1985/2018?API_KEY=${API_KEY}`;

  try {
    const response = await axios.get(yearsBaseUrl)
    stateOptionYearsFrom(response.data.results)
    stateOptionYearsTo(response.data.results)

  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}
getYearData()




/////GET STATE DATA/////
const getStateData = async (stateInfo) => {
  const chooseStateUrl = `https://api.usa.gov/crime/fbi/sapi/api/summarized/estimates/states/${stateInfo.stateName}/${stateInfo.stateFrom}/${stateInfo.stateTo}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97`;

  
  try {
    const response = await axios.get(chooseStateUrl)

    document.querySelectorAll('.data-div').forEach((div) => div.remove())
    
    let data = response.data.results
    let dataDiv = document.createElement('div')
    dataDiv.className = "data-div"
   
    
    for (item in data[0]) {
      console.log(item)
      if (item !== "state_id" && item !== "state_abbr" && item !== "rape_revised") {
        let divCrime = document.createElement('div')
        divCrime.className = 'crime-types'
        divCrime.innerText = item.slice(0,14)
        dataDiv.append(divCrime)
      }
    }
    pageFormat.append(dataDiv)
    for (let i = 0; i < data.length; i++) {
      let dataDiv = document.createElement('div')
      dataDiv.className = "data-div"
      
      
      for (item in data[i]) {
        if (item !== "state_id" && item !== "state_abbr" && item !== "rape_revised") {
          let divCrime = document.createElement('div')
          divCrime.innerText = data[i][item] 
          dataDiv.append(divCrime)
        }
      }
      pageFormat.append(dataDiv)

    }

  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}


/////GET SELECT CHOICE
let stateData = { stateName: '', stateFrom: '', stateTo: '' }

stateSelect.addEventListener('change', () => {
  stateData.stateName = stateSelect.value
})

selectRangeFrom.addEventListener('change', () => {
  stateData.stateFrom = selectRangeFrom.value
})

selectRangeTo.addEventListener('change', () => {
  stateData.stateTo = selectRangeTo.value
})


getDataButton.addEventListener('click', (e) => {
  e.preventDefault()
  getStateData(stateData)
})
