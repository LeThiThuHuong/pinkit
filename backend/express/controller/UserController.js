import {UserGateway} from '../../database/gateway/UserGateway';

export const UserController = {
    create: (req, res) => {
        UserGateway.create(req.body).then((user) => {
            res.json({user: user, status: 200, msg: 'successfully!'})
        })
    },

    updateById: (req, res) => {
        const {id, username, age, name: {firstname, lastname}, gender, email, password} = req.body;
        UserGateway.updateById(req.params.userId, {id, username, age, name: {firstname, lastname}, gender, email, password}).then((userAdmin) => {
            res.json({user: user, status: 200, msg: 'successfully!'})
        })
    },

    findById: (req, res) => {
        UserGateway.findById(req.params.userId).then((user) => {
            res.json({userAdmin: userAdmin, status: 200, msg: 'successfully!'})
        })
    },

    deleteById: (req, res) => {
        UserGateway.deleteById(req.params.userId).then((user) => {
            res.status(200).send('deleted successfully!')
        })
    }
}
