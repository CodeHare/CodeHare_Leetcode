// const plusOne = function (digits) {
//     console.log(digits[0]);
//     if(digits.length == 1 && digits[0] <= 9) return [...digits[0]+1];
//     let str = '';
//     for(let i = 0; i ++; i < digits.length){
//         str += digits[i];
//     }
//     Number(str) += 1;
//     return [...str];
// };

// const res1 = plusOne([1,2,3]);
// const res2 = plusOne([4,3,2,1]);
// console.log(res1, res2);

const plusOne = function (digits) {
   let carry = 1;
    sum = 0;
    index = digits.length - 1;

    while (carry > 0 && index > -1) {
        sum = digits[index]  + 1;
        carry = Math.floor(sum / 10);
        digits[index] = sum % 10;
        index --;
    }

    carry && digits.unshift(carry);
    return digits;
};

const res1 = plusOne([1,2,3]);
const res2 = plusOne([4,3,2,1]);
const res3 = plusOne([9]);
const res4 = plusOne([4,3,2,9]);
console.log(res1, res2, res3, res4);