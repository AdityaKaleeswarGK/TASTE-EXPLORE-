// Mock user data array
let users = [];

// Function to check if email already exists
function emailExists(email) {
    return users.some(user => user.email === email);
}

// Function to sign up a user
function signUp(name, email, password) {
    if (emailExists(email)) {
        alert('Email already exists! Please use a different email.');
        return;
    }
    
    let newUser = {
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    alert('Sign-up successful! Please sign in.');
    toggleForms();
}

// Function to sign in a user
function signIn(email, password) {
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Toggle between sign-in and sign-up forms
function toggleForms() {
    let signInForm = document.getElementById('signInForm');
    let signUpForm = document.getElementById('signUpForm');
    
    if (signInForm.classList.contains('visible')) {
        signUpForm.classList.add('visible');
        signInForm.classList.remove('visible');
    } else {
        signInForm.classList.add('visible');
        signUpForm.classList.remove('visible');
    }
    
    toggleButtons();
}

// Toggle active class for buttons
function toggleButtons() {
    let signInBtn = document.getElementById('signInToggle');
    let signUpBtn = document.getElementById('signUpToggle');
    
    signInBtn.classList.toggle('active');
    signUpBtn.classList.toggle('active');
}

// Event listeners
document.getElementById('signInToggle').addEventListener('click', toggleForms);
document.getElementById('signUpToggle').addEventListener('click', toggleForms);

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('signInEmail').value;
    let password = document.getElementById('signInPassword').value;
    signIn(email, password);
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('signUpName').value;
    let email = document.getElementById('signUpEmail').value;
    let password = document.getElementById('signUpPassword').value;
    signUp(name, email, password);
});
