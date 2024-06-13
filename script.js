function toggleMenu() {
    var menu = document.getElementById('menu');
    var toggle = document.querySelector('.menu-toggle');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        toggle.classList.remove('active');
    } else {
        menu.style.display = 'block';
        toggle.classList.add('active');
    }
}

function changeFontSize(value) {
    var body = document.body;
    var currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize + value) + 'px';
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
