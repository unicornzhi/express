var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'upload/' });

router.post('/',upload.single('logo'), function(req, res, next) {
    res.send({ret_code: '0'});
});

module.exports = router;