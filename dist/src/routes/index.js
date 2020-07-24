"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homePage_route_1 = __importDefault(require("./homePage.route"));
const book_route_1 = __importDefault(require("./book.route"));
const genre_route_1 = __importDefault(require("./genre.route"));
const author_route_1 = __importDefault(require("./author.route"));
const bookInstance_route_1 = __importDefault(require("./bookInstance.route"));
const router = express_1.Router();
router.get('/', homePage_route_1.default);
router.use('/book', book_route_1.default);
router.use('/genre', genre_route_1.default);
router.use('/author', author_route_1.default);
router.use('/bookInstance', bookInstance_route_1.default);
exports.default = router;
