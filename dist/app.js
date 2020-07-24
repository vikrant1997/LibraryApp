"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = express_1.default();
// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/libraryDB';
mongoose_1.default.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
// Get the default connection
const db = mongoose_1.default.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('We are connected to Mongoose!!!');
});
//  view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(routes_1.default);
// catch 404 and forward to error handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(function (err, req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
