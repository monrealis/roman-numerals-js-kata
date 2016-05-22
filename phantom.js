var page = require('webpage').create();
page.open('mocha.html', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		setTimeout(function() {
			page.render('example.png');
			phantom.exit();
		}, 1000);
	} else {
		phantom.exit();
	}
});
