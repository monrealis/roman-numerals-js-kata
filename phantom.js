var page = require('webpage').create();

page.onConsoleMessage = function(msg, lineNum, sourceId) {
	console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "'
			+ sourceId + '")');
};

page.open('mocha.html', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		setInterval(checkIfFinished, 200);
	} else {
		phantom.exit();
	}
});

function checkIfFinished() {
	logProgress();
	finishIfTestsEnded();
}

function logProgress() {
	var title = page.evaluate(function() {
		return document.title;
	});
	var passed = page.evaluate(function() {
		return document.querySelector('.passes').innerText;
	});
	var failed = page.evaluate(function() {
		return document.querySelector('.failures').innerText;
	});
	console.log(passed + ' / ' + failed);
}

function finishIfTestsEnded() {
	var finished = page.evaluate(function() {
		return mochaRunner.stats.tests == mochaRunner.total;
	});
	var numberOfFailed = page.evaluate(function() {
		return mochaRunner.stats.failures;
	});
	if (finished) {
		saveImage();
		phantom.exit(numberOfFailed);
	}
}

function saveImage() {
	page.evaluate(function() {
		document.body.bgColor = 'white';
	});
	page.render('mocha.png');
}