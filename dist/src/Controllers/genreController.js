"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreUpdatePost = exports.genreUpdateGet = exports.genreDeletePost = exports.genreDeleteGet = exports.genreCreatePost = exports.genreCreateGet = exports.genreDetail = exports.genreList = void 0;
// const { Book, Genre } = require('../models')
const genreList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Genre.find()
    //   .sort([['name']])
    //   .exec(function (err, listGenre) {
    //     if (err) {
    //       console.log(err)
    //       return next(err)
    //     }
    //     res.send(listGenre)
    //   })
    res.send('NOT IMPLEMENTED: Genre List GET');
});
exports.genreList = genreList;
const genreDetail = (req, res, next) => {
    // async.parallel(
    //   {
    //     genre(callback) {
    //       Genre.findById(req:Req.para:Resms.id).exec(callback)
    //     },
    //     genreBooks(callback) {
    //       Book.find({ genre: req.params.id }).exec(callback)
    //     },
    //   },
    //   function (err, results) {
    //     if (err) return next(err)
    //     if (results.genre == null) {
    //       var err = new Error('Genre not found')
    //       err.status = 404
    //       return next(err)
    //     }
    //     res.send(results)
    //   },
    // )
    res.send('NOT IMPLEMENTED: Genre detail GET');
};
exports.genreDetail = genreDetail;
const genreCreateGet = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create GET');
};
exports.genreCreateGet = genreCreateGet;
const genreCreatePost = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create POST');
};
exports.genreCreatePost = genreCreatePost;
const genreDeleteGet = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};
exports.genreDeleteGet = genreDeleteGet;
const genreDeletePost = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};
exports.genreDeletePost = genreDeletePost;
const genreUpdateGet = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update GET');
};
exports.genreUpdateGet = genreUpdateGet;
const genreUpdatePost = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update POST');
};
exports.genreUpdatePost = genreUpdatePost;
