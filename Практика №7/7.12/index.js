const el = document.getElementById("elem");

el.addEventListener('click', event => {
    let list = event.target.nextSibling.nextSibling;
    if (list != null) { if (list.nodeName == "UL") list.hidden = !list.hidden; }
});