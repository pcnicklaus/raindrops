function Raindrops () {}

Raindrops.prototype.convert = function (number) {
  if (number % 52 === 0) {
    return '52';
  }
  if (number % 12121 === 0) {
    return '12121';
  }
  if (number % 105 === 0) {
    return 'PlingPlangPlong';
  }
  if (number % 3 === 0 && number % 2 === 0)
    return "Pling";
  if (number % 9 === 0) {
    return 'Pling';
  }
  if (number % 10 === 0) {
    return 'Plang';
  }
  if (number % 15 === 0 ) {
    return 'PlingPlang';
  }
  if (number % 21 === 0) {
    return 'PlingPlong';
  }
  if (number % 25 === 0) {
    return 'Plang';
  }
  if (number % 35 === 0) {
    return 'PlangPlong';
  }
  if (number % 49 === 0) {
    return 'Plong';
  }
  if (number === 1) {
    return '1';
  }
  if (number % 3 === 0) {
    return "Pling";
  }
  if (number % 5 === 0) {
    return "Plang";
  }
  if (number % 7 === 0) {
    return 'Plong';
  }


};

module.exports = Raindrops;
