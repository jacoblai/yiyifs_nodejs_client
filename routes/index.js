var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  //invoke upload event
  uploadFile();
  res.render('index', { title: 'file upload info on console' });
});

function uploadFile(){
  request.post({
    url: 'http://localhost:9007/api/up',
    // headers: {
    //   'Content-MD5': 'xxxxxxxxxxxx'
    // },
    formData: {
      file: fs.createReadStream('/Users/jac/Downloads/yiyidf.png'),
    },
  }, function(error, response, body) {
    console.log(body);
  });
}

module.exports = router;
