// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/national/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97
// https://api.usa.gov/crime/fbi/sapi/a/api/summarized/estimates/states/{stateAbbr}/{since}/{until}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97?fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97


//getting everything from the DOM
const natRangeFrom = document.querySelector('#nat-range-from')
const natRangeTo = document.querySelector('#nat-range-to')
const API_KEY = 'fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97'
const stateSelect = document.querySelector('#state-select-crime')
const selectRangeFrom = document.querySelector('#state-range-from')
const selectRangeTo = document.querySelector('#state-range-to')
const getDataButton = document.querySelector('#get-data-button')
const stateDataDiv = document.querySelector('.state-data')
const pageFormat = document.querySelector('.page-format')


// console.log(stateSelect)
///STATE NAME 


//states drop down menu, looping through each state
function stateOptionValues(list) {
  list.forEach((stateObj) => {

    let stateValue = document.createElement('option')
    stateValue.value = stateObj.state_abbr
    stateValue.text = stateObj.state_name
    stateSelect.appendChild(stateValue)

  })
}


//making axios request and getting list of states from api
const getFBIdata = async () => {
  const statesBaseUrl = `https://api.usa.gov/crime/fbi/sapi/api/states?API_KEY=${API_KEY}`

  try {
    const response = await axios.get(statesBaseUrl)

    // console.log(response.data.results)
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
    // console.log(stateObj.year)
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeFrom.append(stateValue)

  })
}
function stateOptionYearsTo(list) {
  list.forEach((stateObj) => {
    // console.log(stateObj.year)
    let stateValue = document.createElement('option')
    stateValue.value = stateObj.year
    stateValue.text = stateObj.year
    selectRangeTo.append(stateValue)


  })
}

//making axios request for 
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
const getStateData = async (stateInfo) => {
  const chooseStateUrl = `https://api.usa.gov/crime/fbi/sapi/api/summarized/estimates/states/${stateInfo.stateName}/${stateInfo.stateFrom}/${stateInfo.stateTo}?API_KEY=fqaOG7nblqnvp0dz1Ag2NHZ1sciWe7zipRByMW97`;
  // console.log(chooseStateUrl)

  try {
    const response = await axios.get(chooseStateUrl)
    let data = response.data.results
    let dataDiv = document.createElement('div')
    dataDiv.className = "data-div"
    let orderedL = document.createElement('ul')
    dataDiv.append(orderedL)
    pageFormat.append(dataDiv)
    for (let i = 0; i < data.length; i++) {
      // dataDiv.append()
      // console.log(data[i].arson)
      const arson = document.createElement('li')
      arson.textContent = data[i].arson
      orderedL.append(arson)


      // let ObjKeys = Object.keys(data[0])
      // for (let i = 0; i < dataDiv.length; i++){
      //   dataDiv.append(ObjKeys)
      // }
      // console.log("HEREEEE", dataDiv[0])

      // console.log(Object.keys(data[0]))
      // dataDiv.append()
      console.log(data[i])
      getKey(data[i])

    }
    //loop through data and append data to stateDataDiv??


  } catch (error) {
    console.log(`Error logging: ${error}`)
  }
}

function getKey(data) {
  for (item in data) {
    console.log(item)
    const keyArray = [];
    // keyArray.push(item)


    // if (item !== "state_id" && item !== "state_abbr") {
      // console.log(typeof item)
      // let span = document.createElement('span')
      // span.innerText = `${item}` 
      // console.log(span)
      // dataDiv.append(span)
      // dataDiv.append(item)
      // dataDiv.append(data[i][item])
      // pageFormat.append(dataDiv)
      // console.log(item, data[i][item])
    // }
    console.log(keyArray)

    // return keyArray

  
  }
  keyArray.push(item)
  // console.log(keyArray)

}



/////GET SELECT CHOICE

let stateData = { stateName: '', stateFrom: '', stateTo: '' }
stateSelect.addEventListener('change', () => {
  // console.log(stateSelect.value)
  stateData.stateName = stateSelect.value
  // console.log('here', stateSelect)
})

selectRangeFrom.addEventListener('change', () => {
  // console.log(selectRangeFrom.value)
  stateData.stateFrom = selectRangeFrom.value
})
selectRangeTo.addEventListener('change', () => {
  // console.log(selectRangeTo.value)
  stateData.stateTo = selectRangeTo.value
})

getDataButton.addEventListener('click', (e) => {
  e.preventDefault()
  // console.log(stateData)
  getStateData(stateData)

})













































function getValues(e) {
  e.preventDefault()
  const optionChoice = document.querySelector('#stateselectcrime')
  console.log(optionChoice)
}


const form = document.querySelector('form')
form.addEventListener('submit', getValues)





// getYearData()

// const select = document.querySelector('#natrangefrom')
// const select2 = document.querySelector('#natrangeto')
// const select3 = document.querySelector('#staterangefrom').addEventListener('change', () => {
// console.log(select2)
// })
// const select4 = document.querySelector('#staterangeto')

// function optionValues2(list) {
//   list.forEach((yearElement) => {
//     const yearValue = document.createElement('option')
//     const yearValue2 = document.createElement('option')
//     const yearValue3 = document.createElement('option')
//     const yearValue4 = document.createElement('option')
//     yearValue.value = yearElement.year
//     yearValue.text = yearElement.year
//     yearValue2.value = yearElement.year
//     yearValue2.text = yearElement.year
//     yearValue3.value = yearElement.year
//     yearValue3.text = yearElement.year
//     yearValue4.value = yearElement.year
//     yearValue4.text = yearElement.year
//     select.append(yearValue)
//     // select2.append(yearValue2)
//     select3.append(yearValue3)
//     select4.append(yearValue4)
//   })

// }

function getValues2(e) {
  e.preventDefault()
  const optionChoice2 = document.querySelector('#natrangefrom').value
  const optionChoice3 = document.querySelector('#natrangeto').value
  console.log(optionChoice2, optionChoice3)

}

async function postData(since, until) {
  const urlNation = `https: api.usa.gov/crime/fbi/api/summarized/estimates/national/${since}/${until}?${API_KEY}`
  console.log(urlNation)
  try {
    const response = await axios.get(urlNation)
    const logg = response.data.results
    console.log(logg)
  }
  catch (error) {
    console.log(`Heres the error: ${error}`)
  }
}


// function nationPost()



// const form2 = document.querySelector('form')
// form2.addEventListener('submit', getValues2)

