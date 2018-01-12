import connect from '../database/Init';
const express = require('express');
const app = express();

connect().then((res) => {
    app.listen(3000, () => {
        console.log('App is running at port 3000');
    })  
}).catch((err) => {
    console.log(err);
})
