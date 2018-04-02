const mongoose = require('mongoose');

function connect() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            mongoose.connect(process.env.LOCAL_HOST, (error) => {
                console.log(error);
                if (!error) {
                    clearInterval(interval);
                    resolve('Connected to db');
                }else {
                    console.log('Ping database');
                }
            })
        }, 1000);
    })
}

export default connect;
