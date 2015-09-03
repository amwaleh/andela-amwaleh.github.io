var Complex = require('./Complex');

describe("Complex Numbers Library", function(){
	it("should return an expression", function(){
		var numx = new Complex(3, 4);
		expect(numx.toString()).toEqual("3 + 4i");
	});

	it("should find the modulus", function(){
		var numx = new Complex(4, 5);
		expect(numx.magnitude()).toEqual(Math.sqrt(41));
		expect(new Complex(2,4).magnitude()).toEqual(Math.sqrt(20));
	});