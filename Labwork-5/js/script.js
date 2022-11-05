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
function isValidHome() {
  //? Verify if all the <div id>
  if (isValidTextId("fname") && isValidTextId("lname") && isValidEmailId("email") && isValidTextId("address") && isValidTextId("city") && isValidTextId("province")) {
    return true
  }
  return false
}
  }
}


//! -----------------------------------------------------------------------------------------------
//?   Excel page
//! -----------------------------------------------------------------------------------------------


function myExcelFuns() {
  console.info("Submit - Excel")
}
