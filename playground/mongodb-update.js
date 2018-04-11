// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5acddaaa90eb2d135e0d21b9')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5acdb9692e26253f080f898d')
  }, {
    $set: {
      name: 'Kate'
    },
    $inc: {
      "age": 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();

});
