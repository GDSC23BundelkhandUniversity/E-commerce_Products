
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signincontainer = document.getElementById("signincontainer");
const signupcontainer = document.getElementById("signupcontainer");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
signincontainer.addEventListener("click", () => {
    signincontainer.style.display= 'none';
    signupcontainer.style.display= 'block';
});
signupcontainer.addEventListener("click", () => {
    signupcontainer.style.display= 'none';
    signincontainer.style.display= 'block';
});