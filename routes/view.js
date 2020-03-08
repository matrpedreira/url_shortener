import express from 'express';
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback';

var router = express.Router();

const correctPath = __dirname.replace('/routes', '');
console.log(correctPath);

const staticFileMiddleware = serveStatic(correctPath + "/client/dist")

router.use(staticFileMiddleware);
router.use(history())
router.use(staticFileMiddleware);

router.get('/', function (req, res) {
  console.log('Entrou aqui');
  res.render(path.join(correctPath + '/index.html'))
})

module.exports = router;
