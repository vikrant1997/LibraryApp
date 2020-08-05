"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const providers_1 = require("./providers");
const middleware_1 = require("./middleware");
providers_1.Database.init();
const app = express_1.default();
const winstonLogger = new middleware_1.Logger('app');
app.use(morgan_1.default('short', { stream: winstonLogger.stream }));
// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.prettyPrint(),
//       winston.format.timestamp(),
//       winston.format.align(),
//       winston.format.json(),
//       winston.format.padLevels(),
//     ),
//     msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//     meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//     expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//     colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//     ignoreRoute(req, res) {
//       return false
//     }, // optional: allows to skip some log messages based on request and/or response
//   }),
// )
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(routes_1.default);
app.use(middleware_1.errorMiddleware);
exports.default = app;
