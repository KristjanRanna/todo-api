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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // Delete all users where name: Kristjan
  // db.collection('Users').deleteMany({name: 'Kristjan'}).then((result) => {
  //   console.log(result);
  // });

  // Delete one user by id
  db.collection('Users').findOneAndDelete({ _id: ObjectID("5acdb9107fdd9e3eac609611")}).then((result) => {
    console.log(result);
  });

  // db.close();

});
