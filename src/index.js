module.exports = function check(str, Config) {
    if (str.length % 2 !== 0) return false;

    const stackBrackets = [];
    const configBrackets = {};
    Config.forEach((group) => configBrackets[group[0]] = group[1], {})
    const isLastStackBrackets = (bracket) => bracket === configBrackets[stackBrackets[stackBrackets.length - 1]];

    for (const bracket of str) {
        isLastStackBrackets(bracket) ?
            stackBrackets.pop() :
            stackBrackets.push(bracket);
    }
    return (stackBrackets.length) ? false : true;
}
