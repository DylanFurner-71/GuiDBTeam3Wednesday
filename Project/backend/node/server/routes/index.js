const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

//POST : Register a user
router.post('/register/:type', function (req, res) {
    console.log(req.params.type)
    res.send('valid')
});

//POST : Login a user
router.post('/login', function (req, res) {
    res.json({ auth: 'valid' })
});

module.exports = router;