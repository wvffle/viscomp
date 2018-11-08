const ZWSP = unescape('%u200b')
const ZWNJ = unescape('%u200c')
const ZWJ = unescape('%u200d')

const map = [ ZWNJ, ZWSP ]

export default {
  ZWSP, ZWNJ, ZWJ,
  map,
  compress (c) {
    const binary = c.toString(2)

    return binary.replace(/./g, bit => map[bit])
  },
  decompress (str) {
    let binary = ''
    for (const char of str) {
      binary += map.indexOf(char)
    }

    return String.fromCharCode(parseInt(binary, 2))
  }
}
