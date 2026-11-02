import 'dotenv/config'

import cors from 'cors'
import  express from 'express'
import { success } from 'zod'

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
    try {
        res.json({status: 'ok',service:'agentic-calender-app'})
    } catch (error) {
        res.status(500).json({
            success:false,
            meassage:"internal server error",
        })
    }
})


app.listen(port,()=>{
    console.log(`agentic calendar app is  ${port}  `)
})