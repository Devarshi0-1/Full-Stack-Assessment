import { app } from './app.js'
import { connectDB } from './data/database.js'
import { errorMiddleware } from './middlewares/error.js'

connectDB()

app.listen(process.env.PORT, () => {
    console.log(
        `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`,
    )
})

app.use(errorMiddleware)
