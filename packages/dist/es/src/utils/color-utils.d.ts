/**
 * 颜色工具
 */
declare const ColorUtils: {
    /**
     * 获取rgb值字符串。
     * @param colorString 颜色值字符串，可以是rgb也可以是十六进制的如：rbg(0,0,255)或#c6c6c6
     * @returns 返回颜色值字符串如：0,0,255
     */
    getRGBString: (colorString: string) => string;
};
export { ColorUtils };
