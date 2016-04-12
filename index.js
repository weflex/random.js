"use strict";

function strings (nchars) {
  var buffer = '';
  const coll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var c = 0; c < nchars; c++) {
    buffer += coll.charAt(Math.floor(Math.random() * coll.length));
  }
  return buffer;
}

function digits (nchars) {
  var buffer = '';
  const coll = '0123456789';
  for (var c = 0; c < nchars; c++) {
    buffer += coll.charAt(Math.floor(Math.random() * coll.length));
  }
  return buffer;
}

module.exports = {
  strings: strings,
  digits: digits
};
