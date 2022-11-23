//! ---------------------------------------------
//?  Setup
//! ---------------------------------------------

//? Open Thunder Client on VSCode to call the requests

import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

//? Display in the console
app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
    //console.log(data);
});


//! ---------------------------------------------
//?  GET Requests
//! ---------------------------------------------

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>ExpressJS App: The root</h1>');
});

// URL => http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('<h1>About Express</h1>');
});

// URL => http://localhost:3000/users
app.get("/users", (req, res) => {
    res.json(data);
});
// URL => http://localhost:3000/users/34
app.get("/users/:userId", (req, res) => {
    console.log(req.params);
    res.send("User ID: " + req.params.userId);
});

// http://localhost:3000/members/28/age/47
app.get("/members/:memberId/age/:age", (req, res) => {
    console.log(req.params);
    const memberId = Number(req.params.memberId);
    const memberAge = Number(req.params.age);
    res.send(`Member ID: ${memberId} <br> Member Age: ${memberAge}`);
});
// http://localhost:3000/employees/12
app.get("/employees/:id", (req, res) => {
    const empId = Number(req.params.id);
    const employee = data.filter((employee) => {
        return employee.id === empId;
    });
    res.send(employee);
});
// http://localhost:3000/workers/12
app.get("/workers/:id/", (req, res) => {
    const workerId = Number(req.params.id);
    const worker = data.filter((element) => element.id === workerId);
    res.send(worker);
});


//! ---------------------------------------------
//?  POST Requests
//! ---------------------------------------------

// URL => http://localhost:3000/create
app.post("/create", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});


//! ---------------------------------------------
//?  PUT Requests
//! ---------------------------------------------

// URL => http://localhost:3000/update
app.put("/update", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});


//! ---------------------------------------------
//?  DELETE Requests
//! ---------------------------------------------

// URL => http://localhost:3000/delete
app.delete("/delete", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});


//! ---------------------------------------------
//?  Call next response
//! ---------------------------------------------

// URL => http://localhost:3000/next 
app.get("/next", (req, res, next) => {
    console.log("Practising next() function as the first response (first route callback)!");
    next(); 
  }, (req, res) => {
    res.send("Practising next() function as the second and last response (second route callback)!");
    console.log("Practising next() function as the second and last response (second route callback)!");
});


//! ---------------------------------------------
//?  Download file
//! ---------------------------------------------

// URL => http://localhost:3000/file
app.get('/file', (req, res) => {
    res.download('data/info.txt');
});


//! ---------------------------------------------
//?  Status page
//! ---------------------------------------------

// URL => http://localhost:3000/status
app.get('/status', (req, res) => {
    res.sendStatus(404); // Not Found
});


//! ---------------------------------------------
//?  Redirection
//! ---------------------------------------------

// URL => http://localhost:3000/redirect
app.get('/redirect', (req, res) => {
    res.redirect('https://expressjs.com/'); // Going to another website
});

// URL => http://localhost:3000/apple
app.get('/apple', (req, res) => {
    res.redirect('https://www.apple.com/'); // Going to another website
});


//! ---------------------------------------------
//?  Route Chaining
//! ---------------------------------------------

//? Boring way:

// URL => http://localhost:3000/crud
app.get('/crud', (req, res) => {
    res.send('Practising .get() HTTP method for "Read/Retrieve"');
});
app.post("/crud", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});
app.put("/crud", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});
app.delete("/crud", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});


//? Best way:

// URL => http://localhost:3000/book
app.route('/book')
  .get((req, res) => {
    res.send('Retrieve a book [READ] using .get() HTTP method');
  })
  .post((req, res) => {
    res.send('Add a book [CREATE] using .post() HTTP method');
  })
  .put((req, res) => {
  res.send('Update the book [UPDATE] using .post() HTTP method');
})


//! ---------------------------------------------
//?  Express Static
//! ---------------------------------------------

/*
http://localhost:3000/img/dish1.jpg
http://localhost:3000/img/dish2.jpg
http://localhost:3000/img/dish3.jpg
*/
app.use(express.static('public'));

// Example1: http://localhost:3000/img/dish1.jpg
app.use('/img', express.static('img'));
