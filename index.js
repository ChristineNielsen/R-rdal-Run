const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const fetch = require('node-fetch');

//Sætter view engine til ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Definerer root mappe til css referencer m.m.
app.use(express.static(__dirname + '/'));
app.use(cookieparser());

//Route til forside
app.get("/", async (req, res) => {
    // Venter på fetch resultat og assigner det til konstanten requestToApi
    const requestToApi = await fetch('https://api.mediehuset.net/rordal/pages/1');
    const requestToApi2 = await fetch('https://api.mediehuset.net/rordal/pages/4');
    const requestToApi3 = await fetch('https://api.mediehuset.net/rordal/run');
    
    // Konverterer fetch resultat til json format og assigner det til konstanten apiResponse
    const apiResponse = await requestToApi.json(); 
    console.log(apiResponse) 
    const apiResponse2 = await requestToApi2.json(); 
    console.log(apiResponse2) 
    const apiResponse3 = await requestToApi3.json(); 
    console.log(apiResponse3) 

    return res.render("pages/index", {
       info: apiResponse,
       info2: apiResponse2,
       info3: apiResponse3
      });
});

app.get("/distancer", async (req, res) => {
    // Venter på fetch resultat og assigner det til konstanten requestToApi
    const requestToApi = await fetch('https://api.mediehuset.net/rordal/pages/2');
    const requestToApi2 = await fetch('https://api.mediehuset.net/rordal/run');

    const apiResponse = await requestToApi.json(); 
    console.log(apiResponse) 
    const apiResponse2 = await requestToApi2.json(); 
    console.log(apiResponse2) 

    return res.render('pages/distancer', {
        distance: apiResponse,
        distance2: apiResponse2
    });
});

app.get("/deltagerliste", (req, res) => {
    res.render('pages/deltagerliste');
});

app.get("/tilmelding", (req, res) => {
    res.render('pages/tilmelding');
});

app.get("/login", (req, res) => {
    res.render('pages/login');
});

//404 meddelelse
app.use(function(req, res, next) {
    res.status(404).send(
        res.render('pages/404')   
    );
});

//Angiver port der skal lyttes på
app.listen(3000, () => {
    console.log("Express server kører...");
});