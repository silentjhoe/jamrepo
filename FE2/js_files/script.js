//Mobile Menu Script
const mobileBtnOpen = document.getElementById('mobile-menu-open')
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-menu-exit');

mobileBtnOpen.addEventListener('click', () => {
nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
nav.classList.remove('menu-btn');
})

//Pop up Login Form
document.getElementById('login-button').addEventListener('click', 
function() {
    document.querySelector('.bg-login-form').style.display = "flex";

});

document.querySelector('.close-button').addEventListener('click', 
function() {
    document.querySelector('.bg-login-form').style.display = "none";
});

//Section Buttons
document.getElementById('btn-store').addEventListener('click',
function(){
    alert("Shop Link Coming Soon");
})

document.getElementById('btn-review').addEventListener('click',
function(){
    alert("Review Link Coming Soon");
})

document.getElementById('btn-search').addEventListener('click',
function(){
    alert("Search Link Coming Soon");
})

document.getElementById('btn-login').addEventListener('click',
function(){
    alert("Login Successful!");
})