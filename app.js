const express = require('express');
const axios =require('axios');
const server = express();
const mongo = require('./mongo');

var fact;

server.post('/number', (req, res) => {
  var input  = req.query.number;
  var link1= `http://numbersapi.com/${input}/`;
  axios
.get(link1)
.then(response => {
 console.log(response.data);

    pokedata = new mongo({
      number: input,
      fact: response.data
     });

      pokedata.
      save()
      .then(result => {
      })
      .catch(error=>{
      })
})

  res.status(200).send(input);
});

server.get('/history', (req, res) => {
  mongo.find()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(error => {
      console.log('Mongoose read error: ', error);
      res.status(400).send(error);
    });
});
server.get('/deleteall', (req, res) => {
  mongo.deleteMany({})
  .then((response)=>{
    res.status(200).send(response);
  })
  .catch((error)=>{
    res.status(400).send(error);
  })
});


server.listen(5000, () => {
  console.log(`server listen on port 5000`);

});
