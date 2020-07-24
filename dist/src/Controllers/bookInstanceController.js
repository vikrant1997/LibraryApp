"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookInstanceUpdatePost = exports.bookInstanceUpdateGet = exports.bookInstanceDeletePost = exports.bookInstanceDeleteGet = exports.bookInstanceCreatePost = exports.bookInstanceCreateGet = exports.bookInstanceDetail = exports.bookInstanceList = void 0;
const bookInstanceList = (req, res) => {
    // BookInstance.find()
    //   .populate('book')
    //   .exec(function (err, listInsatances) {
    //     if (err) {
    //       return next(err)
    //     }
    //     res.send(listInsatances)
    //   })
    res.send('NOT IMPLEMENTED: BookInstance list');
};
exports.bookInstanceList = bookInstanceList;
const bookInstanceDetail = (req, res) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};
exports.bookInstanceDetail = bookInstanceDetail;
const bookInstanceCreateGet = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};
exports.bookInstanceCreateGet = bookInstanceCreateGet;
const bookInstanceCreatePost = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};
exports.bookInstanceCreatePost = bookInstanceCreatePost;
const bookInstanceDeleteGet = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};
exports.bookInstanceDeleteGet = bookInstanceDeleteGet;
const bookInstanceDeletePost = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};
exports.bookInstanceDeletePost = bookInstanceDeletePost;
const bookInstanceUpdateGet = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};
exports.bookInstanceUpdateGet = bookInstanceUpdateGet;
const bookInstanceUpdatePost = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};
exports.bookInstanceUpdatePost = bookInstanceUpdatePost;
