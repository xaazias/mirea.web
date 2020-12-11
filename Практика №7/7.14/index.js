contents.onclick = function(event) {

    const handleLink = (href) => {
      let isLeaving = confirm(`Вы точно хотите перейти на страницу - ${href}?`);
      if (!isLeaving) return false;
    }

    let target = event.target.closest('a');
    if (target && contents.contains(target)) return handleLink(target.getAttribute('href'));
};