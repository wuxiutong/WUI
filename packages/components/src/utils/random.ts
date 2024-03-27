/**
 * 
 * @param len 随机数的长度
 * @returns 返回随机数字符串字符串
 */
export function randomString(len:number){
	var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890",
		a = t.length,
		n = "";
	for (let i = 0; i < len; i++) {
		n += t.charAt(Math.floor(Math.random() * a));
	}
	return "__" + n
}
