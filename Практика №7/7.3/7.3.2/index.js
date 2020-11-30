function getInactive(context) {
    context.disabled = true;
}

document.getElementById('button-2').onclick = function() { 
    document.getElementById('button-1').disabled = false; 
};