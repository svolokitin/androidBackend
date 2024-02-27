import Users from './models/users.js';

class userController {

    async userRegistration (req, res) {
        const { name, last_name, email, password } = req.body
        const user = new Users({name, last_name, email, password})
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
            return res.status(200).json('User exist.')
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
