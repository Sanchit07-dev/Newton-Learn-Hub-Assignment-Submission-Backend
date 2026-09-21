const { Pool } = require('pg');

const pool = new Pool({
    user: 'sanchitbaviskar73gmail.com',
    host: 'localhost',
    port: 5432,
    database: 'mydb'
});

module.exports = pool;