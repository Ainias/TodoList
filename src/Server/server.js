import express from 'express';
import path from 'path';

let translations = [
    {
        deutsch: 'hallo',
        chinesisch: 'hao',
    },
    {
        deutsch: 'du',
        chinesisch: 'ni',
    },
];

const app = express();
app.get('/vocablist', function (request, response) {
    response.json(translations);
});
app.use('/client', express.static(path.resolve(path.dirname(process.argv[1]), '../Client')));

app.get('/', function (request, response) {
    const name = request.query.name;
    const age = request.query.age;
    response.send('hello world ' + name + ' ' + age);
});

app.listen(8080, function () {
    console.log('server ready');
});
