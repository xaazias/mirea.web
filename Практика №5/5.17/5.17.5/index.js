let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], str = '-';

for (let i = 0; i < arr.length; i++) {
    str += `${arr[i].toString()}-`;
}

alert(str);