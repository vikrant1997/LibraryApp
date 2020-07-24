"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookUpdatePost = exports.bookUpdateGet = exports.bookDeletePost = exports.bookDeleteGet = exports.bookCreatePost = exports.bookCreateGet = exports.bookDetail = exports.bookList = exports.index = void 0;
// const { BookInstance, Book } = require('../models')
const index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};
exports.index = index;
const bookList = function (req, res, next) {
    // Book.find({}, 'title author')
    //   .populate('author')
    //   .exec(function (err, list_books) {
    //     if (err) {
    //       console.log(err)
    //       return :Next
    //     }
    //     res.send(list_books)
    //   })
    res.send('NOT IMPLEMENTED: Book list');
};
exports.bookList = bookList;
const bookDetail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail GET');
    // async.parallel(
    //   {
    //     book(callback) {
    //       Book.findById(req:Req.para:Resms.id)
    //         .populate('author')
    //         .populate('genre')
    //         .exec(callback)
    //     },
    //     bookInstance(callback) {
    //       BookInstance.find({ book: req.params.id }).exec(callback)
    //     },
    //   },
    //   function (err, results) {
    //     if (err) {
    //       return next(err)
    //     }
    //     if (results.book == null) {
    //       var err = new Error('Book not found')
    //       err.status = 404
    //       return next(err)
    //     }
    //     res.send(results)
    //   },
    // )
};
exports.bookDetail = bookDetail;
const bookCreateGet = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};
exports.bookCreateGet = bookCreateGet;
const bookCreatePost = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};
exports.bookCreatePost = bookCreatePost;
const bookDeleteGet = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};
exports.bookDeleteGet = bookDeleteGet;
const bookDeletePost = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};
exports.bookDeletePost = bookDeletePost;
const bookUpdateGet = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};
exports.bookUpdateGet = bookUpdateGet;
const bookUpdatePost = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
exports.bookUpdatePost = bookUpdatePost;
