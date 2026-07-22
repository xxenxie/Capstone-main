// ============================================
// BRUSKO GYM - LOGIN PAGE
// ============================================

// DOM Elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const loginBtn = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// ============================================
// Toggle Password Visibility
// ============================================
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordBtn.innerHTML = type === 'password'
        ? '<i class="fas fa-eye"></i>'
        : '<i class="fas fa-eye-slash"></i>';
});

// ============================================
// Hardcoded Credentials (Demo)
// ============================================
const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// ============================================
// Login Form Submit Handler
// ============================================
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Hide previous error
    errorMessage.classList.remove('show');

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!username || !password) {
        showError('Please fill in all fields');
        return;
    }

    // Show loading state
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
        // Check credentials
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            // Success - redirect to admin panel
            window.location.href = 'admin/admin.php';
        } else {
            // Failed - show error
            showError('Invalid username or password');
            setLoading(false);
        }
    }, 800);
});

// ============================================
// Helper Functions
// ============================================
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.add('show');
}

function setLoading(isLoading) {
    if (isLoading) {
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<span class="spinner"></span> Signing in...';
    } else {
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<span>Sign In</span> <i class="fas fa-arrow-right"></i>';
    }
}

// ============================================
// Enter key to submit (already handled by form)
// Clear error on input
// ============================================
usernameInput.addEventListener('input', () => {
    errorMessage.classList.remove('show');
});

passwordInput.addEventListener('input', () => {
    errorMessage.classList.remove('show');
});
