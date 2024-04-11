import Users from './models/users.js';

class userController {

    async userRegistration (req, res) {
        const { name, lastName, email, password } = req.body
        const user = new Users({name, lastName, email, password})
        await user.save()
        return res.status(200).json("User added successfully.")
    }

    async userLogin (req, res) {
        try {
            const { email, password } = req.body
            const user = await Users.findOne({
                where: {
                    email: email
                }
            })
            if (!user || user.password != password) {
                return res.status(400).json('wrong email or password!')
            }
            else {
                return res.status(200).json('Log in successfully.')
            }
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    async userFind (req, res) {
        const { name } = req.body
        const user = await Users.findOne({
            where: {
                name: name
            }
        })
        if (user) {
            return res.status(200).json('User exist. User id: ' + user.id)
        }
        else { return res.status(404).json('User not found.') } 
    }

    async userFindById (req, res) {
        const { id } = req.params
        const user = await Users.findOne({
            where: {
                id: id
            }
        })
        if (user) {
            return res.status(200).json(user)
        }
        else { return res.status(404).json('User not found.') }
    }

    async userDel (req, res) {
        try {
            const { email, password } = req.body
            const user = await Users.findOne({
                where: {
                    email: email
                }
            })
            if (!user || user.password != password) {
                return res.status(400).json('wrong email or password!')
            }
            else {
                await Users.destroy({
                    where: {
                        email: email
                    }
                })
                return res.status(200).json(`User with email: ${email} delete successfully`)
            }
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

}

export default new userController();
