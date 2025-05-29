import express from "express"
import dotenv from "dotenv"
import cors  from "cors"
import connectDB from "./db/dbindex.js"
import routes from "./routes/studnetRoutes.js"

dotenv.config({
    path: './.env'
})

const app = express();
const port = process.env.port || 8000;

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/students', routes)

app.get('/', (req,res)=>{
    res.send("api running")
})


app.listen(port , ()=>{
    console.log(`server is running at ${port}`)
})