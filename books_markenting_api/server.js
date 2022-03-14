const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());

app.use(cors());

const url = 'https://gutendex.com/books';

app.get('/books', (req, res, next) => {
    axios.get(url)
        .then((response) => {
            const results = response.data.results;
            res.send(results);
        })
        .catch(err => res.status(400).json('unable to get books'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`app is running at port ${process.env.PORT}`);
});