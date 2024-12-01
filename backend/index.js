import express from 'express'
import cors from 'cors'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRouter from './routes/auth.js'
import tourRouter from './routes/tours.js'
import userRouter from './routes/user.js'
import reviewRouter from './routes/review.js'
import bookingRouter from './routes/booking.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin: true,
    credentials: true
}

// database connection
mongoose.set('strictQuery', false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('database connected')

    } catch (err){
        console.error(err+'failed to connect to db')
    }
}

// for testing purposes
app.get('/', (req, res)=>{
    res.send('api is working')
})

//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/review', reviewRouter)
app.use('/api/v1/booking', bookingRouter)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port', port)
})