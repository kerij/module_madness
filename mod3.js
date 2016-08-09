var convertUSD = require('./mod2.js');
var random = require('./mod1.js');

exports.cashNumber = function() {
  var conversion = convertUSD(random(100, 1000000));
  var output = "Account Balance: \n" + conversion + "\n";
  return output;
}
