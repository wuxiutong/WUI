/**
 * 颜色工具
 */
const ColorUtils = {
  /**
   * 获取rgb值字符串。
   * @param colorString 颜色值字符串，可以是rgb也可以是十六进制的如：rbg(0,0,255)或#c6c6c6
   * @returns 返回颜色值字符串如：0,0,255
   */
  getRGBString: function (colorString: string): string {
    let r, g, b
    // 如果是十六进制格式
    if (colorString.startsWith('#')) {
      r = parseInt(colorString.substr(1, 2), 16)
      g = parseInt(colorString.substr(3, 2), 16)
      b = parseInt(colorString.substr(5, 2), 16)
    }
    // 如果是RGB格式
    else if (colorString.startsWith('rgb(')) {
      const match = colorString.match(/\d+/g)
      if (match && match.length >= 3) {
        r = parseInt(match[0])
        g = parseInt(match[1])
        b = parseInt(match[2])
      }
    }
    return r + ',' + g + ',' + b
  },
}

export { ColorUtils }
