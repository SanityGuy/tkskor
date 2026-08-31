const id = {
    navbar: {
        home: "Beranda",
        calculator: "Kalkulator",
        about: "Tentang",
    },

    home: {
        label: "BERANDA UTAMA",
        title: "Selamat Datang di ",
        title2: "TKSkor",
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
        title: "Hitung Nilai Kamu.",
        description:
            "Masukkan nilai TKA, TKAD, dan rata-rata nilai rapormu untuk menghitung perkiraan hasil kamu.",

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
        description: "TKScore adalah kalkulator cepat dan transparan yang dibangun menggunakan React dan Vite untuk menghitung estimasi nilai akademik kamu secara instan.",
        
        cards: {
            project: {
                title: "Info Proyek",
                description: "TKScore dibuat untuk menyediakan platform yang cepat, bebas iklan, dan open-source. Dibangun secara asli dengan React dan Vite untuk kecepatan kalkulasi sisi klien yang optimal.",
            },
            infrastructure: {
                title: "Didukung oleh Vercel",
                description: "Proyek ini berjalan sepenuhnya di jaringan global edge Vercel, memastikan waktu pemuatan instan, deployment berkelanjutan, dan keandalan arsitektur yang tinggi.",
            },
            privacy: {
                title: "Tidak Perlu Login",
                description: "Privasi sejak awal. Anda tidak perlu mendaftar, membuat akun, atau login untuk menggunakan kalkulator ini. Data Anda tetap sepenuhnya berada di browser Anda.",
            },
            developers: {
                title: "Ingin Berkontribusi?",
                description: "Apakah Anda seorang pengembang? Proyek ini bersifat open-source. Bantu mengoptimalkan algoritma penilaian, menambahkan modul tata letak baru, atau memperbaiki bug melalui repositori publik kami.",
                button: "Lihat GitHub"
            },
            community: {
                title: "Jaringan Komunitas Kami",
                description: "TKScore adalah proyek sampingan di bawah payung pengembang kami. Bergabunglah dengan Discord kami untuk berkumpul, berkolaborasi, atau mengikuti SkyFlix Network! sebuah platform khusus yang dirancang untuk media penerbangan umum.",
                button: "Gabung Discord"
            },
            support: {
                title: "Dukung Karya Kami",
                description: "Aplikasi ini sepenuhnya didanai sendiri, open-source, dan bersih dari pelacak. Jika utilitas ini telah membantu Anda merencanakan langkah Anda, pertimbangkan untuk mendukung pengembangan berkelanjutan kami.",
                button: "Dukung Kami"
            }
        },

        footer: "Pembuat: ",
        specialThanks: "Terima kasih atas dukungan dari para donatur",
    },

    warning: {
        title: "Pemberitahuan Penting",
        message: "Ini hanya merupakan perkiraan dan tidak menjamin penerimaan resmi atau pendaftaran akhir di sekolah atau institusi mana pun.",
    },

    score: {
        overlimit: "Skor tidak boleh lebih tinggi dari 100.",
        underlimit: "Skor tidak boleh lebih rendah dari 0.",
        valid: "Silakan masukkan skor yang valid antara 0 dan 100 untuk setiap kolom yang diperlukan.",
    },
};

export default id;
