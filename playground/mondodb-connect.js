// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


// var user = {name: 'Kristjan', age: 23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     console.log('Unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Kristjan',
  //   age: 23,
  //   location: 'Elva'
  // }, (err, result) => {
  //   if(err) {
  //     console.log('Unable to insert Users', err);
  //   } else {
  //     // console.log(JSON.stringify(result.ops, undefined, 2));
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });

  db.close();
});
