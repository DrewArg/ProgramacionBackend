"use strict";

var list = [1, 2, 3, 4, 5, 6, 7];
list.map(function (n) {
  return n * 2;
}).forEach(function (n) {
  return log(n);
});
