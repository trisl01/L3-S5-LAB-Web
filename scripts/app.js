window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    //window.location.reload()
    next()
  }
})

let newLab = "L5"
let nameRepo = "/L3-S5-LAB-Web/"

let dataPath
let newLabPath

fetch('/scripts/pathname.json')
  .then((response) => response.json())
  .then(function (data) {
    dataPath = data
    //console.log(dataPath)
    next()
  })

function next() {
  let recentlyOpen
  let currentPathname = pathnameWithoutNameFolder(document.location.pathname)

  if (currentPathname.length == 1 || currentPathname.startsWith("/index.html")) {
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
    if (currentPathname.endsWith("index.html")) {
      let newPathname = currentPathname
      for (let i = 0; i < 100; i++) {
        if (currentPathname == newPathname && currentPathname.startsWith("/Labwork-"+i+"/")) {
          newPathname = "/Labwork-"+i+"/"
        }
      }
      if (currentPathname == newPathname) {
        for (let i = 0; i < 100; i++) {
          if (currentPathname == newPathname && currentPathname.startsWith("/Quick-lab-"+i+"/")) {
            newPathname = "/Quick-lab-"+i+"/"
          }
        }
      }
      currentPathname = newPathname
    }
    sessionStorage.recentlyOpen = currentPathname
  }
}

function searchOnDataPathTable(data, search) {
  if (data[search] != null || data[search] != undefined) {
    return data[search]
  } else {
    return null
  }
}

function searchFromPathnameOnDataPathTable(data, pathname) {
  for(key in data) {
    if(data[key].pathname == pathnameWithoutNameFolder(pathname)) {
      return data[key]
    }
  }
  return null
}

function pathnameWithoutNameFolder(pathname) {
  if (pathname.startsWith(nameRepo)) {
    let path = window.location.pathname.split("/")
    let pathnameStr = "/"
    for (let i = 1; i < path.length; i++) {
      pathnameStr += path[i] + "/"
    }
    return pathnameStr
  } else {
    return pathname
  }
}