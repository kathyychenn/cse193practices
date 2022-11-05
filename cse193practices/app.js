'use strict';
var test = prompt("Welcome to my website - type your name :P");

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('pink-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Pink";
    } else {
        this.textContent = "Light";
    }

    console.log('cuurent class name: ' + className);
});