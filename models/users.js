import sequelize from 'sequelize';
import DataTypes from 'sequelize';
import { DB, User, Password, Host } from '../config.js'

const db = new sequelize(
	DB, User, Password, {host: Host, dialect: 'mysql'}
);

const Users = await db.define("Users", {
	name: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
	email: {type: DataTypes.STRING, allowNull: false},
	password: {type: DataTypes.STRING, allowNull: false},
},
{
	timestamps: false //Убирает поля createAt и updatedAt
}
);

// db.sync({alter: true}).then(()=>{
// console.log("Tables have been sync");
// }).catch(err=>console.log(err));
    
export default Users;
