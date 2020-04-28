import  { Connection } from './index';

export const all = async () => {
    console.log("mike.js")
    return new Promise((resolve,reject) => {

        Connection.query('SELECT * from videos' , (err, results) => {
            if(err) {
                return reject(err)
            }
            resolve(results);
        });
    });

}
export default {
    all
}