var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var schema = new Schema({
  name: {type: String},
  city: {type: String},
  address: {type: String},
  content: {type: String},
  fee: {type: String},
  facility: {type: String},
  rule: {type: String},
  createdAt: {type: Date, default: Date.now},
  read: {type: Number, default: 0}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Task = mongoose.model('Task', schema);

module.exports = Task;