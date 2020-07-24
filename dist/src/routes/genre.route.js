"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers");
const router = express_1.default.Router();
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/create', Controllers_1.genreController.genreCreateGet);
// GET request for list of all Genre.
router.get('/list', Controllers_1.genreController.genreList);
// POST request for creating Genre.
router.post('/create', Controllers_1.genreController.genreCreatePost);
// GET request to delete Genre.
router.get('/:id/delete', Controllers_1.genreController.genreDeleteGet);
// POST request to delete Genre.
router.post('/:id/delete', Controllers_1.genreController.genreDeletePost);
// GET request to update Genre.
router.get('/:id/update', Controllers_1.genreController.genreUpdateGet);
// POST request to update Genre.
router.post('/:id/update', Controllers_1.genreController.genreCreatePost);
// GET request for one Genre.
router.get('/:id', Controllers_1.genreController.genreDetail);
exports.default = router;
