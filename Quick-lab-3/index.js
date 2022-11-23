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
