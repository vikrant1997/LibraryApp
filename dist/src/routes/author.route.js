"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers");
const router = express_1.default.Router();
/// AUTHOR ROUTES ///
// GET request for list of all Authors.
router.get('/list', Controllers_1.authController.authorList);
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/create', Controllers_1.authController.authorCreateGet);
// POST request for creating Author.
router.post('/create', Controllers_1.authController.authorCreatePost);
// GET request to delete Author.
router.get('/:id/delete', Controllers_1.authController.authorDeleteGet);
// POST request to delete Author.
router.post('/:id/delete', Controllers_1.authController.authoreDeltePost);
// GET request to update Author.
router.get('/:id/update', Controllers_1.authController.authorUpdateGet);
// POST request to update Author.
router.post('/:id/update', Controllers_1.authController.authorUpdatePost);
// GET request for one Author.
router.get('/:id', Controllers_1.authController.authorDetail);
exports.default = router;
