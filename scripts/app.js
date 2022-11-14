window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    //window.location.reload()
    next()
  }
})

let newLab = "L5"
let nameRepo = "/L3-S5-LAB-Web"

let nameJsonPathname = "/scripts/pathname.json"
if (document.location.pathname.includes(nameRepo)) {
  nameJsonPathname = nameRepo + nameJsonPathname
} else {
  nameJsonPathname = nameJsonPathname
}

let dataPath
let newLabPath

fetch(nameJsonPathname)
  .then((response) => response.json())
  .then(function (data) {
    dataPath = data
    //console.log(dataPath)
    next()
  })

function next() {
  let recentlyOpen
  let currentPathname = pathnameWithoutNameRepo(document.location.pathname)

  if (currentPathname.length == 1 || currentPathname.startsWith("/index.html") || currentPathname.endsWith(nameRepo + "/") || currentPathname.startsWith(nameRepo + "/index.html")) {
    newLabPath = searchOnDataPathTable(dataPath, newLab)
    document.getElementById("new-lab-label").innerHTML = newLabPath["name"]
    if (currentPathname.startsWith(nameRepo)) {
      document.getElementById("new-lab").setAttribute('href', nameRepo + newLabPath["pathname"])
    } else {
      document.getElementById("new-lab").setAttribute('href', newLabPath["pathname"])  
    }
    //console.log(localStorage.getItem("recentlyOpen"))
    if (localStorage.getItem("recentlyOpen") != null) {
      recentlyOpen = localStorage.getItem("recentlyOpen")
      document.getElementById("recent-lab").style.visibility = "visible"
      let recentlyOpenObj = searchFromPathnameOnDataPathTable(dataPath, recentlyOpen)
      document.getElementById("recent-lab-label").innerHTML = recentlyOpenObj["name"]
      if (currentPathname.startsWith(nameRepo)) {
        document.getElementById("recent-lab").setAttribute('href', nameRepo + recentlyOpenObj["pathname"])
      } else {
        document.getElementById("recent-lab").setAttribute('href', recentlyOpenObj["pathname"])
      }
    } else {
      document.getElementById("recent-lab").style.visibility = "hidden"
    }
  } else {
    if (currentPathname.endsWith("/index.html")) {
      let newPathname = currentPathname
      for (let i = 0; i < 100; i++) {
        if (currentPathname == newPathname && currentPathname.startsWith("/Labwork-"+i+"/") && currentPathname.startsWith(nameRepo + "/Labwork-"+i+"/")) {
          newPathname = "/Labwork-"+i+"/"
        }
      }
      if (currentPathname == newPathname) {
        for (let i = 0; i < 100; i++) {
          if (currentPathname == newPathname && currentPathname.startsWith("/Quick-lab-"+i+"/") && currentPathname.startsWith(nameRepo + "/Quick-lab-"+i+"/")) {
            newPathname = "/Quick-lab-"+i+"/"
          }
        }
      }
      currentPathname = newPathname
    } else {
      if (currentPathname.startsWith(nameRepo)) {
        currentPathname = currentPathname.substring(nameRepo.length)
      }
    }
    localStorage.setItem("recentlyOpen", currentPathname)
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
    if(data[key].pathname == pathnameWithoutNameRepo(pathname)) {
      return data[key]
    }
  }
  return null
}

function pathnameWithoutNameRepo(pathname) {
  if (pathname == null) {
    return ""
  }
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