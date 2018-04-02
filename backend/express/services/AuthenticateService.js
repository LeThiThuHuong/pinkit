var jwt = require('jsonwebtoken');
export const AuthenticateService = {
    generateToken: (data) => {
        var token;
        return token = jwt.sign(data, process.env.KEY_AUTHENTICATE);  
    },

    verify: (token) => {
        return jwt.verify(token, process.env.KEY_AUTHENTICATE);
    },

    getPayload: () => {
        var payload;
        return payload = jwt.decode(token);
    }
}
        