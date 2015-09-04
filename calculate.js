



function description(a, b) {
  if (a === '') {
    a = 'a'
  }
  if (b === '') {
    b = 'b';
  }
  this.add =
    "<b class='text-success'>Complex.add(x)</b><br>\
 add complex number \
<pre class='col-lg-12' >\
var cx = new complex ('" +
    a + "').add('" + b + "') </pre>";
  this.sub =
    "<b class='text-success'>Complex.subtract(x)</b><br>\
 Subtract complex number \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').Subtract('" + b +
    "'); </pre>";
  this.mul =
    "<b class='text-success'>Complex.multiply(x)</b><br>\
 Multiplies complex number \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').multiply('" + b +
    "'); </pre>";
  this.divide =
    "<b class='text-success'>Complex.divide(x)</b><br>\
Divides complex number greater than 0 \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').divide('" + b +
    "'); </pre>";
  this.abs =
    "<b class='text-success'>Complex.abs(x)</b><br>\
 Return the magnitude |Z| of  complex number \
 \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').abs(); </pre>";
  this.sqrt =
    "<b class='text-success'>Complex.sqrt(x)</b><br>\
 Return the square root of a complex number\
 \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').sqrt();</pre>";
  this.con =
    "<b class='text-success'>Complex.conjugate(x)</b><br>\
 Return the conjugate of a complex number\
 \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').conjugate();</pre>";
  this.pow =
    "<b class='text-success'>Complex.pow(x)</b><br>\
Returns value of complex numbers raised to a certain power \
the power can be real number or complex\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').pow('" + b +
    "'); </pre>";

this.arg =
    "<b class='text-success'>Complex.arg(x)</b><br>\
 Return the polar value of a complex number\
 \
\
<pre class='col-lg-12 text-success' >\
var cx = new complex('" +
    a + "').arg();</pre>";

}

function spacer(element) {
  var string = $(element).val();
  string = string.replace(/' '+/g, ' ');
  $(element).val(string)
}


var calculate = function(a, b,
  operation) {
  var d = new description(a, b),
    p = document.getElementById(
      'substance');
  switch (operation) {
    case "add":
      p.innerHTML = d.add;
      return new Complex(a).add(b).toString();
    case "sub":
      p.innerHTML = d.sub;
      return new Complex(a).subtract(
        b).toString();
    case "mul":
      p.innerHTML = d.mul;
      return new Complex(a).multiply(
        b).toString();
    case "div":
      p.innerHTML = d.divide;
      return new Complex(a).divide(b)
        .toString();
    case "abs":
      p.innerHTML = d.abs;
      return new Complex(a).abs(b).toString();
    case "sqrt":
      var f, g;
      var w = new Complex(a).sqrt();
      f = parseFloat(w.r).toFixed(5);
      g = parseFloat(w.i).toFixed(5);
      p.innerHTML = d.sqrt;
      if (w.i < 0) {
        return f + g + 'i';
      }
      return f + '+' + g + 'i';
    case "con":
      p.innerHTML = d.con;
      return new Complex(a).conjugate()
        .toString();
    case "pow":
      p.innerHTML = d.pow;
      return new Complex(a).pow(b).toString();

     case "arg":
      p.innerHTML = d.arg;
      return new Complex(a).arg().toString();
      case "square":
      p.innerHTML = d.pow;
      return new Complex(a).pow(2).toString();
  }
}

