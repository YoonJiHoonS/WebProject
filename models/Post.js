var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var schema = new Schema({
  name: {type: String},
  city: {type: String},
  address: {type: String},
  password: {type: String},
  content: {type: String},
  facility: {type: String},
  fee: {type: Number, default: 0},
  rule: {type: String},
  createdAt: {type: Date, default: Date.now},
  read: {type: Number, default: 0}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Post = mongoose.model('Post', schema);

module.exports = Post;