var page = require('webpage').create();
page.open('mocha.html', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		setTimeout(function() {
			var title = page.evaluate(function() {
				return document.title;
			});
			var passed = page.evaluate(function() {
				return document.querySelector('.passes').innerText;
			});
			var failed = page.evaluate(function() {
				return document.querySelector('.failures').innerText;
			});
			console.log('Page title is ' + title);
			console.log(passed + ' / ' + failed);
			// page.render('mocha.png');
			phantom.exit();
		}, 1000);
	} else {
		phantom.exit();
	}
});
