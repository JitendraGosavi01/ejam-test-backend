"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
const app = (0, express_1.default)();
app.use((0, express_1.urlencoded)());
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
const port = process.env.PORT || 4000;
const deployment_route_1 = __importDefault(require("./api/routes/deployment.route"));
mongoose_1.default.connect(`mongodb+srv://Jeet:${process.env.DB_PASSWORD}@freecluster.ehj5s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, "Connection error"));
db.once('open', function () {
    console.log("Database connected..");
});
app.get('/hello', (req, res) => {
    res.send("Hello there!");
});
app.use('/v1/', deployment_route_1.default);
app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
});
