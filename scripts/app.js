
let dataPath
fetch('/scripts/pathname.json')
  .then((response) => response.json())
  .then(function (data) {
    dataPath = data
    //console.log(dataPath)
    next()
  })

function next() {
  let recentlyOpen

  if (document.location.pathname.length == 1 || document.location.pathname.startsWith("/index.html")) {
    newLabPath = searchOnDataPathTable(dataPath, newLab)
    document.getElementById("new-lab-label").innerHTML = newLabPath["name"]
    document.getElementById("new-lab").setAttribute('href', newLabPath["pathname"])
    //console.log(sessionStorage.recentlyOpen)
    if (sessionStorage.recentlyOpen != null) {
      recentlyOpen = sessionStorage.recentlyOpen
      document.getElementById("recent-lab").style.visibility = "visible"
      let recentlyOpenObj = searchFromPathnameOnDataPathTable(dataPath, recentlyOpen)
      document.getElementById("recent-lab-label").innerHTML = recentlyOpenObj["name"]
      document.getElementById("recent-lab").setAttribute('href', recentlyOpenObj["pathname"])
    } else {
      document.getElementById("recent-lab").style.visibility = "hidden"
    }
  } else {
    let pathname = document.location.pathname
    if (document.location.pathname.endsWith("index.html")) {
      let newPathname = pathname
      for (let i = 0; i < 100; i++) {
        if (pathname == newPathname && document.location.pathname.startsWith("/Labwork-"+i+"/")) {
          newPathname = "/Labwork-"+i+"/"
        }
      }
      if (pathname == newPathname) {
        for (let i = 0; i < 100; i++) {
          if (pathname == newPathname && document.location.pathname.startsWith("/Quick-lab-"+i+"/")) {
            newPathname = "/Quick-lab-"+i+"/"
          }
        }
      }
      pathname = newPathname
    }
    sessionStorage.recentlyOpen = pathname
  }
}

function searchOnDataPathTable(data, search) {
  if (data[search] != null || data[search] != undefined) {
    return data[search]
  } else {
    return null
  }
}
