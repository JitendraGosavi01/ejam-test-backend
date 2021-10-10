"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deploy = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    url: { type: String, required: true },
    templateName: { type: String, required: true },
    version: { type: String, required: true },
    deployed: { type: Date, default: Date.now }
});
exports.default = mongoose_1.default.model('Deployment', deploy);
