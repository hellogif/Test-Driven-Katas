const wrap = (line, maxLen) => {
    if (line.length === 0) {
        return line;
    }
    let wordArr = line.split(' ');
    let resultString = '';
    let tempArr = [];
    let idx = 0;
    while (idx < wordArr.length) {
        while(resultString.length + wordArr[idx].length + 1 <=21) {
          if (resultString.length === 0) {
            resultString = wordArr[idx]
          } else {
            resultString = resultString + ' ' + wordArr[idx];
          }
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

//'Lorem ipsum dolor sit eu amet, elit namagna sem amet nulla vel purus ac ligula.'

// const wrap = (line, maxLen) => {
//     if (line.length === 0) {
//         return line;
//     }
//     let workingStr = line.slice()
//     let result = [];
//     let spaceIdx = 0;

//     while (workingStr.length > 20) {
//         for (let i = 20; workingStr[i] !== ' '; i--) {
//             spaceIdx = i;
//         }
//         result.push(line.slice(0, spaceIdx))
//         workingStr = workingStr.slice(spaceIdx)
//     }

//     result.push(workingStr)
//     return result.join('\n')

// }


module.exports = wrap;
