const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirm');
const date= document.getElementById('dob');

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

function minValue() {
  let d = new Date();
  let dd = d.getDate();
  let mm = d.getMonth()+1;
  let yyyy = d.getFullYear()-18;
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 
  
  d = yyyy+'-'+mm+'-'+dd;
  document.getElementById("dob").setAttribute("max", d);
}

form.addEventListener('submit', e => {
	e.preventDefault();
  checkInputs();
    /*myFunction();*/
});

function checkInputs() {
  const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();
  const dateValue= date.value.trim();

  if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
  if(dateValue === '') {
		setErrorFor(date, 'Enter Date');
	} else {
		setSuccessFor(date);
	}

  if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Enter a valid email');
	} else {
		setSuccessFor(email);
	}
  if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(cpasswordValue === '') {
		setErrorFor(cpassword, 'Confirm Password');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, 'Passwords does not match');
	} else{
		setSuccessFor(cpassword);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-element error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-element success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function myFunction() {
  window.location.href = "next.html";
}
document.getElementById('password').addEventListener('focus',()=>{
	document.getElementById('show').style.visibility="visible"
})
document.getElementById('confirm').addEventListener('focus',()=>{
	document.getElementById('cshow').style.visibility="visible"
})
