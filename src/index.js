const ZWSP = unescape('%u200b')
const ZWNJ = unescape('%u200c')
const ZWJ = unescape('%u200d')

let charmap = [ ZWNJ, ZWSP, ZWJ ]

export default {
  ZWSP, ZWNJ, ZWJ, charmap,
  compress (c) {
    const binary = c.toString(charmap.length)

    return binary.replace(/./g, bit => charmap[bit])
  },
  decompress (str) {
    let binary = ''
    for (const char of str) {
      binary += charmap.indexOf(char)
    }

    return String.fromCharCode(parseInt(binary, charmap.length))
  }
}
