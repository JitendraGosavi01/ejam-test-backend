import mongoose, { Schema } from 'mongoose'

const deploy: Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: { type: String, required: true },
    templateName: { type: String, required: true },
    version: { type: String, required: true },
    deployed: { type: Date, default: Date.now }
})


export default mongoose.model('Deployment', deploy)