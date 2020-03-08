  import express from 'express';

import FirebaseDB from '../controller/FirebaseDB';

const firebaseDB = new FirebaseDB();

var router = express.Router();

router.get('/:urlKey', async (req, res) => {
  try {
    const document = await firebaseDB.getURL(req.params.urlKey);
    if (document.createTime) {
      console.log(document);
      res.redirect(document.get('url'));
    } else {
      res.sendStatus(300);
    } 
  } catch (error) {
    console.log(error);
    res.sendStatus(300);
  }
});

router.post('/api/newURL', async (req, res) => {
  console.log('API REQ');
  try {
    const document = await firebaseDB.createURL(req.body.urlKey, req.body.url);
    res.sendStatus(200);
  } catch (error) {
    res.send('URL Nao encontrada');
  }
});

router.get('/api/fetchURLs', async (req, res) => {
  try {
    const documents = await firebaseDB.fetchURLs();
    res.send(documents);
  } catch (error) {
    res.send('URL Nao encontrada');
  }
});

module.exports = router;
