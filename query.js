const db = require('./db');
const Publisher = require('./models/publisher');
const Book = require('./models/book');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//C.R.U.D actions
//Create a book
// const createNewBook = async () => {
//   const newBook = await Book.insertMany({ title: '28 Summers', author: 'Hilderbrand', published_date: '2021', publisher_id: penguinBooks[0]._id })

//   console.log("Added book 28 Summers", newBook);
// };




//Read a book


//Update a book


//Delete a book




//Find a book
const findAll = async () => {
  const allBooks = await Book.find();
  const allPublishers = await Publisher.find();
  console.log("Show all books", allBooks, allPublishers);
}

const findBook = async () => {
  const thePowerOfNow = await Book.find({
    title: "The Power of Now"
  })
  console.log(thePowerOfNow)
}






const run = async () => {
  // await createPublisher();
  // await createNewBook();

  // await findBook();
  await findAll();

  process.exit()  
}
run()


//node query.js

//you need two terminal one for mongo and the other for MongoDB-data-model

//in mongo terminal used: show dbs
//in folder terminal use seed to create the newly database or existed database in the mongodb: node seed/books 