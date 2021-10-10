"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deployment_controller_1 = __importDefault(require("../v1/controller/deployment.controller."));
const route = express_1.default.Router();
route.get('/deployment', deployment_controller_1.default.getDeployment);
route.post('/deployment', deployment_controller_1.default.createDeployment);
route.delete('/deployment/:id', deployment_controller_1.default.deleteDeployment);
exports.default = route;
