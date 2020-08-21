const natRangeFrom = document.querySelector('#nat-range-from')
const natRangeTo = document.querySelector('#nat-range-to')
const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97'
const stateSelect = document.querySelector('#state-select-crime')
const selectRangeFrom = document.querySelector('#state-range-from')
const selectRangeTo = document.querySelector('#state-range-to')
const getDataButton = document.querySelector('#get-data-button')
const stateDataDiv = document.querySelector('.state-data')
const pageFormat = document.querySelector('.page-format')



///STATE NAME


//states drop down menu, looping through each state, making an option element and appending it to the state drop down select menu
function stateOptionValues(list) {
  list.forEach((stateObj) => {

    let stateValue = document.createElement('option')
    stateValue.value = stateObj.state_abbr
    stateValue.text = stateObj.state_name
    stateSelect.appendChild(stateValue)

  })
}


//making axios request and getting list of all states 
const getFBIdata = async () => {
  const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`

  try {
    const response = await axios.get(statesBaseUrl)

    //calling stateoptionvalues, which make each
    stateOptionValues(response.data.results)

  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}
getFBIdata()


//////////STATE YEAR//////////


//stateOptionYearsFrom and stateOptionYearsTo append the state values to the drop down menu
function stateOptionYearsFrom(list) {
  list.forEach((stateObj) => {
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeFrom.append(stateValue)

  })
}

//same thing as previous function but from the to not the from
function stateOptionYearsTo(list) {
  list.forEach((stateObj) => {
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeTo.append(stateValue)


  })
}

//this endpoint is getting all the possible years to select from
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




/////GET STATE DATA
//this endpoint is getting state data along with each year and specifies the range you want
const getStateData = async (stateInfo) => {
  const chooseStateUrl = `https://api.usa.gov/crime/fbi/sapi/api/summarized/estimates/states/${stateInfo.stateName}/${stateInfo.stateFrom}/${stateInfo.stateTo}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97`;


  try {
    //clearing page before the list loads again
    const response = await axios.get(chooseStateUrl)

    //clearing page before the list loads again
    document.querySelectorAll('.data-div').forEach((div) => div.remove())

    let data = response.data.results
    let dataDiv = document.createElement('div')
    dataDiv.className = "data-div"

    //
    for (item in data[0]) {
      console.log(item)
      //appending the crime types to the main data div element
      if (item !== "state_id" && item !== "state_abbr" && item !== "rape_revised") {
        let divCrime = document.createElement('div')
        divCrime.className = 'crime-types'
        divCrime.innerText = item.slice(0, 9)
        dataDiv.append(divCrime)
      }
    }
    //attach categories of crimes to the pageFormat div
    pageFormat.append(dataDiv)
    for (let i = 0; i < data.length; i++) {
      let dataDiv = document.createElement('div')
      dataDiv.className = "data-div"

      //for each crime, add the number of cases of that crime to a span, then attach that to dataDiv
      for (item in data[i]) {
        if (item !== "state_id" && item !== "state_abbr" && item !== "rape_revised") {
          //adding each crime incidence to a div 
          let divCrime = document.createElement('div')
          divCrime.innerText = data[i][item]
          dataDiv.append(divCrime)
        }
      }
      //attach number of cases per crime of each year to the page
      pageFormat.append(dataDiv)

    }


  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}



/////GET SELECT CHOICE

//an object to store the values that the user clicks on, aka the choice of the drop down
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


//getting the main data
getDataButton.addEventListener('click', (e) => {
  e.preventDefault()
  getStateData(stateData)
})




