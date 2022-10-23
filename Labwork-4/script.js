

/* Circle Area */
function circleArea() {
  console.info("Calculate Circle Area")
  /* Reset result area */
  document.getElementById("circle-area").value = "NaN"
  /* Get the value of the radius */
  let radius = Number(document.getElementById("circle-radius").value)
}


/* Triangle Area */
function triangleArea() {
  console.info("Calculate Triangle Area")
  /* Reset result area */
  document.getElementById("triangle-area").value = "NaN"
  /* Get the value of the base and the vertical height */
  let base = Number(document.getElementById("triangle-base").value)
  let height = Number(document.getElementById("triangle-height").value)
}


/* Square Area */
function squareArea() {
  console.info("Calculate Square Area")
  /* Reset result area */
  document.getElementById("square-area").value = "NaN"
  /* Get the value of the length */
  let length = Number(document.getElementById("square-length").value)
}


/* Rectangle Area */
function rectangleArea() {
  console.info("Calculate Rectangle Area")
  /* Reset result area */
  document.getElementById("rectangle-area").value = "NaN"
  /* Get the value of the width and the height */
  let width = Number(document.getElementById("rectangle-width").value)
  let height = Number(document.getElementById("rectangle-height").value)
}