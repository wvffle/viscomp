(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.viscomp = factory());
}(this, (function () { 'use strict';

  const ZWSP = unescape('%u200b');
  const ZWNJ = unescape('%u200c');
  const ZWJ = unescape('%u200d');

  const map = [ ZWNJ, ZWSP ];

  var index = {
    ZWSP, ZWNJ, ZWJ,
    map,
    compress (c) {
      const binary = c.toString(2);

      return binary.replace(/./g, bit => map[bit])
    },
    decompress (str) {
      let binary = '';
      for (const char of str) {
        binary += map.indexOf(char);
      }

      return String.fromCharCode(parseInt(binary, 2))
    }
  };

  return index;

})));
