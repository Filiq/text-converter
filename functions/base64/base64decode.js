const base64decode = (str) => {
  let base64chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  let base64inv = {};
  for (var i = 0; i < base64chars.length; i++) {
    base64inv[base64chars[i]] = i;
  }

  // remove/ignore any characters not in the base64 characters list
  //  or the pad character -- particularly newlines
  str = str.replace(new RegExp("[^" + base64chars.split("") + "=]", "g"), "");

  // replace any incoming padding with a zero pad (the 'A' character is zero)
  var p =
    str.charAt(str.length - 1) == "="
      ? str.charAt(str.length - 2) == "="
        ? "AA"
        : "A"
      : "";
  var r = "";
  str = str.substr(0, str.length - p.length) + p;

  // increment over the length of this encoded string, four characters at a time
  for (var c = 0; c < str.length; c += 4) {
    // each of these four characters represents a 6-bit index in the base64 characters list
    //  which, when concatenated, will give the 24-bit number for the original 3 characters
    var n =
      (base64inv[str.charAt(c)] << 18) +
      (base64inv[str.charAt(c + 1)] << 12) +
      (base64inv[str.charAt(c + 2)] << 6) +
      base64inv[str.charAt(c + 3)];

    // split the 24-bit number into the original three 8-bit (ASCII) characters
    r += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
  }
  // remove any zero pad that was added to make this a multiple of 24 bits
  return r.substring(0, r.length - p.length);
};

export default base64decode;

//https://en.wikibooks.org/wiki/Algorithm_Implementation/Miscellaneous/Base64
