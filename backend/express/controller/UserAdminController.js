import {UserAdminGateway} from '../../database/gateway/UserAdminGateway';

export const UserAdminController = {
    create: (req, res) => {
        UserAdminGateway.create(req.body).then((userAdmin) => {
            res.json({userAdmin: userAdmin, status: 200, msg: 'successfully!'})
        })
    },

    updateById: (req, res) => {
        const {id, username, age, name: {firstname, lastname}, gender, email, password} = req.body;
        UserAdminGateway.updateById(req.params.userAdminId, {id, username, age, name: {firstname, lastname}, gender, email, password}).then((userAdmin) => {
            res.json({userAdmin: userAdmin, status: 200, msg: 'successfully!'})
        })
    },

    findById: (req, res) => {
        UserAdminGateway.findById(req.params.userAdminId).then((userAdmin) => {
            res.json({userAdmin: userAdmin, status: 200, msg: 'successfully!'})
        })
    },

    deleteById: (req, res) => {
        UserAdminGateway.deleteById(req.params.userAdminId).then((userAdmin) => {
            res.status(200).send('deleted successfully!')
        })
    }
}
