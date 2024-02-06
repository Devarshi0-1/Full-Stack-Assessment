import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { errorMiddleware } from './middlewares/error.js'
import userRouter from './routes/user.js'

export const app = express()

config({
    path: './data/config.env',
})

app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
)

app.use('/api/v1/users', userRouter)

app.get('/', (_, res) => {
    res.status(200).json({
        success: true,
        message: 'Nice Working',
    })
})

app.use(errorMiddleware)
