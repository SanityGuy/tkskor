const id = {
    navbar: {
        home: "Beranda",
        calculator: "Kalkulator",
        about: "Tentang",
    },

    home: {
        label: "BERANDA UTAMA",
        title: "Hitung Skor Kamu!",
        description: "Dapatkan estimasi nilai akhir ujian nasional berdasarkan skor yang kamu masukkan seperti skor TKA, TKAD (jika diperlukan), dan rapot!",
        button: "Mulai Hitung Skor",
        howItWorks: "Cara Kerja",
        steps: {
            enter: {
                title: "Masukkan Nilai",
                description: "Isi skor yang kamu dapatkan untuk setiap mata pelajaran wajib serta nilai rapot.",
            },
            choose: {
                title: "Pilih Mode Perhitungan",
                description: "Pilih opsi TKA biasa atau aktifkan mode TKAD jika diperlukan.",
            },
            calculate: {
                title: "Lihat Hasil Akhir",
                description: "Periksa estimasi total skormu!",
            },
        },
    },

    calculator: {
        label: "KALKULATOR NILAI",
        title: "Hitung nilai kamu.",
        description:
            "Masukkan nilai TKA, TKAD, dan rapor untuk menghitung perkiraan hasil kamu.",

        tkaDescription:
            "Masukkan nilai TKA.",

        rapotTitle:
            "Rata-rata Nilai Rapor",

        rapotDescription:
            "Masukkan rata-rata nilai rapor kamu.",

        tkadToggle:
            "Gunakan TKAD",

        tkadDescription:
            "TKAD saat ini hanya berlaku di Daerah Istimewa Yogyakarta.",

        tkadScoresDescription:
            "Masukkan nilai TKAD.",

        calculate:
            "Hitung nilai",

        result:
            "Nilai perkiraan",

        subjects: {
            indonesian:
                "Bahasa Indonesia",

            mathematics:
                "Matematika",

            english:
                "Bahasa Inggris",

            science:
                "IPA/Sains",
        },
    },

    about: {
        label: "TENTANG PROYEK",
        title: "Di Balik TKScore",
        description: "TKScore adalah kalkulator cepat dan transparan yang dibangun menggunakan React dan Vite untuk menghitung estimasi skormu secara instan.",
        
        cards: {
            project: {
                title: "Informasi Proyek",
                description: "TKScore diciptakan untuk menyediakan alat hitung nilai yang cepat, bebas iklan, dan open-source. Dibangun menggunakan React dan Vite demi kecepatan dan keandalan optimal.",
            },
            infrastructure: {
                title: "Didukung oleh Vercel",
                description: "Proyek ini berjalan sepenuhnya di jaringan edge global Vercel, memastikan waktu muat instan, penerapan berkelanjutan, dan keandalan arsitektur yang luar biasa.",
            },
            privacy: {
                title: "Tanpa Perlu Masuk",
                description: "Privasi diutamakan. Kamu tidak perlu mendaftar atau membuat akun untuk menggunakan kalkulator ini. Data kamu tetap aman sepenuhnya di dalam browsermu.",
            },
            developers: {
                title: "Ingin Berkontribusi?",
                description: "Apakah kamu seorang developer? Proyek ini bersifat open-source. Bantu kami mengoptimalkan algoritma, menambahkan modul perhitungan baru, atau memperbaiki bug melalui GitHub.",
                button: "Kunjungi GitHub"
            },
            community: {
                title: "Jaringan Komunitas",
                description: "TKScore adalah bagian dari proyek sampingan kami. Bergabunglah ke Discord untuk mengobrol, berkolaborasi, atau mengikuti SkyFlix Network! platform khusus media aviasi umum.",
                button: "Gabung Discord"
            },
            support: {
                title: "Dukung Karya Kami",
                description: "Aplikasi ini didanai mandiri, bersifat open-source, dan bersih dari pelacak. Jika alat ini membantumu, pertimbangkan untuk mendukung kelangsungan pengembangannya.",
                button: "Dukung Kami"
            }
        },

        footer: "Dibuat dengan 💖 oleh ",
    }, 

    warning: {
        title: "Penting",
        message: "Ini hanya merupakan simulasi perhitungan dan tidak menjamin kelulusan atau penerimaan resmi di institusi mana pun.",
    },

    score: {
        overlimit: "Skor tidak boleh lebih dari 100.",
        underlimit: "Skor tidak boleh kurang dari 0.",
        valid: "Tolong untuk mengisi nilai angka yang valid antara 0 sampai 100 untuk semua pengisian nilai."
    },
};

export default id;
