const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5ad0447ec96306220f87bee7';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
//
// // If it doesn't find the id then it returns empty array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// // Returns null if can't find the id
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// // Returns null if can't find the id, so added !todo console log
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5ace6fb157d90c529e023fcd';

User.findById(userId).then((user) => {
  if(!userId) {
    return console.log('Cannot find user ID');
  }
  console.log('Found the user', user);
}).catch((e) => console.log(e));
