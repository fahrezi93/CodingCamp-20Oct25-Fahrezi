// ===== CUSTOM MODAL FOR NAME INPUT =====
const nameModal = document.getElementById('nameModal');
const nameInput = document.getElementById('nameInput');
const nameInputError = document.getElementById('nameInputError');
const submitNameBtn = document.getElementById('submitNameBtn');

// Show modal
function showNameModal() {
    nameModal.classList.add('active');
    setTimeout(() => {
        nameInput.focus();
    }, 300);
}

// Hide modal
function hideNameModal() {
    nameModal.classList.remove('active');
}

// Validate name input
function validateNameInput(name) {
    if (!name || name.trim().length === 0) {
        nameInputError.textContent = 'Nama tidak boleh kosong';
        return false;
    }
    if (name.trim().length < 2) {
        nameInputError.textContent = 'Nama minimal 2 karakter';
        return false;
    }
    if (name.trim().length > 50) {
        nameInputError.textContent = 'Nama maksimal 50 karakter';
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameInputError.textContent = 'Nama hanya boleh berisi huruf';
        return false;
    }
    nameInputError.textContent = '';
    return true;
}

// Submit name
function submitName() {
    const name = nameInput.value;
    
    if (validateNameInput(name)) {
        // Simpan ke localStorage
        localStorage.setItem('userName', name.trim());
        
        // Update hero title
        updateHeroTitle(name.trim());
        
        // Hide modal
        hideNameModal();
        
        // Clear input
        nameInput.value = '';
    }
}

// Update hero title
function updateHeroTitle(userName) {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `Halo ${userName}, <span class="gradient-text">Selamat Datang di Website</span>`;
    }
}

// Check and show modal if needed
function checkUserName() {
    const userName = localStorage.getItem('userName');
    
    if (!userName) {
        // Tampilkan modal setelah delay singkat
        setTimeout(() => {
            showNameModal();
        }, 500);
    } else {
        // Update hero title dengan nama yang tersimpan
        updateHeroTitle(userName);
    }
}

// Reset user name (untuk tombol ganti nama)
function resetUserName() {
    localStorage.removeItem('userName');
    nameInput.value = '';
    nameInputError.textContent = '';
    showNameModal();
}

// Event listeners
submitNameBtn.addEventListener('click', submitName);

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitName();
    }
});

nameInput.addEventListener('input', () => {
    // Clear error saat user mengetik
    if (nameInputError.textContent) {
        nameInputError.textContent = '';
    }
});

// Prevent modal close on overlay click
nameModal.addEventListener('click', (e) => {
    if (e.target === nameModal) {
        // Shake animation jika user coba close
        const container = document.querySelector('.modal-container');
        container.style.animation = 'shake 0.5s';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkUserName();
    
    // Event listener untuk tombol ganti nama
    const changeNameBtn = document.getElementById('changeNameBtn');
    if (changeNameBtn) {
        changeNameBtn.addEventListener('click', resetUserName);
    }
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

// Validation functions
function validateNama(nama) {
    const namaRegex = /^[a-zA-Z\s]{2,50}$/;
    return namaRegex.test(nama.trim());
}

function validateTanggalLahir(tanggal) {
    if (!tanggal) return false;
    const selectedDate = new Date(tanggal);
    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();
    return age >= 0 && age <= 150;
}

function validateJenisKelamin() {
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    return jenisKelamin !== null;
}

function validatePesan(pesan) {
    return pesan.trim().length >= 10;
}

// Show error message
function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear error message
function clearError(inputId) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Update current time
function updateCurrentTime() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZoneName: 'short'
    };
    const timeString = now.toLocaleString('en-US', options);
    document.getElementById('currentTime').textContent = timeString;
}

// Update time every second
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Get form inputs
const namaInput = document.getElementById('nama');
const tanggalLahirInput = document.getElementById('tanggalLahir');
const pesanInput = document.getElementById('pesan');

// Real-time validation on blur
namaInput.addEventListener('blur', () => {
    if (namaInput.value && !validateNama(namaInput.value)) {
        showError('nama', 'Nama harus 2-50 karakter, hanya huruf dan spasi');
    } else {
        clearError('nama');
    }
});

tanggalLahirInput.addEventListener('blur', () => {
    if (tanggalLahirInput.value && !validateTanggalLahir(tanggalLahirInput.value)) {
        showError('tanggalLahir', 'Tanggal lahir tidak valid');
    } else {
        clearError('tanggalLahir');
    }
});

pesanInput.addEventListener('blur', () => {
    if (pesanInput.value && !validatePesan(pesanInput.value)) {
        showError('pesan', 'Pesan minimal 10 karakter');
    } else {
        clearError('pesan');
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear all previous errors
    clearError('nama');
    clearError('tanggalLahir');
    clearError('jenisKelamin');
    clearError('pesan');
    
    // Get form values
    const nama = namaInput.value;
    const tanggalLahir = tanggalLahirInput.value;
    const jenisKelaminElement = document.querySelector('input[name="jenisKelamin"]:checked');
    const jenisKelamin = jenisKelaminElement ? jenisKelaminElement.value : '';
    const pesan = pesanInput.value;
    
    // Validate all fields
    let isValid = true;
    
    if (!validateNama(nama)) {
        showError('nama', 'Nama harus 2-50 karakter, hanya huruf dan spasi');
        isValid = false;
    }
    
    if (!validateTanggalLahir(tanggalLahir)) {
        showError('tanggalLahir', 'Tanggal lahir harus diisi dengan benar');
        isValid = false;
    }
    
    if (!validateJenisKelamin()) {
        showError('jenisKelamin', 'Pilih jenis kelamin');
        isValid = false;
    }
    
    if (!validatePesan(pesan)) {
        showError('pesan', 'Pesan minimal 10 karakter');
        isValid = false;
    }
    
    // If all validations pass
    if (isValid) {
        // Format tanggal lahir
        const dateObj = new Date(tanggalLahir);
        const formattedDate = dateObj.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        // Log form data to console
        console.log('=== Formulir Berhasil Dikirim ===');
        console.log('Nama:', nama);
        console.log('Tanggal Lahir:', formattedDate);
        console.log('Jenis Kelamin:', jenisKelamin);
        console.log('Pesan:', pesan);
        console.log('===================================');
        
        // Display results
        document.getElementById('resultNama').textContent = nama;
        document.getElementById('resultTanggalLahir').textContent = formattedDate;
        document.getElementById('resultJenisKelamin').textContent = jenisKelamin;
        document.getElementById('resultPesan').textContent = pesan;
        
        // Show result box
        const formResult = document.getElementById('formResult');
        formResult.style.display = 'block';
        
        // Scroll to result
        setTimeout(() => {
            formResult.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message.show');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.about-card, .portfolio-card, .feature-item, .headquarter-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== PREVENT FORM RESUBMISSION ON PAGE RELOAD =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== LOG INITIALIZATION =====
console.log('Website Portfolio TechNova - Diinisialisasi');
console.log('Semua fitur interaktif siap digunakan!');
