const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5ad19606b94f9ac0f1840bf8'}).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove('5ad19606b94f9ac0f1840bf8').then((todo) => {
//   console.log(todo);
// });
