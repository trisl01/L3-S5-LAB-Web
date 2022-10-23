

/* Circle Area */
function circleArea() {
  console.info("Calculate Circle Area")
  /* Reset result area */
  document.getElementById("circle-area").value = "NaN"
  /* Get the value of the radius */
  let radius = Number(document.getElementById("circle-radius").value)

  /* Check input value */
  if (!isNaN(radius) && radius >= 0 && document.getElementById("circle-radius").value != '') {
  } else {
    /* Display error */
    document.getElementById("circle-radius").classList.add("error-input")
  }
}


/* Triangle Area */
function triangleArea() {
  console.info("Calculate Triangle Area")
  /* Reset result area */
  document.getElementById("triangle-area").value = "NaN"
  /* Get the value of the base and the vertical height */
  let base = Number(document.getElementById("triangle-base").value)
  let height = Number(document.getElementById("triangle-height").value)

  /* Check input values */
  if ((!isNaN(base) && base >= 0 && document.getElementById("triangle-base").value != '') && (!isNaN(height) && height >= 0 && document.getElementById("triangle-height").value != '')) {
  } else {
    /* Display error(s) */
    document.getElementById("triangle-base").classList.add("error-input")
    document.getElementById("triangle-height").classList.add("error-input")
  }
}


/* Square Area */
function squareArea() {
  console.info("Calculate Square Area")
  /* Reset result area */
  document.getElementById("square-area").value = "NaN"
  /* Get the value of the length */
  let length = Number(document.getElementById("square-length").value)

  /* Check input value */
  if (!isNaN(length) && length >= 0 && document.getElementById("square-length").value != '') {
  } else {
    /* Display error */
    document.getElementById("square-length").classList.add("error-input")
  }
}


/* Rectangle Area */
function rectangleArea() {
  console.info("Calculate Rectangle Area")
  /* Reset result area */
  document.getElementById("rectangle-area").value = "NaN"
  /* Get the value of the width and the height */
  let width = Number(document.getElementById("rectangle-width").value)
  let height = Number(document.getElementById("rectangle-height").value)

  /* Check input values */
  if ((!isNaN(width) && width >= 0 && document.getElementById("rectangle-width").value != '') && (!isNaN(height) && height >= 0 && document.getElementById("rectangle-height").value != '')) {
  } else {
    /* Display error(s) */
    document.getElementById("rectangle-width").classList.add("error-input")
    document.getElementById("rectangle-height").classList.add("error-input")
  }
}