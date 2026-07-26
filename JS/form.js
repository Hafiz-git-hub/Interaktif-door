// Element Selection
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const authWrapper = document.getElementById('authWrapper');
const buttonFinal = document.getElementById('button-final');

const loginForm = document.querySelector('.login-form-box form');
const registerForm = document.querySelector('.register-form-box form');

// Toggle Panel Active / Inactive
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        authWrapper?.classList.add("panel-active");
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        authWrapper?.classList.remove("panel-active");
    });
}

if (mobileRegisterBtn) {
    mobileRegisterBtn.addEventListener('click', () => {
        authWrapper?.classList.add("panel-active");
    });
}

if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', () => {
        authWrapper?.classList.remove("panel-active");
    });
}

// Button Final Action (Transisi Ke door.html)
if (buttonFinal) {
    buttonFinal.addEventListener('click', () => {
        setTimeout(() => {
            document.body.style.transition = "opacity 0.5s ease";
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = 'door.html';
            }, 500);
        }, 1200);
    });
}

// Handling Submit Form Login (Sign In -> main.html)
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah reload halaman bawaan form
        
        // Animasi transisi fade out
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";

        // Pindah ke halaman main.html
        setTimeout(() => {
            window.location.href = "main.html"; 
        }, 500);
    });
}

// Handling Submit Form Register (Sign Up -> Pindah ke Login)
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Pendaftaran anggota/pengunjung berhasil! Silakan Sign In untuk masuk.");
        authWrapper?.classList.remove("panel-active"); // Kembalikan ke panel Login
    });
}