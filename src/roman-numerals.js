// Business logic.
export function toRomans(number) {
  this.number= number;
}

toRomans.prototype.checkType= function(number){
  var arr = {
    "0": ["","","",""],
    "1": ["M","C","X","I"],
    "2": ["MM","CC","XX","II"],
    "3": ["MMM","CCC","XXX","III"],
    "4": ["","CD","XL","IV"],
    "5": ["","D","L","V"],
    "6": ["","DC","LX","VI"],
    "7": ["","DCC","LXX","VII"],
    "8": ["","DCCC","LXXX","VIII"],
    "9": ["","CM","XC","IX"]
  }

  var result = "";
  var order = 1000;
  for (var i = 0; i < 4; i++){
    var j = Math.floor(number / order);
    result += arr[j.toString()][i];
    number %= order;
    order /= 10;
  }
  return result;
};
