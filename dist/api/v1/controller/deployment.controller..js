"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Deployment_model_1 = __importDefault(require("../../models/Deployment.model"));
class Deployment {
    constructor() {
    }
    static createDeployment(req, res) {
        let deployment = new Deployment_model_1.default({
            _id: mongoose_1.default.Types.ObjectId(),
            url: req.body.url,
            templateName: req.body.templateName,
            version: req.body.version,
        });
        deployment.save()
            .then((doc) => {
            res.status(200).json({
                message: 'Deployment created successfully',
                data: doc
            });
        }).catch((err) => {
            res.status(500).json({
                message: 'Invalid data',
                data: err.stack
            });
        });
    }
    static getDeployment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deployment = yield Deployment_model_1.default.find().exec();
            if (!deployment)
                return res.status(500).json({ message: 'invalid deployment', data: [] });
            res.status(200).json({ message: "available deployments", data: deployment });
        });
    }
    static deleteDeployment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deploymentToDelete = yield Deployment_model_1.default.findById(req.params.id);
            yield deploymentToDelete.remove();
            if (!deploymentToDelete)
                return res.status(500).json({ message: 'invalid deployment', data: {} });
            res.status(200).json({ message: 'Deployment deleted successfully..', data: deploymentToDelete });
        });
    }
}
exports.default = Deployment;
