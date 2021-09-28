const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const connection = require('./configs/db');
const port = process.env.PORT || 5100;

app.use('uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended:true}))
app.use(express.json())


app.use(cors({
    origin:'http://localhost:3000'
}))

app.use('/api', require('./routes/file-route'));
connection();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server is running on ${port}`));