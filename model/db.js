var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://username:yourpassword@127.0.0.1:27017/blogDB', { "authSource": "blogDB" });

db.on('err', console.error.bind(console, '连接错误:'));
db.once('open', () => {
	console.log('连接成功');
});

module.exports = db;
