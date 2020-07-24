"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorUpdatePost = exports.authorUpdateGet = exports.authoreDeltePost = exports.authorDeleteGet = exports.authorCreatePost = exports.authorCreateGet = exports.authorDetail = exports.authorList = void 0;
const authorList = (req, res) => {
    // Author.find()
    //   .populate('author')
    //   .sort([['familyName ', 'ascending']])
    //   .exec(function (err, listAuthors) {
    //     if (err) {
    //       return next(err)
    //     }
    //     res.send(listAuthors)
    //   })
    res.send('Not Implemented: Author List GET');
};
exports.authorList = authorList;
const authorDetail = (req, res) => {
    res.send(`Not Implemented: Author Detail ${req.params.id} ${req.params.id}`);
};
exports.authorDetail = authorDetail;
const authorCreateGet = (req, res) => {
    res.send('Not Implemented: Author create GET');
};
exports.authorCreateGet = authorCreateGet;
const authorCreatePost = (req, res) => {
    res.send('Not Implemented: Author create POST');
};
exports.authorCreatePost = authorCreatePost;
const authorDeleteGet = (req, res) => {
    res.send('Not Implemented: Author delete GET');
};
exports.authorDeleteGet = authorDeleteGet;
const authoreDeltePost = (req, res) => {
    res.send('Not Implemented: Author delte POST');
};
exports.authoreDeltePost = authoreDeltePost;
const authorUpdateGet = (req, res) => {
    res.send('Not Implemented: Author update GET');
};
exports.authorUpdateGet = authorUpdateGet;
const authorUpdatePost = (req, res) => {
    res.send('Not Implemented:Author update POST');
};
exports.authorUpdatePost = authorUpdatePost;
