"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
// const { Book, Author, BookInstance, Genre } = require('../models')
const index = function (req, res) {
    // async.parallel(
    //   {
    //     bookCount(callback) {
    //       Book.countDocuments({}, callback)
    //     },
    //     bookInstance(callback) {
    //       BookInstance.countDocuments({}, callback)
    //     },
    //     bookInstancAvailableCount(callback) {
    //       BookInstance.countDocuments({ status: 'Available' }, callback)
    //     },
    //     authorCount(callback) {
    //       Author.countDocuments({}, callback)
    //     },
    //     genreCount(callback) {
    //       Genre.countDocuments({}, callback)
    //     },
    //   },
    //   function (err, results) {
    //     console.log(err)
    //     if (err) throw err
    //     console.log(results)
    //     res.send(results)
    //   },
    // )
    res.send('home Page ');
};
exports.index = index;
