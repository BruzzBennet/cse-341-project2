const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World') 
});

router.use("/monsters", require("./monsters"));
router.use("/equipment", require("./equipment"));

module.exports = router;