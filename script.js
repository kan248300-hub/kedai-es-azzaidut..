// NOMOR WHATSAPP UTAMA (Sesuai ketentuan teknis)
const NOMOR_WA = "6285785024987";

document.addEventListener("DOMContentLoaded", function() {
    // 1. Fungsionalitas Menu Dropdown di HP
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Menutup menu saat salah satu link diklik di HP
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    });

    // 2. Tombol Pesan Otomatis WhatsApp pada Kartu Produk
    const tombolPesan = document.querySelectorAll(".btn-pesan");
    tombolPesan.forEach(tombol => {
        tombol.addEventListener("click", function() {
            const namaProduk = this.getAttribute("data-product");
            const pesan = encodeURIComponent(`Halo, saya ingin memesan ${namaProduk} dari Kedai Es Azzaidut.`);
            const urlWa = `https://wa.me/${NOMOR_WA}?text=${pesan}`;
            
            // Membuka tautan WhatsApp di tab baru
            window.open(urlWa, "_blank");
        });
    });
});