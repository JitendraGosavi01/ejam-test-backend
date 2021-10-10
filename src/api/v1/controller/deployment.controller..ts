import { Request, Response } from "express"
import mongoose, { Error } from "mongoose"
import DeploymentModel from "../../models/Deployment.model"

class Deployment {
    constructor() {

    }

    static createDeployment(req: Request, res: Response) {
        let deployment = new DeploymentModel({
            _id: mongoose.Types.ObjectId(),
            url: req.body.url,
            templateName: req.body.templateName,
            version: req.body.version,

        })

        deployment.save()
            .then((doc: Document) => {
                res.status(200).json({
                    message: 'Deployment created successfully',
                    data: doc
                })
            }).catch((err: Error) => {
                res.status(500).json({
                    message: 'Invalid data',
                    data: err.stack
                })
            })
    }

    static async getDeployment(req: Request, res: Response) {
        const deployment = await DeploymentModel.find().exec()
        if (!deployment) return res.status(500).json({ message: 'invalid deployment', data: [] })
        res.status(200).json({ message: "available deployments", data: deployment })
    }

    static async deleteDeployment(req: Request, res: Response) {
        const deploymentToDelete = await DeploymentModel.findById(req.params.id)
        await deploymentToDelete.remove()
        if (!deploymentToDelete) return res.status(500).json({ message: 'invalid deployment', data: {} })
        res.status(200).json({ message: 'Deployment deleted successfully..', data: deploymentToDelete })
    }

}


export default Deployment