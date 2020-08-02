"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const middleware_1 = require("./middleware");
const app = express_1.default();
app.use(morgan_1.default('dev'));
// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/libraryDB';
mongoose_1.default
    .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch((err) => middleware_1.Logger.warn(err));
// Get the default connection
const db = mongoose_1.default.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', (err) => middleware_1.Logger.warn(err));
db.once('open', () => {
    middleware_1.Logger.info(`We are connected to Mongoose at ${mongoDB}!!!`);
});
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(routes_1.default);
app.use(middleware_1.errorMiddleware);
exports.default = app;
