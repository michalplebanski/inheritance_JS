var ctn = document.getElementById('content');

function A(name) {
	this.name = name;
}

A.prototype.showName = function() {
	return this.name;
}

B.prototype = new A();
B.prototype.constructor = B;
function B(name) {
	this.name = name;
}

var aa = new A('object A');
var bb = new B('object B');

ctn.innerHTML = aa.showName() + ' ||| ' + bb.showName();