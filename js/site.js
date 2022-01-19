function closeNav() {
    document.getElementById('mySideNav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}

function openNav() {
    document.getElementById('mySideNav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}
