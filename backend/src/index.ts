import 'dotenv/config'

import cors from 'cors'
import  express from 'express'
import { success } from 'zod'
import { getPool } from './db/pool.js'

const app = express()
const port = Number(process.env.PORT)|| 4000
const appOrign = process.env.APP_URL ?? 'http://localhost:3000' // The old single-slash URL did not match the frontend origin, so CORS blocked browser requests.

app.use(
    cors({
        origin:appOrign,
        credentials:true
    })
)
app.use(express.json())
app.get("/health",async (_req,res)=>{
    console.log("hallo world")
    try {
        await getPool().query("SELECT 1")
        res.json({status: 'ok',service:'agentic-calender-app',database : 'up'})
    } catch (error) {
        res.status(503).json({
            Err : error,
            success:false,
            service:'agentic-calender-app',
            meassage:"internal server error",
            database : 'down'
        })
    }
})


app.listen(port,()=>{
    console.log(`agentic calendar app is  ${port}  `)
})