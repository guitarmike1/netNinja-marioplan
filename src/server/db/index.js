//This
//is
//a
//test


import config from '../config/index';
import * as mysql from 'mysql';
import Mike from './mike';


export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err =>  {
    if (err) console.log(err);

});

console.log(Connection)
export default {
    Mike
}