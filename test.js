/**
 * This JavaScript file should fail its linting!
 * Use this to test your hinting plugin.
 */
var foo;
var bar;
(function () {
	'use strict';

	// bitwise
	var myArr = ['foo', 'bar'];
	if (~myArr.indexOf('foo')) {
		myArr.pop();
	}

	// camelcase
	var foo_bar;

	// curly
	if (foo !== bar) foo = bar;

	// eqeqeq
	if (foo != bar) {
		foo = bar;
	}

	// forin
	for (var key in foo) {
		foo[key] = bar;
	}

	// freeze
	Array.prototype.count = function (value) { return 4; }

	// immed
	function foo() { return bar; }();

	// latedef
	function foo() {
		myvar += 1;
		var myvar;
	}

	// noarg
	function foo() {
		return arguments.callee;
	}

	// nonew
	var MyConstructor = function () { return bar; };
	new MyConstructor();

	// plusplus
	for (var i = 0; i < foo.length; i++) {
	}

	// quotmark
	bar = "yay";

	// undef
	function foo () {
		return anUndefinedVar;
	}

	// unused
	var neverUsed;

	// maxparams
	(function (one, two, three, four, five) {
		return one + two + three + four + five;
	}());

	// maxlen
	bar = 'I am a string that is too damned long. I should be broken up into multiple lines. It really makes life a lot easier.';

})();
