import express from 'express';

import FirebaseDB from '../controller/FirebaseDB';

const firebaseDB = new FirebaseDB();

var router = express.Router();

router.get('/:urlKey', async (req, res) => {
  try {
    const document = await firebaseDB.getURL(req.params.urlKey);
    res.redirect(document.get('url'));
  } catch (error) {
    res.send('URL Nao encontrada');
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

module.exports = router;
