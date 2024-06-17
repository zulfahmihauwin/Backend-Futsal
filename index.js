import express from 'express';
import db from './config/database.js';
import UserRouter from './routes/UserRouter.js';

const app = express();

(async()=>{
    await db.sync();
})();

app.use(express.json());
app.use(UserRouter);

app.listen(5000, ()=>console.log('server normal'));