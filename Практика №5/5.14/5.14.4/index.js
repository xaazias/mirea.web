let i = 0, sumWhile = 0;

while (i < 100) {
    sumWhile += (i + 1);
    i++;
}

let sumFor = 0;

for (let j = 0; j < 100; j++)
    sumFor += (j + 1);

alert(sumWhile);
alert(sumFor);