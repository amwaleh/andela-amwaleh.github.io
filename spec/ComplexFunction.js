//http://www.mathopolis.com/questions/q.php?id=443 <------used experimental equestion from here 
describe("Complex Numbers Library", function() {

  it("should return a string expression", function() {
    var numx = new Complex(3, 4);
    expect(numx.toString()).toEqual("3+4i");
  });

  it("should return an object ", function() {
    var numx = new Complex('3+4i');
    expect(numx).toEqual({r: 3, i: 4});
  });

  it("should find the Magnitude check pythogras", function() {
    var numx = new Complex(4, 5);
    expect(numx.abs()).toEqual(Math.sqrt(41));
    expect(new Complex(2, 4).abs()).toEqual(Math.sqrt(20));
    expect(new Complex('2+4i').abs()).toEqual(Math.sqrt(20));
  });
  //check addition 
  it("should find addition of two complex numbers ", function() {
    var numx = new Complex('3+i').add('2+2i');
    expect(numx.toString()).toEqual('5+3i');
  });

  it("should find subtraction of two complex numbers ", function() {
    var numx = new Complex('3+i').subtract('2+2i');
    expect(numx.toString()).toEqual('1-i');
  });
  // check multiplication for both numeric and string value 
  it("should find product of two complex numbers ", function() {
    var numx = new Complex('2-3i').multiply('1+i');
    expect(numx.toString()).toEqual('5-i');

    numx = new Complex(2, -3).multiply(1, 1);
    expect(numx.toString()).toEqual('5-i');
  });

  it("Should find Square of a complex number", function() {
    var numx = new Complex('3-i').pow(2);
    expect(numx.toString()).toEqual('8-6i');
     numx = new Complex('3-i').pow(3);
     numx = new Complex('3-i').pow('18-26i');


  });

  it('should return the conjugate', function() {
    expect(new Complex(1, 3).conjugate().toString()).toEqual('1-3i');

  });

  it('should z^w, where z and w are complex', function() {
    var n = new Complex('2').pow(2).toString();
    expect(n).toEqual('4');
  });

})
