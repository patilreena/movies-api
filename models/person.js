const mongoose = require('./base');
const Schema = mongoose.Schema;

const presonSchema = Schema({
  firstName: String,
  lastName: String
});

const Person = mongoose.model('Person', presonSchema);

var takuya = new Person({
  firstName: 'takuya',
  lastName: 'okamoto'
});

takuya.save().then(
  result => {
    console.log(result);
  },
  e => {
    console.log('error occured', e);
  }
);

module.exports = Person;
