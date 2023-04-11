import express, {Express} from 'express'
import dotenv from 'dotenv'
import { contactRouter } from './routes/contact';
import { connectDB } from './config/db';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/user';

dotenv.config();

const app: Express = express()

connectDB()

app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/contacts', contactRouter)
app.use('/api/user', userRouter)
// app.use(router.route)
// app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
})
