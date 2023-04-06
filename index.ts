import express, {Express} from 'express'
import dotenv from 'dotenv'
import { router } from './routes/contact';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './config/db';

dotenv.config();

const app: Express = express()

connectDB()

app.use(express.json())
app.use(router)
// app.use(router.route)
// app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
})
