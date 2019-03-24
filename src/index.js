module.exports = function getZerosCount(number, base) {
    let result = number;
    for(let i = 2; i <= base; i++){
        if(base % i === 0){
            let countPrimes = 0;
            let countDivides = 0;
            while (base % i === 0){
                countPrimes++;
                base = base / i;
            }
            let tempNumber = number;
            while (tempNumber / i > 0){
                countDivides = countDivides + Math.floor(tempNumber / i);
                tempNumber = Math.floor(tempNumber / i);
            }
            result = Math.min(result, countDivides / countPrimes);
        }
    }
    return  Math.floor(result);
}