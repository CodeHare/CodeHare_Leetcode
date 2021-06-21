# 66.加一

## 题目描述

```
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## 思路

- 读懂题意: 就是将一个输入的数,按照位数分解在一个数组里面, 并且给最后一个元素+1

> 第一次思路 (失败了):
> 判断是不是0
> 是0 , 直接+1
> 不是0, 遍历数组拿出元素**拼接**, 最后转换-1

- 学习思路:
  - **竖式加法**, 进位使用变量`carry`表示
  - 遍历数组反向进行

  - 遍历截至条件:
    - 遍历完毕所有元素 且 `carry`为0时

  - 特殊点:
    - 当 `carry` 最终还是大于 0, 需要在数组最前方插入一位  

## 复杂度

- 时间复杂度：$O(N)$, N 为数组长度。
- 空间复杂度：$O(1)$。

## 代码

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let carry = 1;
        sum = 0;
        index = digits.length - 1;

    while(carry > 0 && index > -1){
        sum = digits[index] + 1;
        carry = Math.floor(sum / 10);
        digits[index] = sum % 10;
        index--;
    }

    carry && digits.unshift(carry);

    return digits;
      
};
```
