const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     console.log(req);


// });


//ROUTE PARAMS
// the ":username" is the param and also the key of the object.
// you then type in anything in place of the ":username" and you will get {username: typedInfo}
//http://localhost:3000/users/big stinky  → {username: "big stinky"}
app.get('/users/:username', (req, res, next) => {
    res.send(req.params);
  });

//another example
  app.get('/books/:bookId', (req, res, next) => {
    res.send(req.params);
  });

//mutliple key value pair example (params)
// example: http://localhost:3000/city/PGH/zipcodes/15220 → {"cityName": "PGH","zipcode": "15220"}
app.get(`/city/:cityName/zipcodes/:zipcode`, (req, res, next)=> {
    res.send(req.params);
})

//=============

//QUERY STRING

app.get(`/search`, (req, res, next) => {
    res.send(req.query);
})


//setting up the thing to render 
//ULTRA IMPORTANT!!!!! YOU CAN ONLY HAVE A ROUTE DEFINED ONCE ! OR THERE IS CONFLICT IF YOU TRY TO DO THE SECOND DECLARATION
 app.get('/', (req, res, next) => {
    res.render('index');
  });





app.listen(3000, () => console.log('App listening on port 3000!'));


