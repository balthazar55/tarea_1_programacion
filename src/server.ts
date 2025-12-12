import express, { Request, Response } from 'express';
import path from 'path';


const app = express();
const PORT = Number(process.env.PORT) || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
  res.render('form');
});

app.post('/submit', (req: Request, res: Response) => {
  const { animal } = req.body;
  res.render('display', { animal });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
