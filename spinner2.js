const charArray = ['|','/','-','\\','|','/','-','\\','|'];
let delay = 100;
for (let idx = 0; idx < charArray.length; idx++) {
    setTimeout(() => {
        let str = idx === charArray.length - 1 ? '\r' + charArray[idx] + '  \n' : '\r' + charArray[idx] + ' ';
        process.stdout.write(str);
    }, delay);
    delay += 200;
}