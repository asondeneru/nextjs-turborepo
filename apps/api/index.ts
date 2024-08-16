import * as express from 'express';
const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

app.listen(53000, () => {
  console.log('http://localhost:53000');
});
