const mongoose = require('mongoose');
const db = 'mongodb://tanez123:tanez123@ds117834.mlab.com:17834/maths';

mongoose
.connect (db,{useNewUrlParser: true})
.then(()=>{
    console.log('Connected to mongodb');
})
.catch((error)=>{
console .log('Connection mongobd error: ', error);
});

const column = new mongoose.Schema({
    number: {type: String},
    fact: {type: String},

});

const mongo = mongoose.model('number', column, 'numberfact');

module.exports = mongo;
