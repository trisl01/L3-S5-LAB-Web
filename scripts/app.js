
let dataPath
fetch('/scripts/pathname.json')
  .then((response) => response.json())
  .then(function (data) {
    dataPath = data
  })
