import mysql2 from 'mysql2';
import { User, DB, Password, Host } from './config.js';

const mysql = mysql2.createConnection({
	host: Host,
	user: User,
	database: DB,
	password: Password 
});

export default mysql;
