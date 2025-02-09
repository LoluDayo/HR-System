import express, {Application, Request, Response} from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';


dotenv.config()

const app: Application = express();

const PORT = process.env.PORT || 5000

app.get("/", (req: Request, res:Response) =>{
    res.send("Server is ready")
})

app.listen(PORT, () => {
    connectDB()
    console.log("Sever started at http://localhost:" + PORT)
})

// GebIhbuopM0fIdAs