# TechNova - Portfolio Website

Portfolio website modern untuk RevoU Mini Project dengan desain yang terinspirasi dari Dribbble dan Behance.

## 📋 Fitur

- ✅ **Responsive Design** - Tampil sempurna di desktop, tablet, dan mobile
- ✅ **Modern UI/UX** - Desain clean dengan animasi smooth
- ✅ **Form Validation** - Validasi JavaScript untuk Name, Email, Phone, dan Message
- ✅ **Smooth Scrolling** - Navigasi yang smooth antar section
- ✅ **Interactive Navigation** - Active state dan mobile menu
- ✅ **Gradient Effects** - Background gradient yang menarik
- ✅ **Scroll Animations** - Animasi saat scroll untuk better UX

## 📁 Struktur File

```
miniproject-revou/
├── css/
│   └── style.css          # Semua styling untuk website
├── js/
│   └── script.js          # JavaScript untuk interaktivitas dan validasi
├── index.html             # File HTML utama
└── README.md              # Dokumentasi project
```

## 🚀 Cara Menjalankan

### Metode 1: Langsung di Browser
1. Buka folder `miniproject-revou`
2. Double-click file `index.html`
3. Website akan terbuka di browser default

### Metode 2: Menggunakan Live Server (Recommended)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di `http://localhost:5500`

### Metode 3: Menggunakan Python HTTP Server
```bash
cd miniproject-revou
python -m http.server 8000
```
Buka browser dan akses `http://localhost:8000`

## 📝 Validasi Form

Form "Message Us" memiliki validasi untuk:

### 1. **Nama**
- Minimal 2 karakter, maksimal 50 karakter
- Hanya huruf dan spasi
- Contoh valid: "Harfi Novian", "John Doe"

### 2. **Tanggal Lahir**
- Format date picker
- Harus tanggal yang valid
- Contoh: "02/04/2023", "01/11/1995"

### 3. **Jenis Kelamin**
- Radio button: Laki-Laki atau Perempuan
- Wajib dipilih salah satu

### 4. **Pesan**
- Minimal 10 karakter
- Wajib diisi
- Contoh: "Lagi Belajar buat Website"

## 🎨 Desain Features

### Color Palette
- **Primary**: #667eea (Purple Blue)
- **Secondary**: #764ba2 (Purple)
- **Accent**: #f093fb (Pink)
- **Dark**: #0f172a (Navy)
- **Success**: #10b981 (Green)

### Typography
- **Headings**: Space Grotesk (Modern, Bold)
- **Body**: Inter (Clean, Readable)

### Sections
1. **Hero Section** - "Hi Harfi, Welcome To Website" dengan gradient background
2. **Headquarter Section** - 3 lokasi kantor (Jakarta, Bandung, Surabaya)
3. **Our Profile Section** - Mission, Vision, Values dengan card design
4. **Portofolio Section** - Showcase projects
5. **Message Us Section** - Form dengan validasi lengkap dan display hasil

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Modern styling dengan:
  - Flexbox & Grid Layout
  - CSS Variables
  - Animations & Transitions
  - Gradient Effects
  - Media Queries untuk responsive
- **JavaScript (Vanilla)** - Interaktivitas:
  - Form Validation
  - Smooth Scrolling
  - Mobile Menu Toggle
  - Scroll Animations
  - Active Navigation

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## ✅ Checklist Requirements RevoU

- [x] Struktur file sesuai (css/style.css, js/script.js, index.html)
- [x] Photo banner (Hero section dengan gradient background)
- [x] About the company (Mission, Vision, Values)
- [x] Vision and mission (Included in About section)
- [x] Welcome message (Hero section)
- [x] Profile page dengan navigasi "Our Profile"
- [x] Design kreatif dan menarik (Inspired by Dribbble/Behance)
- [x] Form "Message Us" dengan validasi:
  - [x] Name validation
  - [x] Email validation
  - [x] Phone Number validation
  - [x] Message validation
  - [x] Show value saat submit (Console log)
- [x] Responsive Design (Desktop & Mobile)
- [x] CSS di folder css/ dengan nama style.css
- [x] JavaScript di folder js/ dengan nama script.js
- [x] Hanya 1 CSS file
- [x] Hanya 1 JavaScript file

## 🎯 Testing Form

Untuk test validasi form, coba input berikut:

**Valid Input:**
- Nama: "Harfi Novian"
- Tanggal Lahir: "01/11/1995"
- Jenis Kelamin: Pilih "Laki-Laki" atau "Perempuan"
- Pesan: "Lagi Belajar buat Website"

**Invalid Input (akan muncul error):**
- Nama: "H" (terlalu pendek)
- Tanggal Lahir: (kosong)
- Jenis Kelamin: (tidak dipilih)
- Pesan: "Hi" (terlalu pendek, minimal 10 karakter)

**Hasil Submit:**
Setelah form valid dan di-submit, hasil akan ditampilkan di bawah form dengan:
- Current time (update setiap detik)
- Nama yang diinput
- Tanggal Lahir (format: DD/MM/YYYY)
- Jenis Kelamin yang dipilih
- Pesan yang ditulis

## 📊 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 👨‍💻 Development Notes

### Untuk Deploy ke GitHub Pages:
1. Push semua file ke GitHub repository
2. Go to Settings > Pages
3. Select branch: main
4. Folder: / (root)
5. Save

### Untuk Deploy ke Netlify:
1. Drag & drop folder `miniproject-revou` ke Netlify
2. Website akan langsung live

## 📞 Support

Jika ada pertanyaan atau issue, silakan hubungi:
- Email: hello@technova.com
- Phone: +62 812-3456-7890

## 📄 License

© 2025 TechNova. All rights reserved.

---

**Dibuat dengan ❤️ untuk RevoU Mini Project**
