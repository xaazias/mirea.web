const checkInput = (event) => {
    
    let icon = event.target.parentElement.querySelector(".em");

    if (event.target.value) 
    {
        icon.classList.remove('em-x'); 
        icon.classList.add('em-white_check_mark');
    }
    else 
    {
        icon.classList.remove('em-white_check_mark'); 
        icon.classList.add('em-x');
    }
}

document.getElementById('input-1').addEventListener('input', checkInput);
document.getElementById('input-2').addEventListener('input', checkInput);
document.getElementById('input-3').addEventListener('input', checkInput);
document.getElementById('input-4').addEventListener('input', checkInput);