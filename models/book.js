const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//created a book model
const Book = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_date: { type: String, required: true },
    publisher_id: {type: Schema.Types.ObjectId, ref: 'publisher_id'},
  },
  {timestamps: true},
);


module.exports = mongoose.model('book', Book);


//mongoose will create a name for the publisher.js file and it will give the file a unique id. This is how Book Schema will reference Publisher Schema in the publisher.js
//We don’t have to add required:true for publisher_id because of Schema and mongoose already creates the id