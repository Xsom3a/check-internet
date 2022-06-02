//var from html
let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

// function for onload page 
window.onload = function() {
        if (window.navigator.onLine) {
            online()
        } else {
            offline()
        }
    }
    // add event
window.addEventListener("online", function() {
    online();
});
window.addEventListener("offline", function() {
    offline();
});
reload.onclick = function() {
        window.location.reload();
    }
    // function for Online page 
function online() {
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}
// function for Offline page 

function offline() {
    title.innerHTML = 'Offline Now';
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}