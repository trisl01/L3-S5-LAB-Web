//! -----------------------------------------------------------------------------------------------
//?   Home page
//! -----------------------------------------------------------------------------------------------


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


function myExcelFuns() {
  console.info("Submit - Excel")
}
