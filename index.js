import express from 'express';
import FirebaseDB from './controller/FirebaseDB';

const app = express();
const firebaseDB = new FirebaseDB();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/:urlKey', async (req, res) => {
  try {
    const document = await firebaseDB.getURL(req.params.urlKey);
    res.redirect(document.get('url'));
  } catch (error) {
    res.send('URL Nao encontrada');
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
