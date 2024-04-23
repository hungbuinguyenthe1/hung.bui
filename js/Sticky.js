
//Header cố định
    window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('stickyHeader');
    } else {
        header.classList.remove('stickyHeader');
    }
    });

