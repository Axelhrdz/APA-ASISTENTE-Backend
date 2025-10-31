import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// ------- importing Routes -------
import userRouter from './routes/users.js';

//create first route / endpoint
app.get('/', (req, res) => {
    res.send({ title: 'Apa Asistente api running!' });
});


// ------- using Routes -------
app.use('/users', userRouter);



// ------- server static files from public folder -------
// app.use('/testing', express.static('public'));  //defines a path beforehand the file location --> test/image/png
// app.use(express.static('public'));  //gets files from raw folder directly  --> port:3000/image.png

//Better practice, use absolute paths, which always will work and wont break
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/static', express.static(path.join(__dirname, 'public')))


// console.log(__dirname);








app.listen(3000, () => {
    console.log('Server running on port 3000');
});

export default app;