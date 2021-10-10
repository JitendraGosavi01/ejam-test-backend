import express from 'express'
import Deployment from '../v1/controller/deployment.controller.'
const route = express.Router()

route.get('/deployment', Deployment.getDeployment)
route.post('/deployment', Deployment.createDeployment)
route.delete('/deployment/:id', Deployment.deleteDeployment)

export default route