function showLink(context) {
    let elems = document.body.getElementsByTagName("a");
    
    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = `${elems[i].innerHTML} (${elems[i].href})`;
    }
    context.disabled = true;
}