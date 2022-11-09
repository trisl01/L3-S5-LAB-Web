//! -----------------------------------------------------------------------------------------------
//?   Home page
//! -----------------------------------------------------------------------------------------------


//? Listen if the user press "Enter" and run the function automatically
if (document.location.pathname.endsWith("/index.html") || document.location.pathname.endsWith("/")) {
  document.getElementById("fname").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
  document.getElementById("lname").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
  document.getElementById("email").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
  document.getElementById("address").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
  document.getElementById("city").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
  document.getElementById("province").addEventListener("keydown", function (event) { if (event.key == "Enter") userForm() })
}


function userForm() {
  console.info("Submit - Home")
  
  //? Get values from inputs
  let fname = document.getElementById("fname").value
  let lname = document.getElementById("lname").value
  let email = document.getElementById("email").value
  let address = document.getElementById("address").value
  let city = document.getElementById("city").value
  let province = document.getElementById("province").value
  let country = document.getElementById("country").value
  let membership
  if (document.getElementById("premium-membership").checked) {
    membership = document.getElementById("premium-membership").value
  } else if (document.getElementById("standard-membership").checked) {
    membership = document.getElementById("standard-membership").value
  } else if (document.getElementById("basic-membership").checked) {
    membership = document.getElementById("basic-membership").value
  }

  //? Test if there is all the correct values
  if (isValidHome()) {
    //? Add all the informations on the #output
    createNewDivOutput("output-name", "<b>Full Name:</b> " + fname + " " + lname)
    createNewDivOutput("output-email", "<b>Email:</b> " + email)
    createNewDivOutput("output-address", "<b>Address:</b> " + address + ", " + city + ", " + province + ", " + country)
    createNewDivOutput("output-membership", "<b>Membership:</b> " + membership)
  } else {
    //? Display errors on the wrong inputs
    displayErrorsHome()
  }
}

function createNewDivOutput(id, text) {
  //? Verify if there is no <div> with the id
  if (document.getElementById(id) == null) {
    //? Create a new <div> and put it on the #output
    console.log("new " + id)
    let newDiv = document.createElement("div")
    newDiv.className = ""
    newDiv.id = id
    newDiv.innerHTML = text
    document.getElementById("output").appendChild(newDiv)
  } else {
    //? Change the current <div id> with the new information
    console.log("update " + id)
    document.getElementById(id).innerHTML = text
  }
}

function isValidHome() {
  //? Verify if all the <div id>
  if (isValidTextId("fname") && isValidTextId("lname") && isValidEmailId("email") && isValidTextId("address") && isValidTextId("city") && isValidTextId("province")) {
    return true
  }
  return false
}

function isValidText(text) {
  //? Verify if the text is not null
  if (text == null || text == "" || text === undefined) {
    return false
  }
  return true
}

function isValidTextId(id) {
  //? Verify if the id is not null
  if (id == null) {
    return false
  }
  //? Verify if the text inside the id element is correct
  if (isValidText(document.getElementById(id).value)) {
    document.getElementById(id).classList.remove("error-input")
    return true
  }
  document.getElementById(id).classList.add("error-input")
  return false
}

function isValidEmail(email) {
  //? Verify if the email is not null
  if (email == null || email == "" || email === undefined) {
    return false
  }
  //? Verify if the email is an email
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(email)) {
    return false
  }
  return true
}

function isValidEmailId(id) {
  //? Verify if the id is not null
  if (id == null) {
    return false
  }
  //? Verify if the email inside the id element is correct
  if (isValidEmail(document.getElementById(id).value)) {
    document.getElementById(id).classList.remove("error-input")
    return true
  }
  document.getElementById(id).classList.add("error-input")
  return false
}

function resetErrorsHome() {
  //? Remove all the class .error-input of the input
  document.getElementById("fname").classList.remove("error-input")
  document.getElementById("lname").classList.remove("error-input")
  document.getElementById("email").classList.remove("error-input")
  document.getElementById("address").classList.remove("error-input")
  document.getElementById("city").classList.remove("error-input")
  document.getElementById("province").classList.remove("error-input")
}

function displayErrorsHome() {
  resetErrorsHome()

  console.warn("Errors!")

  //? Verify and put class .error-input if not correct
  isValidTextId("fname")
  isValidTextId("lname")
  isValidEmailId("email")
  isValidTextId("address")
  isValidTextId("city")
  isValidTextId("province")
}


//! -----------------------------------------------------------------------------------------------
//?   Excel page
//! -----------------------------------------------------------------------------------------------


//? Listen if the user press "Enter" and run the function automatically
if (document.location.pathname.endsWith("/excel.html")) {
  document.getElementById("numbers").addEventListener("keydown", function (event) { if (event.key == "Enter") myExcelFuns() })
}

function myExcelFuns() {
  console.info("Submit - Excel")

  //? Check the input
  if (isValidNumberStr('numbers')) {
    resetErrorsExcel()

    let numbers = inputStringToArrayNumber('numbers')

    //? Run the selected function
    let result
    if (document.getElementById("sum").checked) {
      result = autoSum(numbers)
    } else if (document.getElementById("avg").checked) {
      result = average(numbers)
    } else if (document.getElementById("max").checked) {
      result = max(numbers)
    } else if (document.getElementById("min").checked) {
      result = min(numbers)
    } else {
      result = "Error"
    }

    //? Put the result in the #output
    document.getElementById("result").value = result
  } else {
    displayErrorsExcel()
  }
}

function isValidNumberStr(id) {
  //? Get the string of the input
  let inputStr = document.getElementById(id).value

  //? Split into an array
  let inputArr = inputStr.split("")

  //? Add a new regex of the correct input
  let regexArray = ['0','1','2','3','4','5','6','7','8','9',' ','.',',']

  //? Check every character of the string
  inputArr.forEach(character => {
    //? Match the character with the regex
    if (!matchInArray(character, regexArray)) {
      //? Not correct
      return false
    }
  })

  let numbers = inputStringToArrayNumber(id)
  if (numbers.length > 0) {
    return true
  } else {
    return false
  }
}

function isValidNumberStrDisplay(id) {
  if (isValidNumberStr(id)) {
    resetErrorsExcel()
  } else {
    displayErrorsExcel()
  }
}

function inputStringToArrayNumber(id) {
  //? Get the String value of the input
  let numberStr = document.getElementById(id).value

  //? Transform the String into an Array using the "Space" to cut elements
  let numberArr = numberStr.split(" ")

  //? Create an Array of Number with the old one
  let numbers = new Array()
  numberArr.forEach(element => {
    //? Verify if the element is not null
    if (element != null && element != "") {
      let number = Number(element)
      //? All String who are not a Number is transform to NaN
      if (!isNaN(number)) {
        //? Add all the real Number
        numbers.push(number)
      }
    }
  })

  return numbers;
}

function matchInArray(string, array) {
  //? Check if the string is inside the array
  for (let i = 0; i < array.length; i++) {
    if (string.match(array[i])) {
      return true
    }
  }
  return false
}

function displayErrorsExcel() {
  //? Display error
  document.getElementById("numbers").classList.add("error-input")
  document.getElementById("result").value = "Wrong input!"

}

function resetErrorsExcel() {
  //? Remove error
  document.getElementById("numbers").classList.remove("error-input")
}

function autoSum(array) {
  //? Sum all the elements inside the Array
  let sum = 0
  array.forEach(element => {
    sum += element
  });
  return sum
}

function average(array) {
  //? Calculate the average of the Array
  let sum = 0
  let length = 0
  array.forEach(element => {
    sum += element
    length++
  });
  return sum/length
}

function max(array) {
  //? Find the max of the Array
  return Math.max(...array)
}

function min(array) {
  //? Find the min of the Array
  return Math.min(...array)
}