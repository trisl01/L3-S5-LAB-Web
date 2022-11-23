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
