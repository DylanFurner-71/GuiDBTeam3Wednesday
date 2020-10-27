const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router(); const db = require('../db')

router.use(bodyParser.json());

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        console.log(results);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//POST : Register a user
router.post('/register/:type', function (req, res) {
    let accountInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        account_type: req.params.type
    }
    res.send('valid')
});

//POST : Login a user
router.post('/login', function (req, res) {
    let credentials = {
        username: req.body.username,
        password: req.body.password
    }

    res.json({ auth: 'valid' })
});



module.exports = router;