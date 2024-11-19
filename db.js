const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({ 
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT || 5432,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
});


pool.query('SELECT NOW()', (err, res) => { 
    if (err) { 
        console.error(err); 
        return; 
    } 
    console.log(res.rows); 
});

module.exports = pool;