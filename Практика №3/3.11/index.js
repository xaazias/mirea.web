const checkInput = (event) => {
    
    let checkText = event.target.parentElement.querySelector('.input-text');

    if (event.target.checked) 
    {
        checkText.style.background = '#0075FF';
    }
    else 
    {
        checkText.style.background = 'rgba(0, 0, 0, 0)';
    }
}

document.getElementById('input-1').addEventListener('change', checkInput);
document.getElementById('input-2').addEventListener('change', checkInput);
document.getElementById('input-3').addEventListener('change', checkInput);
document.getElementById('input-4').addEventListener('change', checkInput);