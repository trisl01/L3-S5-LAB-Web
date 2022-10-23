

/* Circle Area */
function circleArea() {
  console.info("Calculate Circle Area")
  /* Reset result area */
  document.getElementById("circle-area").value = "NaN"
  /* Get the value of the radius */
  let radius = Number(document.getElementById("circle-radius").value)

  /* Check input value */
  if (!isNaN(radius) && radius >= 0 && document.getElementById("circle-radius").value != '') {
    /* Remove class error */
    document.getElementById("circle-radius").classList.remove("error-input")
    /* Calculate area */
    let area = Math.PI * radius * radius
    console.log(`>> Circle's area = pi * ${radius} * ${radius} = ${area}`)
    /* Put the area in the input box */
    document.getElementById("circle-area").value = area
  } else {
    /* Display error */
    document.getElementById("circle-radius").classList.add("error-input")

    if (document.getElementById("circle-radius").value == '') {
      console.error("Circle's radius: Empty!")
    } else if (radius < 0){
      console.error("Circle's radius: Negative number!")
    } else {
      console.error("Circle's radius: Input not a number!")
    }
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
    /* Remove class error */
    document.getElementById("triangle-base").classList.remove("error-input")
    document.getElementById("triangle-height").classList.remove("error-input")
    /* Calculate area */
    let area = (base * height) / 2
    console.log(`>> Triangle's area = (${base} * ${height}) / 2 = ${area}`)
    /* Put the area in the input box */
    document.getElementById("triangle-area").value = area
  } else {
    /* Display error(s) */
    document.getElementById("triangle-base").classList.add("error-input")
    document.getElementById("triangle-height").classList.add("error-input")

    /* Display error (base only) */
    if (document.getElementById("triangle-base").value == '') {
      console.error("Triangle's base: empty!")
    } else if (base < 0) {
      console.error("Triangle's base: negative number!")
    } else if (isNaN(base)) {
      console.error("Triangle's base: input not a number!")
    } else {
      /* Remove class error */
      document.getElementById("triangle-base").classList.remove("error-input")
    }

    /* Display error (height only) */
    if (document.getElementById("triangle-height").value == '') {
      console.error("Triangle's vertical height: empty!")
    } else if (height < 0) {
      console.error("Triangle's vertical height: negative number!")
    } else if (isNaN(height)) {
      console.error("Triangle's vertical height: input not a number!")
    } else {
      /* Remove class error */
      document.getElementById("triangle-height").classList.remove("error-input")
    }
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
    /* Remove class error */
    document.getElementById("square-length").classList.remove("error-input")
    /* Calculate area */
    let area = length * length
    console.log(`>> Square's area = ${length} * ${length} = ${area}`)
    /* Put the area in the input box */
    document.getElementById("square-area").value = area
  } else {
    /* Display error */
    document.getElementById("square-length").classList.add("error-input")

    if (document.getElementById("square-length").value == '') {
      console.error("Square's length of side: Empty!")
    } else if (length < 0){
      console.error("Square's length of side: Negative number!")
    } else {
      console.error("Square's length of side: Input not a number!")
    }
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
    /* Remove class error */
    document.getElementById("rectangle-width").classList.remove("error-input")
    document.getElementById("rectangle-height").classList.remove("error-input")
    /* Calculate area */
    let area = width * height
    console.log(`>> Rectangle's area = ${width} * ${height} = ${area}`)
    /* Put the area in the input box */
    document.getElementById("rectangle-area").value = area
  } else {
    /* Display error(s) */
    document.getElementById("rectangle-width").classList.add("error-input")
    document.getElementById("rectangle-height").classList.add("error-input")

    /* Display error (width only) */
    if (document.getElementById("rectangle-width").value == '') {
      console.error("Rectangle's width: empty!")
    } else if (width < 0) {
      console.error("Rectangle's width: negative number!")
    } else if (isNaN(width)) {
      console.error("Rectangle's width: input not a number!")
    } else {
      /* Remove class error */
      document.getElementById("rectangle-width").classList.remove("error-input")
    }

    /* Display error (height only) */
    if (document.getElementById("rectangle-height").value == '') {
      console.error("Rectangle's height: empty!")
    } else if (height < 0) {
      console.error("Rectangle's height: negative number!")
    } else if (isNaN(height)) {
      console.error("Rectangle's height: input not a number!")
    } else {
      /* Remove class error */
      document.getElementById("rectangle-height").classList.remove("error-input")
    }
  }
}