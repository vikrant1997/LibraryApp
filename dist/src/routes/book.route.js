"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers");
const router = express_1.default.Router();
router.get('/', Controllers_1.bookController.index);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/create', Controllers_1.bookController.bookCreateGet);
// POST request for creating Book.
router.post('/create', Controllers_1.bookController.bookCreateGet);
// GET request for list of all Book items.
router.get('/list', Controllers_1.bookController.bookList);
// GET request to delete Book.
router.get('/:id/delete', Controllers_1.bookController.bookDeleteGet);
// POST request to delete Book.
router.post('/:id/delete', Controllers_1.bookController.bookDeletePost);
// GET request to update Book.
router.get('/:id/update', Controllers_1.bookController.bookUpdateGet);
// POST request to update Book.
router.post('/:id/update', Controllers_1.bookController.bookUpdatePost);
// GET request for one Book.
router.get('/:id', Controllers_1.bookController.bookDetail);
exports.default = router;
