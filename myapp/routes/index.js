var express = require('express');
var router = express.Router();
var {welcomeUser} = require("../utils/modulePractice")
var booksData = require("../../books-data")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/books", function ( req, res, next) {
  res.render("index", { title: "Book Library", booksData: booksData.books});
});
router.get("/books/:id", function ( req, res, next) {
  const selectedBook = booksData.books.filter((item) => item.isbn === req.params.id)
  res.render("book-details", { title: "Book Details", booksData: selectedBook[0]});
});

router.get("/books/delete/:id", function ( req, res, next) {
  const deletedBook = booksData.books.filter((item) => item.isbn === req.params.id)
  res.render("delete-details", { title: "Delete Details", booksData: deletedBook[0]});
});
router.delete("/books/delete/:id", function ( req, res, next) {
  const deletedBook = booksData.books.filter((item) => item.isbn === req.params.id)
  res.send(`Resource with id: ${deleteBook[0].isbn}`);
});

router.get("/book/:user", function(req, res, next){
  const welcomeMessage = welcomeUser(req.params.user);
  res.render("about", {title: req.params.user, message: welcomeUser});
});
router.get("/foods", function (req, res, next) {
  res.render("index", {title: "Food"});
});


module.exports = router;
