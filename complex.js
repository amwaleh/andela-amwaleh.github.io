
(function(root) {

function Complex(a, b) {
    if (!(this instanceof Complex)) {
      return new Complex(a, b);
    }
    parse(a, b); //return the real and object part
    this["r"] = Q["r"];
    this["i"] = Q["i"];
  }
  /**
parse separates the string into two parts and assigns the the value
*/
var Q = {
  r: 0,
  i: 0
};
var parse = function(a, b) {
  //if a is empty sting 
  if (a === null || a === undefined) {
    Q["r"] = 0;
    Q["i"] = 0;
  } else if (b !== undefined) { // if b is empty string 
    Q["r"] = (a); //else a takes a and b
    Q["i"] = (b);
  } else switch (typeof a) {
    case "object":
      if ("i" in a && "r" in a) {
        Q["r"] = (a["r"]);
        Q["i"] = (a["i"]);
      } else if ("abs" in a && "arg" in a) {
        Q["r"] = a["abs"] * Math.cos(a["arg"]);
        Q["i"] = a["abs"] * Math.sin(a["arg"]);
      } else {
        send_error();
      }
      break;

    case "string":
      Q["i"] = /* void */ Q["r"] = 0;
      for (var reg = /[+-]?[\di.]+/g, tmp, tr, i = 0; null !== (tmp = reg.exec(
        a)); i = 1) {
        if (tmp[0].indexOf("i") !== -1) { //if i is first letter then --NB if expression is i alone
          tr = tmp[0].replace("i", ""); //if first word is i replace it with '' 
          if (tr === "+" || tr === "-" || tr === "") //if now first leter is a operand add 1 to it 
            tr += "1";
          Q["i"] += parseFloat(tr); // 
        } else {
          Q["r"] += parseFloat(tmp[0]);// the number passed had had a real numer
        }
      }
      // No single iteration or nothing was sent 
      if (i === 0) {
        send_error();
      }
      break;
    case "number":
      Q["i"] = 0; //only number has been in putted 
      Q["r"] = a;
      break;
    default:
      send_error();
  }
  if (isNaN(Q["r"] * Q["i"])) {
    return "ERROR:Please check Numbers Passed a + ib";
  }
};
//----------------end of parse -----------------------------------------------------
Complex.prototype = {
  r: 0,
  i: 0,
  // add two complex number return new complex
  add: function(real, imag) {
    parse(real, imag);
    if (imag === 0) {
      return this['r'] + Q['r'];
    }
    return new Complex(this['r'] + Q['r'], this['i'] + Q['i']);
  },
  //subtract complex number (r1-r2, i1-i2)
  subtract: function(real, imag) {
    parse(real, imag);
    return new Complex(this['r'] - Q['r'], this['i'] - Q['i']);
  },
  // multiplication 
  multiply: function(real, imag) {
    parse(real, imag);
    if (imag === 0) {
      return (this["r"] * Q["r"]) - (this["i"] * Q["i"]);
    }
    return new Complex((this["r"] * Q["r"]) - (this["i"] * Q["i"]), (this[
      "r"] * Q["i"]) + (this["i"] * Q["r"]));
  },
  //square
  // division
  divide: function(real, imag) {
    parse(real, imag);
    var x = Q["i"],
      y = Q["r"],
      a,
      b,
      d = x * x + y * y;
    //check if the denominator is 0 cannot divide 0
    if (d === 0) {
      return 'cannot divide';
    }
    a = x * this["r"] + y * this["i"] / d;
    b = x * this["i"] - y * this["r"] / d;
    return new Complex(parseFloat(parseFloat(a)).toFixed(5), b);
  },
  //find magnitude this use pathogoras thorem 3+4i=5
  abs: function() {
    var a = this['r'];
    var b = this['i'];
    return Math.sqrt(a * a + b * b);
  },
  // squareRooot 
  sqrt: function() {
    var H = 1;
    var r = this['abs']();
    if (this['i'] < 0) {
      H = -1;
    }
    return new Complex(Math.sqrt((r + this["r"]) / 2), Math.sqrt((r - this[
      "r"]) / 2) * H);
  },
  exp: function() {
    var tmp = Math.exp(this["r"]);
    return new Complex(tmp * Math.cos(this["i"]), tmp * Math.sin(this["i"]));
  },
  pow: function(a, b) {
    parse(a, b);
    a = this["r"];
    b = this["i"];
    var abs = a * a + b * b;
    var arg = Math.atan2(b, a);
    if (abs === 0) {
      return new Complex(0);
    }
    a = Math.pow(abs, Q["r"] / 2) * Math.exp(-Q["i"] * arg);
    b = Q["i"] * Math.log(abs) / 2 + Q["r"] * arg;
    return new Complex(a * Math.cos(b), a * Math.sin(b));
  },
  conjugate: function() {
    return new Complex(this["r"], -1 * this["i"]);
  },
  cos: function() {
    var cosh = function(x) {
      return (Math.exp(x) + Math.exp(-x)) / 2;
    };
  },
  arg: function() {
    return Math.atan2(this["i"], this["r"]);
  },
  toString: function() {
    var a = this["r"];
    var b = this["i"];
    if (isNaN(a * b)) {
      return "NaN";
    }
    var ret = "";
    if (a !== 0) {
      ret += a;
    }
    if (b !== 0) {
      if (b > 0 && a !== 0) ret += "+";
      if (b === 1) {
        
      } else if (b === -1) {
        ret += "-";
      } else {
        ret += b;
      }
      ret += "i";
    }
    if (ret === "") return "0";
    return ret;
  },
}

function send_error() {
  return 'ERROR insert complex numbers'
}


if (typeof define === "function" && define["amd"]) {
        define([], function() {
            return Complex;
        });
    } else if (typeof exports === "object") {
        module["exports"] = Complex;
    } else {
        root["Complex"] = Complex;
    }

})(this);