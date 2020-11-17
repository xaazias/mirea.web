let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    
    let s = arr[i].toString()[0];
    
    if (s == '1' || s == '2' || s == '5')
        alert(arr[i]);
}