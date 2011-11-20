var xls = require('../index.js');

xls.parse('data.xls', function(error, data) {
	console.log(data);
});