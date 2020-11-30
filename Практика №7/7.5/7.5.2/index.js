function getSum() {
    
    let input1 = document.getElementById('input-1');
    let input2 = document.getElementById('input-2');

    document.getElementById('p-result').innerHTML = `= ${parseInt(input1.value) + parseInt(input2.value)}`;
}