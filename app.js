'use strict'
const switcher = document.querySelector('.btn');
// Change my comment
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
   
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    
    console.log('current class name: ' + className);
});