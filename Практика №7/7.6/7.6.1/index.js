function changeText() {
    
    let p1 = document.getElementById('p-text-1');
    let p2 = document.getElementById('p-text-2');

    let buffer = p1.innerHTML;
   
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = buffer;
}