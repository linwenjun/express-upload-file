var express = require('express'),
    multer  = require('multer'),
    app = express();

app.set('view engine', 'jade');

app.use(multer({ dest: './uploads/'}))

app.get('/', function(req, res) {
    res.render('index', {title: 'Hey', message: 'world!'});
})

app.post('/uploadFile', function(req, res) {
    var result = "";
    for(var item in req.files) {
        result += "源文件名：" + req.files[item].originalname + '\n';
        result += "目标文件名：" + req.files[item].name + '\n';
    }
    res.send('上传成功：\n' + result);
})

app.listen(3000, function() {
    console.log("Server start done at http://localhost:3000");
})