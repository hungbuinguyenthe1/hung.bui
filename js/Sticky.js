
//Header cố định
    window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('stickyHeader');
    } else {
        header.classList.remove('stickyHeader');
    }
    });

// Sidebar cố định
    window.addEventListener('scroll', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.scrollY > 0) {
        sidebar.classList.add('stickySidebar');
    } else {
        sidebar.classList.remove('stickySidebar');
    }
    });
