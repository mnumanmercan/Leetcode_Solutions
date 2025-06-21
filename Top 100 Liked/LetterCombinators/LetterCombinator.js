/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return [];

    const splitted = digits.split('');

    const digitConfig = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const output = [];
    splitted.map(item => output.push(digitConfig[item]));

    return output.reduce((a, c) => {
        if (a.length === 0) return c;

        const tempArray = [];
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < c.length; j++) {
                tempArray.push(a[i] + c[j]);
            }
        }

        return tempArray;
    }, []);
};