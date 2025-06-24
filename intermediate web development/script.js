document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errors = [];

    if (!name) errors.push('Full Name is required.');
    if (!phone || !/^\d{10}$/.test(phone)) errors.push('Valid 10-digit phone number is required.');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email is required.');
    if (!message) errors.push('Message is required.');

    const errorDiv = document.getElementById('formErrors');
    errorDiv.innerHTML = errors.length ? '<p>' + errors.join('</p><p>') + '</p>' : '<p>Form submitted successfully!</p>';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const errors = [];

    if (!firstName) errors.push('First name is required.');
    if (!lastName) errors.push('Last name is required.');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email is required.');
    if (password.length < 6) errors.push('Password must be at least 6 characters.');
    if (password !== confirmPassword) errors.push('Passwords do not match.');

    const errorDiv = document.getElementById('regFormErrors');
    errorDiv.innerHTML = errors.length ? '<p>' + errors.join('</p><p>') + '</p>' : '<p>Registration successful!</p>';
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => li.remove());

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
