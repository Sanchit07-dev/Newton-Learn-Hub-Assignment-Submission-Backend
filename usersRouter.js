const express = require('express');
const router = express.Router();

const pool = require('./db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users1');
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM users1 WHERE id = $1',
            [req.params.id]
        );

        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router; 