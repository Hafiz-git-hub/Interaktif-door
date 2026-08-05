// Element Selection
const adminBtn = document.getElementById('adminBtn');
const visitorBtn = document.getElementById('visitorBtn');
const mobileAdminBtn = document.getElementById('mobileAdminBtn');
const mobileVisitorBtn = document.getElementById('mobileVisitorBtn');
const authWrapper = document.getElementById('authWrapper');
const buttonFinal = document.getElementById('button-final');

const visitorForm = document.getElementById('visitorForm');
const adminForm = document.getElementById('adminForm');

// Toggle Slide Panel (Desktop & Mobile)
if (adminBtn) {
    adminBtn.addEventListener('click', () => {
        authWrapper?.classList.add("panel-active");
    });
}

if (visitorBtn) {
    visitorBtn.addEventListener('click', () => {
        authWrapper?.classList.remove("panel-active");
    });
}

if (mobileAdminBtn) {
    mobileAdminBtn.addEventListener('click', () => {
        authWrapper?.classList.add("panel-active");
    });
}

if (mobileVisitorBtn) {
    mobileVisitorBtn.addEventListener('click', () => {
        authWrapper?.classList.remove("panel-active");
    });
}

// Handler Form Kunjungi / Tamu (Langsung Klik Tanpa Email & Password -> main.html)
if (visitorForm) {
    visitorForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form reload bawaan
        
        // Transisi Smooth Fade Out
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";

        // Redirect langsung ke Halaman Utama (main.html)
        setTimeout(() => {
            window.location.href = "main.html"; 
        }, 500);
    });
}

// Handler Form Admin (Perlu Email & Password -> Dashboard Admin atau main.html)
if (adminForm) {
    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;

        // Contoh validasi sederhana
        if(email && password) {
            alert(`Login Admin Berhasil!\nSelamat datang, ${email}`);
            
            document.body.style.transition = "opacity 0.5s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "main.html"; // Atau ganti ke admin-dashboard.html jika ada
            }, 500);
        }
    });
}

// Button Final Action (Transisi Kembali Ke door.html)
if (buttonFinal) {
    buttonFinal.addEventListener('click', () => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = 'door.html';
        }, 500);
    });
}