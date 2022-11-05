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
  }
}


//! -----------------------------------------------------------------------------------------------
//?   Excel page
//! -----------------------------------------------------------------------------------------------


function myExcelFuns() {
  console.info("Submit - Excel")
}
