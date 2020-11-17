let arr = [12, 15, 20, 25, 59, 79], result = 0;

for (let i = 0; i < arr.length; i++)
    result += arr[i];

alert(Math.round(result / arr.length));