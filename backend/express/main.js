import connect from '../database/Init';
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

connect().then((msg) => {
    console.log(msg);

    app.listen(4444, () => {
        console.log('Server running at 4444');
    })
})
