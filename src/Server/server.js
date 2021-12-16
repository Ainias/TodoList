import express from 'express';
import path from 'path';

const app = express();
app.use('/client', express.static(path.resolve(path.dirname(process.argv[1]), '../Client')));
app.listen(80, function () {
    console.log('server ready');
});
