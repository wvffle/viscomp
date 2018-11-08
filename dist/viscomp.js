(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.viscomp = factory());
}(this, (function () { 'use strict';

  const ZWSP = unescape('%u200b');
  const ZWNJ = unescape('%u200c');
  const ZWJ = unescape('%u200d');

  let charmap = [ ZWNJ, ZWSP, ZWJ ];

  var index = {
    ZWSP, ZWNJ, ZWJ, charmap,
    compress (c) {
      const binary = c.toString(charmap.length);

      return binary.replace(/./g, bit => charmap[bit])
    },
    decompress (str) {
      let binary = '';
      for (const char of str) {
        binary += charmap.indexOf(char);
      }

      return String.fromCharCode(parseInt(binary, charmap.length))
    }
  };

  return index;

})));
