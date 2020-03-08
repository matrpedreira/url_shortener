import express from 'express';
import cors from 'cors';
import subdomain from 'express-subdomain';
import bodyParser from 'body-parser';
import views from './routes/view.js';
import firebase from './routes/firebase.js';


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(subdomain('admin', views));

const port = process.env.PORT || 4000;

app.use(firebase);

app.listen(port);

// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// });
