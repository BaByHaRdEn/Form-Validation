const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirm');

document.getElementById("show").addEventListener('click',()=>{
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
})
document.getElementById("cshow").addEventListener('click',()=>{
    if (cpassword.type === "password") {
        cpassword.type = "text";
      } else {
        cpassword.type = "password";
      }
})

/*
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
*/