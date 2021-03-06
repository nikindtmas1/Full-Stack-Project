import express from 'express';
import bodyParser from 'body-parser';
import mongoos from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello to memories API')
})

//const CONNECTION_URL = 'mongodb+srv://JavaScript-Spa-Menu:mongodb548444@cluster0.onbxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const CONNECTION_URL = 'mongodb://localhost:27017/full-stack';
const PORT = process.env.PORT || 5000;

mongoos.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoos.set('useFindAndModify', false);
