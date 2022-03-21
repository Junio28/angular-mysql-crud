import mysql from 'promise-mysql';

import keys from './routes/keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then((connection: any) => {
        pool.releaseConnection(connection);
        console.log('La Base de Datos está Conectada');
    });

export default pool;