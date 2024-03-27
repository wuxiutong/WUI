function e(a) {
  var r = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890", o = r.length, t = "";
  for (let n = 0; n < a; n++)
    t += r.charAt(Math.floor(Math.random() * o));
  return "__" + t;
}
export {
  e as randomString
};
