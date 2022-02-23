module.exports = function check(str, bracketsConfig) {
let replaceStr = str;
while (str) {
bracketsConfig.forEach(element => {
str = str.replace(element.join(''), '');
});
if (str === replaceStr) {
return false;
}
replaceStr = str;
}
return true;
}