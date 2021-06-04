const { Router } = require('express');
const router = Router();

const { get, post } = require('../controller/message');

router.route('/')
    .get(get)
    .post(post);

module.exports = router;