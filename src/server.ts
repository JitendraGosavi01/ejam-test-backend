import express, { Application, json, Request, Response, urlencoded, } from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app: Application = express()
app.use(urlencoded())
app.use(json())
app.use(cors())
const port = 4000 || process.env.PORT
import deployment from './api/routes/deployment.route'
mongoose.connect(`mongodb+srv://Jeet:Jeet@1991@freecluster.ehj5s.mongodb.net/ejam-test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error"))
db.once('open', function () {
    console.log("Database connected..")
})
app.get('/hello', (req: Request, res: Response): void => {
    res.send("Hello there!")
})

app.use('/v1/', deployment)


app.listen(port, (): void => {
    console.log(`server listening on http://localhost:${port}`);
})
