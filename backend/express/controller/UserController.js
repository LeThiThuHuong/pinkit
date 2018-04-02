import { UserGateway } from '../../database/gateway/UserGateway';
import { InvalidParams } from '../Exception';


export const UserController = {
    create: (req, res, next) => {
        UserGateway.create(req.body).then((user) => {
            res.json({ user: user, status: 200, msg: 'successfully!' })
        }).catch(err => {
            return next(err);
        })
    },

    updateById: (req, res, next) => {
        const { id, username, age, name: { firstname, lastname }, gender, email, password } = req.body;
        UserGateway.updateById(req.params.userId, { id, username, age, name: { firstname, lastname }, gender, email, password }).then((user) => {
            res.json({ user: user, status: 200, msg: 'successfully!' })
        }).catch(err => {
            return next(err);
        })
    },

    findById: (req, res, next) => {
        UserGateway.findById(req.params.userId).then((user) => {
            res.json({ user: user, status: 200, msg: 'successfully!' })
        }).catch(err => {
            return next(err);
        })
    },


    findAllWithKeyword: (req, res, next) => {
        const filter = req.query.keyword || {};
        const offset = Number(req.query.offset || 0);
        const limit = Number(req.query.limit || 10);
        const order = { date_added: -1 };
        UserGateway.findAllWithKeyword(filter, offset, limit, order).then((user) => {
            res.json({ user: user, status: 200, msg: 'successfully!' })
        }).catch(err => {
            return next(err);
        })
    },

    deleteById: (req, res, next) => {
        UserGateway.deleteById(req.params.userId).then((user) => {
            res.status(200).send('deleted successfully!')
        }).catch(err => {
            return next(err);
        })
    },

    getUser: (req, res, next) => {
        UserGateway.getUser().then((user) => {
            res.json({ user: user, status: 200 });
        }).catch(err => {
            return next(err);
        })
    },

    getUserById: (req, res, next) => {
        UserGateway.getUserById(req.params.userId).then((user) => {
            res.json({ user: user, status: 200 });
        }).catch(err => {
            return next(err);
        })
    },

    authenticate: (req, res, next) => {
        const {username, password} = req.body;
        UserGateway.authenticate(username, password).then((user) => {
            req.session.username = user.username;
            console.log(req.session);
            res.json({user: username, status: 200});
        }).catch(err => {
            return next(err);
        })
    }
}







