/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    helper(s, 0, s.length - 1);
};

let helper = (s, l, r) => {
    if (l >= r) return;
    let t  = s[l];
    s[l]   = s[r];
    s[r]   = t;
    helper(s, ++l, --r);
}