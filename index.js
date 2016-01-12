"use strict";

function strings (nchars) {
  const buffer = '';
  const coll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let c = 0; c < nchars; c++) {
    buffer += coll.charAt(Math.floor(Math.random() * coll.length));
  }
  return buffer;
}

function digits (nchars) {
  const buffer = '';
  const coll = '0123456789';
  for (let c = 0; c < nchars; c++) {
    buffer += coll.charAt(Math.floor(Math.random() * coll.length));
  }
  return buffer;
}

module.exports = {
  strings: strings,
  digits: digits
};
