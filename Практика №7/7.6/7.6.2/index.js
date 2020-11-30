function changeParagraphs(context) {
    
    let elems = document.body.getElementsByTagName("p");
    
    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = `${i}. ${elems[i].innerHTML}`;
    }
    context.disabled = true;
}