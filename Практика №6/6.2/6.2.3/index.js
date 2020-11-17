let arr = [4, 2, 5, 19, 13, 0, 10], buffer = 0;

for (let i = 0; i < arr.length; i++)
    buffer += Math.pow(arr[i], 3);

alert(Math.sqrt(buffer, 2));