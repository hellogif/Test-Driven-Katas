const wrap = (line, maxLen) => {
    if (line.length === 0) {
        return line;
    }
    let wordArr = line.split(' ');
    let resultString = '';
    let tempArr = [];
    let idx = 0;
    while (idx < wordArr.length) {
        console.log(resultString)
        while(resultString.length + wordArr[idx].length + 1 <=20) {
            resultString += wordArr[idx];
            idx++;
            if (idx >= wordArr.length) {
                break;
            }
        }
        tempArr.push(resultString);
        resultString = ''
    }
    return tempArr.join('\n')
};
module.exports = wrap;

//'Lorem ipsum dolor sit eu amet, elit namagna sem amet nulla vel purus ac ligula.'