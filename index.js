import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Routes from './src/routes/index.js'
const app = express();
app.use(cors());
app.use(express.json())
app.use(Routes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);   
})