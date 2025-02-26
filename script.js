/*document.getElementById('registerForm').addEventListener('submit',async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert(data.message);
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        alert(data.message);
    } else {
        alert(data.error);
    }
});*/

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        // Make POST request to register API
        const res = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();
        if (res.ok) {
            alert(data.message); // Success message
        } else {
            alert(data.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred. Please try again.');
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);  // Log email value
    console.log("Password:", password);


    try {
        // Make POST request to login API
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (res.ok/* && data.token*/) {
            localStorage.setItem('token', data.token); // Store JWT in localStorage
            alert(data.message);
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
    }
});


//