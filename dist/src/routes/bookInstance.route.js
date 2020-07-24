"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers");
const router = express_1.default.Router();
// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/create', Controllers_1.bookInstanceController.bookInstanceCreateGet);
// GET request for list of all BookInstance.
router.get('/list', Controllers_1.bookInstanceController.bookInstanceList);
// POST request for creating BookInstance.
router.post('/create', Controllers_1.bookInstanceController.bookInstanceCreateGet);
// GET request to delete BookInstance.
router.get('/:id/delete', Controllers_1.bookInstanceController.bookInstanceDeleteGet);
// POST request to delete BookInstance.
router.post('/:id/delete', Controllers_1.bookInstanceController.bookInstanceDeletePost);
// GET request to update BookInstance.
router.get('/:id/update', Controllers_1.bookInstanceController.bookInstanceUpdatePost);
// POST request to update BookInstance.
router.post('/:id/update', Controllers_1.bookInstanceController.bookInstanceUpdatePost);
// GET request for one BookInstance.
router.get('/:id', Controllers_1.bookInstanceController.bookInstanceDetail);
exports.default = router;
