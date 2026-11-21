/* ============================================================
   DATA TERPUSAT BEM KEMA TUS
   Ubah konten website cukup dari file ini.
   Nama pengurus masih placeholder, silakan ganti sesuai data asli.
   ============================================================ */

const ORG = {
  nama: "BEM KEMA TUS",
  namaPanjang: "BEM KEMA Telkom University Surabaya",
  kabinet: "Kabinet Aksarakestra",
  tagline: "#Satu Aksara, Bersama BerSatu",
  alamat: "Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
  sekretariat: "Gedung Student Center, Lantai 2",
  email: "bem@ittelkom-sby.ac.id",
  instagram: "@bemkematus",
  visi: "Mewujudkan Badan Eksekutif Mahasiswa sebagai garda terdepan mahasiswa yang berintegritas, aspiratif, dan informatif dalam mengawal kepentingan mahasiswa, memperjuangkan nilai keadilan, serta mendorong terciptanya perubahan positif yang berkelanjutan bagi lingkungan kampus dan masyarakat.",
  misi: [
    {
      judul: "Penyalur & Pengawal Aspirasi",
      desc: "Menjadi wadah penyalur dan pengawal aspirasi mahasiswa."
    },
    {
      judul: "BEM Solid, Profesional, & Transparan",
      desc: "Membangun BEM yang solid, profesional, dan transparan."
    },
    {
      judul: "Sinergi Seluruh Elemen Kampus",
      desc: "Menjalin sinergi dan kolaborasi dengan seluruh elemen kampus dan organisasi kemahasiswaan."
    },
    {
      judul: "Agen Perubahan",
      desc: "Mengoptimalkan peran BEM sebagai agen perubahan."
    },
    {
      judul: "Pengembangan Potensi Mahasiswa",
      desc: "Mengembangkan potensi mahasiswa dalam bidang intelektual, minat, dan bakat."
    },
    {
      judul: "Kualitas Komunikasi & Informasi",
      desc: "Meningkatkan kualitas komunikasi dan informasi antara BEM dan mahasiswa."
    },
    {
      judul: "Lingkungan Kritis, Partisipatif, & Demokratis",
      desc: "Mendorong terciptanya lingkungan kampus yang kritis, partisipatif, dan demokratis."
    },
    {
      judul: "Sosial & Pengabdian Masyarakat",
      desc: "Mengadakan program sosial dan pengabdian masyarakat."
    }
  ]
};

const PIMPINAN = {
  presiden: { nama: "Awra Sank Rama", jabatan: "Presiden Mahasiswa" },
  wapres:   { nama: "Mas Adekanz", jabatan: "Wakil Presiden" },
  sekretaris: ["Kak Jipaa", "Nabila", "Oktav", "Firda Nurul Setyawan", "Sarah"],
  bendahara: ["Kak Jihan", "Tasya"]
};

/* Setiap kemenko dipimpin Menko + Wakil Menko dan membawahi 3 kementerian */
const KEMENKO = [
  {
    id: "dinamisasi-kampus",
    nama: "Dinamisasi Kampus",
    menko: "Mas Ajax",
    wamenko: "Nama Wakil Menko",
    desc: "Menjaga harmonisasi dan ritme pergerakan internal kampus."
  },
  {
    id: "media-pengembangan",
    nama: "Media & Pengembangan",
    menko: "Mas Arya",
    wamenko: "Nama Wakil Menko",
    desc: "Pusat kreatifitas, informasi, dan peningkatan kapasitas SDM."
  },
  {
    id: "pergerakan",
    nama: "Pergerakan",
    menko: "Mas Sul",
    wamenko: "Nama Wakil Menko",
    desc: "Ujung tombak advokasi dan gerakan aksi mahasiswa."
  },
  {
    id: "kemahasiswaan",
    nama: "Kemahasiswaan",
    menko: "Mas Vigo",
    wamenko: "Nama Wakil Menko",
    desc: "Wadah minat, bakat, dan kesejahteraan seluruh mahasiswa."
  }
];

/* Setiap kementerian punya halaman sendiri: kementerian.html?id=<id> */
const KEMENTERIAN = [
  {
    id: "komdigi",
    singkat: "KD",
    nama: "Komunikasi & Digital",
    kemenko: "media-pengembangan",
    menteri: "Mas Izul",
    wamenteri: "Nama Wakil Menteri",
    desc: "Membangun infrastruktur komunikasi digital dan branding organisasi yang modern.",
    visi: "Menjadi garda terdepan citra digital BEM KEMA TUS yang informatif, kreatif, dan dekat dengan mahasiswa.",
    misi: [
      "Mengelola seluruh kanal media sosial organisasi secara konsisten dan profesional.",
      "Membangun identitas visual dan branding yang kuat di setiap publikasi.",
      "Menyediakan dokumentasi dan peliputan untuk seluruh agenda organisasi."
    ],
    proker: [
      {
        nama: "TUS Media Week", desc: "Pekan konten kolaboratif seluruh kementerian dalam satu tema besar.",
        tujuan: "Membangun identitas konten yang kuat dan kolaboratif antar kementerian dalam satu tema besar.",
        sasaran: "Seluruh pengurus BEM dan mahasiswa umum",
        jumlahPeserta: "150+",
        hasil: "Terlaksana dengan partisipasi aktif seluruh kementerian, menghasilkan konten berkualitas.",
        dampak: "Peningkatan engagement media sosial BEM KEMA TUS sebesar 40%.",
        dokumentasi: ["Sesi foto bersama peserta", "Presentasi konten terbaik"]
      },
      {
        nama: "Desain Bootcamp", desc: "Pelatihan desain grafis dan videografi untuk staf muda.",
        tujuan: "Meningkatkan kemampuan desain dan produksi konten visual staf muda Komdigi.",
        sasaran: "Staf baru dan kader Kementerian Komdigi",
        jumlahPeserta: "30",
        hasil: "30 staf berhasil menyelesaikan pelatihan dan menghasilkan karya nyata.",
        dampak: "Kualitas konten publikasi BEM meningkat secara signifikan.",
        dokumentasi: ["Sesi praktik desain", "Pameran karya peserta bootcamp"]
      },
      {
        nama: "Podcast Suara KEMA", desc: "Obrolan santai isu kampus bersama narasumber internal dan eksternal.",
        tujuan: "Membangun kanal komunikasi alternatif yang lebih dekat dengan mahasiswa.",
        sasaran: "Mahasiswa umum dan civitas akademika TUS",
        jumlahPeserta: "1000+ pendengar per episode",
        hasil: "Terlaksana 8 episode podcast dengan rata-rata 1.200 pendengar per episode.",
        dampak: "BEM KEMA TUS semakin dikenal sebagai organisasi yang terbuka dan komunikatif.",
        dokumentasi: ["Rekaman sesi podcast", "Poster promosi episode"]
      }
    ],
    staf: 8
  },
  {
    id: "agama",
    singkat: "AG",
    nama: "Agama",
    kemenko: "dinamisasi-kampus",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Mengelola kegiatan spiritual dan toleransi beragama di lingkungan kampus.",
    visi: "Mewujudkan lingkungan kampus yang religius, toleran, dan damai bagi seluruh pemeluk agama.",
    misi: [
      "Memfasilitasi kegiatan keagamaan seluruh civitas akademika.",
      "Menumbuhkan budaya toleransi antar umat beragama di kampus.",
      "Menjadi jembatan komunikasi antar unit kerohanian mahasiswa."
    ],
    proker: [
      {
        nama: "Festival Ramadhan Kampus", desc: "Rangkaian kajian, buka bersama, dan santunan selama Ramadhan.",
        tujuan: "Mempererat ukhuwah mahasiswa muslim dan menyebarkan nilai kebaikan di bulan Ramadhan.",
        sasaran: "Seluruh mahasiswa muslim dan civitas akademika TUS",
        jumlahPeserta: "300+",
        hasil: "Terlaksana 15 hari kegiatan Ramadhan termasuk kajian harian, buka bersama, dan santunan anak yatim.",
        dampak: "Terciptanya suasana kampus yang religius dan penuh semangat di bulan Ramadhan.",
        dokumentasi: ["Suasana buka bersama", "Penyerahan santunan anak yatim"]
      },
      {
        nama: "Dialog Lintas Iman", desc: "Forum diskusi terbuka membangun toleransi antar mahasiswa.",
        tujuan: "Membangun pemahaman dan toleransi antar pemeluk agama yang berbeda di kampus.",
        sasaran: "Mahasiswa dari berbagai latar belakang agama",
        jumlahPeserta: "80",
        hasil: "Forum berjalan kondusif dengan partisipasi mahasiswa dari 5 agama berbeda.",
        dampak: "Meningkatnya rasa saling menghormati dan solidaritas antar mahasiswa lintas agama.",
        dokumentasi: ["Diskusi panel lintas iman", "Foto bersama peserta dialog"]
      },
      {
        nama: "Peringatan Hari Besar Keagamaan", desc: "Kolaborasi perayaan hari besar seluruh agama di kampus.",
        tujuan: "Merayakan hari besar keagamaan secara inklusif dan kolaboratif bersama seluruh sivitas akademika.",
        sasaran: "Seluruh mahasiswa dan pengurus BEM",
        jumlahPeserta: "200+",
        hasil: "5 hari besar agama diperingati secara kolaboratif sepanjang tahun.",
        dampak: "Kampus TUS dikenal sebagai lingkungan yang inklusif dan menghargai keragaman.",
        dokumentasi: ["Dekorasi peringatan hari besar", "Penampilan seni budaya keagamaan"]
      }
    ],
    staf: 6
  },
  {
    id: "luar-negeri",
    singkat: "LN",
    nama: "Luar Negeri",
    kemenko: "pergerakan",
    menteri: "Mas Gordon",
    wamenteri: "Nama Wakil Menteri",
    desc: "Menjalin kolaborasi strategis dengan entitas di luar Telkom University.",
    visi: "Memperluas jejaring BEM KEMA TUS di kancah regional dan nasional melalui diplomasi mahasiswa.",
    misi: [
      "Membangun kemitraan dengan BEM dan organisasi eksternal se-Indonesia.",
      "Mewakili organisasi dalam forum, aliansi, dan konferensi mahasiswa.",
      "Membuka peluang kolaborasi program lintas kampus."
    ],
    proker: [
      {
        nama: "Studi Banding Nasional", desc: "Kunjungan dan pertukaran praktik baik dengan BEM kampus lain.",
        tujuan: "Memperluas wawasan dan jaringan organisasi melalui kunjungan ke BEM kampus lain.",
        sasaran: "Pengurus inti BEM KEMA TUS",
        jumlahPeserta: "20",
        hasil: "Kunjungan ke 3 kampus besar di Jawa dengan hasil nota kesepahaman bersama.",
        dampak: "Terbukanya peluang kolaborasi program kerja lintas kampus.",
        dokumentasi: ["Kunjungan ke Universitas Brawijaya", "Penandatanganan MoU antar BEM"]
      },
      {
        nama: "Forum Aliansi BEM SI", desc: "Partisipasi aktif dalam aliansi BEM Seluruh Indonesia.",
        tujuan: "Merepresentasikan suara mahasiswa TUS di forum nasional BEM Seluruh Indonesia.",
        sasaran: "Delegasi BEM KEMA TUS",
        jumlahPeserta: "10 delegasi",
        hasil: "BEM KEMA TUS aktif terlibat dalam 4 forum nasional BEM SI sepanjang tahun.",
        dampak: "Meningkatnya posisi tawar dan peran BEM KEMA TUS di kancah nasional.",
        dokumentasi: ["Foto delegasi di forum BEM SI", "Dokumentasi sidang pleno"]
      },
      {
        nama: "International Webinar Series", desc: "Webinar bersama pembicara internasional.",
        tujuan: "Membuka wawasan mahasiswa terhadap isu global melalui sesi dialog dengan pakar internasional.",
        sasaran: "Mahasiswa TUS dan umum",
        jumlahPeserta: "500+ peserta daring",
        hasil: "3 sesi webinar internasional dengan pembicara dari Malaysia, Singapura, dan Australia.",
        dampak: "Mahasiswa TUS mendapatkan perspektif global yang memperluas cakrawala berpikir.",
        dokumentasi: ["Tangkapan layar sesi webinar", "Sertifikat peserta webinar"]
      }
    ],
    staf: 6
  },
  {
    id: "dalam-negeri",
    singkat: "DN",
    nama: "Dalam Negeri",
    kemenko: "dinamisasi-kampus",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Harmonisasi hubungan antar Ormawa dan unit internal kampus.",
    visi: "Menciptakan ekosistem organisasi mahasiswa internal yang solid, sinergis, dan saling menguatkan.",
    misi: [
      "Menjadi penghubung utama BEM dengan seluruh Ormawa dan UKM.",
      "Mengelola forum komunikasi rutin antar organisasi internal.",
      "Merawat budaya kolaborasi lintas himpunan dan unit kampus."
    ],
    proker: [
      {
        nama: "Forum Ormawa TUS", desc: "Forum koordinasi bulanan seluruh organisasi mahasiswa.",
        tujuan: "Membangun koordinasi rutin yang efektif antar seluruh Ormawa dan UKM di kampus.",
        sasaran: "Ketua dan pengurus inti seluruh Ormawa TUS",
        jumlahPeserta: "60+",
        hasil: "Forum rutin terlaksana setiap bulan dengan partisipasi rata-rata 95% Ormawa.",
        dampak: "Terjalinnya sinergi program kerja dan minimnya konflik jadwal antar Ormawa.",
        dokumentasi: ["Sesi forum koordinasi", "Notulensi kesepakatan bersama"]
      },
      {
        nama: "KEMA Gathering", desc: "Ajang keakraban lintas himpunan dan UKM.",
        tujuan: "Mempererat hubungan antar mahasiswa dari berbagai himpunan dan UKM di kampus.",
        sasaran: "Pengurus aktif seluruh himpunan dan UKM TUS",
        jumlahPeserta: "250+",
        hasil: "Gathering dihadiri oleh perwakilan dari 18 himpunan dan 12 UKM kampus.",
        dampak: "Terciptanya rasa kekeluargaan dan solidaritas antar organisasi mahasiswa.",
        dokumentasi: ["Fun games antar himpunan", "Makan malam bersama seluruh delegasi"]
      },
      {
        nama: "Sinergi Proker Bersama", desc: "Pemetaan dan kolaborasi program kerja antar Ormawa.",
        tujuan: "Menyinkronkan program kerja antar Ormawa agar tidak tumpang tindih dan saling mendukung.",
        sasaran: "Pengurus perencanaan program seluruh Ormawa",
        jumlahPeserta: "40",
        hasil: "Tersusunnya kalender kegiatan kampus terpadu yang disepakati seluruh Ormawa.",
        dampak: "Efisiensi penggunaan fasilitas kampus meningkat dan antusiasme mahasiswa bertambah.",
        dokumentasi: ["Workshop pemetaan proker", "Papan kalender kegiatan terpadu"]
      }
    ],
    staf: 7
  },
  {
    id: "polkastrat",
    singkat: "PS",
    nama: "Polkastrat",
    kemenko: "pergerakan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Kajian kebijakan kampus, daerah, dan nasional secara strategis.",
    visi: "Menjadi pusat kajian strategis yang kritis, berbasis data, dan berpihak pada kepentingan mahasiswa.",
    misi: [
      "Melakukan kajian rutin terhadap kebijakan kampus dan isu nasional.",
      "Menerbitkan rilis sikap dan policy brief yang berbobot.",
      "Membangun budaya diskusi kritis di kalangan mahasiswa."
    ],
    proker: [
      {
        nama: "Kajian Isu Bulanan", desc: "Diskusi terbuka isu terkini kampus dan nasional.",
        tujuan: "Membangun budaya kritis dan diskursif di kalangan mahasiswa melalui kajian rutin.",
        sasaran: "Mahasiswa umum dan pengurus BEM",
        jumlahPeserta: "60+",
        hasil: "12 sesi kajian terlaksana sepanjang tahun dengan isu kampus dan nasional yang relevan.",
        dampak: "Meningkatnya kesadaran politik dan kritis mahasiswa terhadap isu-isu strategis.",
        dokumentasi: ["Sesi diskusi panel kajian", "Rilis sikap tertulis Polkastrat"]
      },
      {
        nama: "Policy Brief KEMA", desc: "Publikasi kajian tertulis sebagai bahan advokasi.",
        tujuan: "Menghasilkan dokumen kajian berbasis data untuk mendukung proses advokasi mahasiswa.",
        sasaran: "Pimpinan universitas, pemangku kebijakan, dan mahasiswa umum",
        jumlahPeserta: "Tim riset 15 orang",
        hasil: "4 policy brief diterbitkan dan disampaikan kepada pihak rektorat.",
        dampak: "Advokasi mahasiswa menjadi lebih terstruktur dan berbasis data.",
        dokumentasi: ["Cover policy brief terbitan", "Penyerahan dokumen kepada rektorat"]
      },
      {
        nama: "Sekolah Kastrat", desc: "Pelatihan dasar kajian strategis untuk mahasiswa baru.",
        tujuan: "Memperkenalkan metode kajian strategis kepada mahasiswa baru agar dapat berpikir kritis.",
        sasaran: "Mahasiswa baru angkatan 2026",
        jumlahPeserta: "100",
        hasil: "Sekolah kastrat diikuti 100 peserta dengan output berupa mini kajian dari masing-masing kelompok.",
        dampak: "Regenerasi kader analis kampus yang siap melanjutkan tradisi kritis BEM KEMA TUS.",
        dokumentasi: ["Sesi materi Sekolah Kastrat", "Presentasi mini kajian peserta"]
      }
    ],
    staf: 7
  },
  {
    id: "sosling",
    singkat: "SL",
    nama: "Sosling",
    kemenko: "pergerakan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Aksi pengabdian masyarakat dan kepedulian terhadap lingkungan.",
    visi: "Menghadirkan kebermanfaatan nyata bagi masyarakat sekitar kampus dan kelestarian lingkungan.",
    misi: [
      "Menyelenggarakan program pengabdian masyarakat berkelanjutan.",
      "Menumbuhkan kesadaran lingkungan di kalangan mahasiswa.",
      "Menjadi garda terdepan respon bencana dan aksi sosial."
    ],
    proker: [
      {
        nama: "Telkom Social Action", desc: "Aksi pengabdian masyarakat di desa binaan sekitar Surabaya.",
        tujuan: "Memberikan kontribusi nyata kepada masyarakat sekitar kampus melalui kegiatan pengabdian langsung.",
        sasaran: "Masyarakat desa binaan Kenjeran dan pengurus BEM",
        jumlahPeserta: "80 relawan + 200 penerima manfaat",
        hasil: "Kegiatan pengabdian meliputi pemeriksaan kesehatan gratis, pelatihan literasi, dan bakti lingkungan.",
        dampak: "200 warga mendapatkan layanan langsung dan meningkatnya citra positif kampus di masyarakat.",
        dokumentasi: ["Kegiatan pemeriksaan kesehatan gratis", "Sesi literasi digital anak-anak"]
      },
      {
        nama: "Green Campus Movement", desc: "Gerakan pengurangan sampah dan penghijauan kampus.",
        tujuan: "Membangun kesadaran lingkungan di kalangan mahasiswa dan mewujudkan kampus yang lebih hijau.",
        sasaran: "Seluruh civitas akademika TUS",
        jumlahPeserta: "200+",
        hasil: "Penanaman 100 pohon di area kampus dan penurunan volume sampah plastik sebesar 25%.",
        dampak: "Kampus TUS lebih hijau, asri, dan mahasiswa semakin sadar lingkungan.",
        dokumentasi: ["Aksi penanaman pohon bersama", "Display pameran daur ulang kreatif"]
      },
      {
        nama: "TUS Tanggap Bencana", desc: "Penggalangan dana dan relawan untuk daerah terdampak bencana.",
        tujuan: "Merespons cepat bencana alam dengan mengerahkan relawan dan sumber daya dari kampus.",
        sasaran: "Masyarakat terdampak bencana dan mahasiswa relawan",
        jumlahPeserta: "50 relawan + ribuan penerima bantuan",
        hasil: "Berhasil mengumpulkan Rp 45 juta dan mengirimkan 50 relawan ke lokasi bencana.",
        dampak: "Mahasiswa TUS dikenal sebagai agen tanggap bencana yang sigap dan peduli.",
        dokumentasi: ["Penyerahan bantuan di lokasi bencana", "Briefing tim relawan"]
      }
    ],
    staf: 8
  },
  {
    id: "adkesma",
    singkat: "AK",
    nama: "Adkesma",
    kemenko: "dinamisasi-kampus",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Pusat advokasi dan pelayanan kesejahteraan mahasiswa.",
    visi: "Memastikan setiap mahasiswa mendapatkan hak, layanan, dan kesejahteraan yang layak selama berkuliah.",
    misi: [
      "Mengawal isu UKT, beasiswa, dan fasilitas kampus.",
      "Menyediakan kanal aduan mahasiswa yang cepat dan aman.",
      "Mengedukasi mahasiswa tentang hak dan kewajibannya."
    ],
    proker: [
      {
        nama: "Posko Advokasi UKT", desc: "Pendampingan mahasiswa dalam pengajuan keringanan UKT.",
        tujuan: "Membantu mahasiswa yang kesulitan membayar UKT agar mendapatkan keringanan yang layak.",
        sasaran: "Mahasiswa aktif TUS yang membutuhkan keringanan UKT",
        jumlahPeserta: "120 mahasiswa terdampak",
        hasil: "120 mahasiswa berhasil didampingi dalam proses pengajuan keringanan UKT ke pihak kampus.",
        dampak: "90% mahasiswa yang didampingi berhasil mendapatkan keringanan atau cicilan UKT.",
        dokumentasi: ["Posko konsultasi UKT", "Penyerahan berkas keringanan ke rektorat"]
      },
      {
        nama: "KEMA Peduli Beasiswa", desc: "Sosialisasi dan pendampingan informasi beasiswa.",
        tujuan: "Memastikan mahasiswa TUS mendapatkan akses informasi beasiswa yang merata dan tepat waktu.",
        sasaran: "Seluruh mahasiswa aktif TUS",
        jumlahPeserta: "400+",
        hasil: "Sosialisasi 20+ jenis beasiswa dan pendampingan 150 mahasiswa dalam proses pengajuan.",
        dampak: "Meningkatnya jumlah penerima beasiswa mahasiswa TUS sebesar 15%.",
        dokumentasi: ["Pameran info beasiswa", "Konsultasi pengisian formulir beasiswa"]
      },
      {
        nama: "Survei Kesejahteraan Mahasiswa", desc: "Pemetaan tahunan kondisi kesejahteraan mahasiswa.",
        tujuan: "Mengumpulkan data kondisi kesejahteraan mahasiswa sebagai dasar advokasi yang berbasis bukti.",
        sasaran: "Seluruh mahasiswa aktif TUS",
        jumlahPeserta: "1.200+ responden",
        hasil: "Laporan survei komprehensif dengan 1.200 responden dan 15 indikator kesejahteraan.",
        dampak: "Data survei menjadi dasar rekomendasi kebijakan kampus terkait kesejahteraan mahasiswa.",
        dokumentasi: ["Proses distribusi kuesioner daring", "Presentasi hasil survei ke rektorat"]
      }
    ],
    staf: 8
  },
  {
    id: "ekraf",
    singkat: "EK",
    nama: "Ekonomi & Kreatif",
    kemenko: "media-pengembangan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Pengembangan jiwa entrepreneurship dan kemandirian finansial.",
    visi: "Menumbuhkan ekosistem wirausaha mahasiswa yang kreatif, mandiri, dan berdaya saing.",
    misi: [
      "Memfasilitasi pengembangan usaha rintisan mahasiswa.",
      "Mengelola unit usaha organisasi sebagai sumber dana mandiri.",
      "Menghubungkan mahasiswa dengan mentor dan pelaku industri kreatif."
    ],
    proker: [
      {
        nama: "TUS Entrepreneur Fest", desc: "Bazar dan kompetisi ide bisnis mahasiswa.",
        tujuan: "Mendorong jiwa kewirausahaan mahasiswa dan mempertemukan mereka dengan mentor bisnis.",
        sasaran: "Mahasiswa umum dan pelaku usaha rintisan kampus",
        jumlahPeserta: "300+ pengunjung, 40 booth",
        hasil: "40 booth usaha mahasiswa berpartisipasi dengan omzet total mencapai Rp 80 juta.",
        dampak: "Lahirnya 5 usaha rintisan baru yang berlanjut pasca-event.",
        dokumentasi: ["Suasana bazar Entrepreneur Fest", "Penyerahan hadiah kompetisi bisnis"]
      },
      {
        nama: "Merchandise KEMA", desc: "Produksi dan penjualan merchandise resmi organisasi.",
        tujuan: "Menghasilkan pendapatan mandiri bagi organisasi melalui produksi merchandise resmi.",
        sasaran: "Seluruh mahasiswa dan simpatisan BEM KEMA TUS",
        jumlahPeserta: "500+ pembeli",
        hasil: "Produksi 500 buah merchandise (kaos, tote bag, pin) habis terjual dalam 2 minggu.",
        dampak: "Kas organisasi bertambah dan identitas BEM KEMA TUS semakin dikenal luas.",
        dokumentasi: ["Foto produk merchandise KEMA", "Proses pengemasan pesanan"]
      },
      {
        nama: "Kelas Bisnis Kreatif", desc: "Workshop bisnis bersama praktisi UMKM dan startup.",
        tujuan: "Membekali mahasiswa dengan pengetahuan praktis membangun dan mengembangkan bisnis.",
        sasaran: "Mahasiswa yang tertarik berwirausaha",
        jumlahPeserta: "80",
        hasil: "3 sesi workshop dengan pembicara dari UMKM lokal, startup, dan investor.",
        dampak: "Peserta memiliki rencana bisnis yang lebih terstruktur dan siap dieksekusi.",
        dokumentasi: ["Sesi workshop bisnis kreatif", "Mentoring one-on-one dengan praktisi"]
      }
    ],
    staf: 6
  },
  {
    id: "pora",
    singkat: "PR",
    nama: "PORA",
    kemenko: "kemahasiswaan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Wadah pengembangan prestasi bidang pemuda dan olahraga.",
    visi: "Melahirkan atlet dan talenta muda kampus yang berprestasi di tingkat regional dan nasional.",
    misi: [
      "Membina komunitas dan unit olahraga mahasiswa.",
      "Menyelenggarakan kompetisi olahraga internal kampus.",
      "Mengirim delegasi terbaik ke ajang olahraga eksternal."
    ],
    proker: [
      {
        nama: "TUS Cup", desc: "Turnamen olahraga antar himpunan dan angkatan.",
        tujuan: "Menyediakan wadah kompetisi olahraga yang sehat dan sportif bagi mahasiswa TUS.",
        sasaran: "Seluruh mahasiswa TUS dari semua himpunan dan angkatan",
        jumlahPeserta: "400+ atlet dari 20 tim",
        hasil: "Turnamen berlangsung selama 2 minggu dengan 5 cabang olahraga dan 20 tim peserta.",
        dampak: "Semangat sportivitas meningkat dan lahirnya bakat-bakat atlet baru dari kampus.",
        dokumentasi: ["Upacara pembukaan TUS Cup", "Partai final cabang futsal"]
      },
      {
        nama: "Sport Day KEMA", desc: "Hari olahraga bersama seluruh civitas akademika.",
        tujuan: "Membudayakan gaya hidup aktif dan sehat di kalangan mahasiswa TUS.",
        sasaran: "Seluruh civitas akademika TUS",
        jumlahPeserta: "500+",
        hasil: "Sport Day dihadiri 500+ peserta dengan senam massal, lari santai, dan games olahraga.",
        dampak: "Meningkatnya kesadaran dan motivasi mahasiswa untuk berolahraga secara rutin.",
        dokumentasi: ["Senam massal di lapangan kampus", "Lari santai keliling lingkungan kampus"]
      },
      {
        nama: "Delegasi POMDA", desc: "Persiapan dan pengiriman atlet ke Pekan Olahraga Mahasiswa.",
        tujuan: "Membawa nama TUS di kancah kompetisi olahraga mahasiswa daerah melalui atlet terbaik.",
        sasaran: "Atlet terpilih dari berbagai cabang olahraga",
        jumlahPeserta: "25 atlet delegasi",
        hasil: "TUS mengirimkan 25 atlet dalam 7 cabang olahraga dan meraih 3 medali.",
        dampak: "Prestasi olahraga TUS diakui di tingkat regional dan motivasi atlet kampus meningkat.",
        dokumentasi: ["Latihan intensif persiapan POMDA", "Perayaan perolehan medali delegasi"]
      }
    ],
    staf: 7
  },
  {
    id: "psdm",
    singkat: "PM",
    nama: "PSDM",
    kemenko: "media-pengembangan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Pusat pengembangan sumber daya mahasiswa dan kaderisasi.",
    visi: "Mencetak kader organisasi yang berkarakter, kompeten, dan siap memimpin.",
    misi: [
      "Merancang alur kaderisasi organisasi yang terstruktur.",
      "Menyelenggarakan pelatihan kepemimpinan berjenjang.",
      "Mengelola penilaian dan pengembangan kinerja pengurus."
    ],
    proker: [
      {
        nama: "LKMM Tingkat Dasar", desc: "Latihan Keterampilan Manajemen Mahasiswa untuk kader baru.",
        tujuan: "Membekali kader baru dengan keterampilan manajemen, kepemimpinan, dan organisasi.",
        sasaran: "Mahasiswa baru yang bergabung sebagai staf BEM",
        jumlahPeserta: "60 kader baru",
        hasil: "60 kader baru berhasil menyelesaikan LKMM dengan nilai kepuasan peserta 90%.",
        dampak: "Kader baru BEM lebih siap menjalankan peran dan tanggung jawab organisasi.",
        dokumentasi: ["Sesi materi manajemen diri", "Simulasi rapat dan sidang organisasi"]
      },
      {
        nama: "Upgrading Pengurus", desc: "Penguatan kapasitas internal pengurus BEM.",
        tujuan: "Meningkatkan kapasitas, kohesivitas, dan motivasi seluruh pengurus BEM aktif.",
        sasaran: "Seluruh pengurus aktif BEM KEMA TUS",
        jumlahPeserta: "80 pengurus",
        hasil: "Upgrading selama 2 hari di luar kampus dengan output action plan masing-masing kementerian.",
        dampak: "Pengurus lebih solid, termotivasi, dan memiliki target capaian yang jelas.",
        dokumentasi: ["Outbound tim pengurus BEM", "Penyusunan action plan kementerian"]
      },
      {
        nama: "KEMA Leadership Camp", desc: "Kemah kepemimpinan intensif calon penerus organisasi.",
        tujuan: "Menyiapkan kader terbaik sebagai calon pemimpin organisasi mahasiswa di periode berikutnya.",
        sasaran: "Kader potensial dari berbagai kementerian",
        jumlahPeserta: "40 peserta terpilih",
        hasil: "Leadership Camp 3 hari menghasilkan 40 kader siap pimpin dengan sertifikasi kompetensi.",
        dampak: "Proses regenerasi kepemimpinan BEM KEMA TUS berjalan sehat dan berkelanjutan.",
        dokumentasi: ["Upacara pembukaan Leadership Camp", "Sesi mentoring dengan senior BEM"]
      }
    ],
    staf: 8
  },
  {
    id: "senbud",
    singkat: "SB",
    nama: "Senbud",
    kemenko: "kemahasiswaan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Pelestarian dan apresiasi seni serta budaya nusantara.",
    visi: "Menjadikan kampus sebagai panggung ekspresi seni dan pelestarian budaya nusantara.",
    misi: [
      "Memfasilitasi minat dan bakat seni mahasiswa.",
      "Menyelenggarakan pentas dan festival budaya kampus.",
      "Mengenalkan kekayaan budaya nusantara ke generasi muda."
    ],
    proker: [
      {
        nama: "Gelar Karya Seni TUS", desc: "Pentas akbar seni musik, tari, dan teater mahasiswa.",
        tujuan: "Memberikan panggung ekspresi seni bagi mahasiswa TUS yang berbakat di bidang seni.",
        sasaran: "Mahasiswa TUS dan masyarakat umum",
        jumlahPeserta: "600+ penonton, 80 penampil",
        hasil: "Pentas akbar menampilkan 15 kelompok seni dalam 4 kategori: musik, tari, teater, dan spoken word.",
        dampak: "Apresiasi seni di kampus meningkat dan talenta mahasiswa semakin terasah.",
        dokumentasi: ["Penampilan tari tradisional", "Pentas teater mahasiswa TUS"]
      },
      {
        nama: "Pekan Budaya Nusantara", desc: "Festival budaya daerah dari berbagai asal mahasiswa.",
        tujuan: "Merayakan keberagaman budaya daerah yang dimiliki mahasiswa TUS dari seluruh Indonesia.",
        sasaran: "Seluruh mahasiswa TUS dan masyarakat kampus",
        jumlahPeserta: "400+",
        hasil: "Festival menampilkan budaya dari 15 provinsi dengan pameran, kuliner, dan pertunjukan.",
        dampak: "Meningkatnya rasa bangga dan apresiasi terhadap kekayaan budaya nusantara.",
        dokumentasi: ["Pameran pakaian adat nusantara", "Stan kuliner daerah peserta festival"]
      },
      {
        nama: "Art Corner", desc: "Ruang pameran karya seni rupa mahasiswa di kampus.",
        tujuan: "Menyediakan ruang pamer yang inklusif bagi mahasiswa yang berkarya di bidang seni rupa.",
        sasaran: "Mahasiswa TUS dan pengunjung kampus",
        jumlahPeserta: "30 seniman, 500+ pengunjung pameran",
        hasil: "Pameran menampilkan 50 karya dari 30 mahasiswa selama 5 hari.",
        dampak: "Mahasiswa berbakat seni semakin percaya diri dan mendapat apresiasi dari kampus.",
        dokumentasi: ["Karya lukis peserta Art Corner", "Pembukaan pameran oleh Presiden BEM"]
      }
    ],
    staf: 6
  },
  {
    id: "penristek",
    singkat: "PT",
    nama: "Penristek",
    kemenko: "kemahasiswaan",
    menteri: "Nama Menteri",
    wamenteri: "Nama Wakil Menteri",
    desc: "Pendidikan, Riset, dan Teknologi sebagai pilar inovasi akademik mahasiswa.",
    visi: "Menjadi motor inovasi akademik yang melahirkan riset dan karya teknologi mahasiswa berdampak nyata.",
    misi: [
      "Membudayakan riset dan penulisan ilmiah di kalangan mahasiswa.",
      "Mendampingi tim lomba akademik dan teknologi kampus.",
      "Mengembangkan produk teknologi untuk kebutuhan organisasi dan kampus."
    ],
    proker: [
      {
        nama: "National Research Summit", desc: "Agenda unggulan mewadahi inovasi teknologi mahasiswa se-Indonesia.",
        tujuan: "Menyediakan forum bergengsi bagi mahasiswa untuk mempresentasikan riset dan inovasi teknologi.",
        sasaran: "Mahasiswa peneliti dari seluruh Indonesia",
        jumlahPeserta: "250+ peserta, 50 presenter",
        hasil: "Summit menampilkan 50 presentasi riset dan menghasilkan 10 rekomendasi inovasi teknologi.",
        dampak: "Meningkatnya budaya riset di kalangan mahasiswa TUS dan terjalinnya jejaring peneliti muda.",
        dokumentasi: ["Sesi presentasi penelitian unggulan", "Penyerahan penghargaan best paper"]
      },
      {
        nama: "Inkubasi PKM", desc: "Pendampingan intensif proposal Program Kreativitas Mahasiswa.",
        tujuan: "Meningkatkan jumlah dan kualitas proposal PKM mahasiswa TUS yang lolos pendanaan Dikti.",
        sasaran: "Mahasiswa TUS yang berminat mengajukan PKM",
        jumlahPeserta: "80 peserta dalam 20 tim",
        hasil: "20 tim PKM didampingi secara intensif; 15 tim berhasil lolos ke tahap pendanaan.",
        dampak: "TUS mencatat rekor jumlah PKM lolos pendanaan tertinggi dalam 3 tahun terakhir.",
        dokumentasi: ["Sesi mentoring proposal PKM", "Pengumuman tim lolos pendanaan"]
      },
      {
        nama: "TUS Tech Talk", desc: "Seminar teknologi bersama praktisi industri.",
        tujuan: "Membuka wawasan mahasiswa tentang tren teknologi terkini dan peluang karier di industri.",
        sasaran: "Mahasiswa TUS dan umum",
        jumlahPeserta: "300+",
        hasil: "4 sesi Tech Talk dengan pembicara dari perusahaan teknologi ternama dihadiri 300+ peserta.",
        dampak: "Mahasiswa lebih siap menghadapi industri teknologi dan terinspirasi untuk berinovasi.",
        dokumentasi: ["Sesi materi Tech Talk", "Sesi tanya jawab dengan pembicara"]
      }
    ],
    staf: 9
  }
];

const KEGIATAN = [
  {
    id: 1, tanggal: "24 Okt 2026", dateStr: "2026-10-24", kategori: "seminar", kementerian: "penristek",
    judul: "Leadership Summit Aksarakestra: Future Tech & Policy",
    desc: "Membahas integrasi teknologi AI dalam kebijakan publik mahasiswa era modern bersama pembicara nasional.",
    lokasi: "Hall Kampus A", status: "upcoming", waktu: "09.00 - 14.30 WIB"
  },
  {
    id: 2, tanggal: "12 Nov 2026", dateStr: "2026-11-12", kategori: "sosial", kementerian: "sosling",
    judul: "Telkom Mengajar: Digital Literacy for Rural Area",
    desc: "Program pengabdian masyarakat untuk mengenalkan dasar-dasar digital kepada siswa sekolah dasar di desa binaan.",
    lokasi: "Desa Binaan Kenjeran", status: "full", waktu: "08.00 - 12.00 WIB"
  },
  {
    id: 3, tanggal: "05 Des 2026", dateStr: "2026-12-05", kategori: "internal", kementerian: "umum",
    judul: "Rapat Koordinasi Akhir Tahun (RAKAT) 2026",
    desc: "Evaluasi total kinerja organisasi selama satu tahun periode kepengurusan BEM KEMA TUS.",
    lokasi: "Ruang Rapat Student Center", status: "planning", waktu: "13.00 - 17.00 WIB"
  },
  {
    id: 4, tanggal: "15 Okt 2026", dateStr: "2026-10-15", kategori: "internal", kementerian: "senbud",
    judul: "Malam Keakraban KEMA",
    desc: "Pererat tali persaudaraan antar mahasiswa melalui malam penuh seni dan kolaborasi kreatif.",
    lokasi: "Hall Kampus A", status: "upcoming", waktu: "18.30 - 22.00 WIB"
  },
  {
    id: 5, tanggal: "22 Okt 2026", dateStr: "2026-10-22", kategori: "seminar", kementerian: "penristek",
    judul: "National Research Summit",
    desc: "Agenda unggulan Kementerian Penristek untuk mewadahi inovasi teknologi mahasiswa se-Indonesia.",
    lokasi: "Zoom Meeting", status: "open", waktu: "08.30 - 16.00 WIB"
  },
  {
    id: 6, tanggal: "05 Nov 2026", dateStr: "2026-11-05", kategori: "sosial", kementerian: "sosling",
    judul: "Telkom Social Action",
    desc: "Aksi nyata pengabdian masyarakat di desa binaan sekitar kampus Surabaya.",
    lokasi: "Desa Kenjeran", status: "ongoing", waktu: "07.00 - 15.00 WIB"
  },
  {
    id: 7, tanggal: "18 Sep 2026", dateStr: "2026-09-18", kategori: "seminar", kementerian: "komdigi",
    judul: "TUS Tech Talk: Karier di Industri Digital",
    desc: "Seminar karier bersama praktisi industri teknologi membahas peluang kerja lulusan IT.",
    lokasi: "Auditorium Kampus", status: "done", waktu: "13.30 - 16.30 WIB"
  },
  {
    id: 8, tanggal: "30 Agu 2026", dateStr: "2026-08-30", kategori: "internal", kementerian: "psdm",
    judul: "Upgrading Pengurus Kabinet Aksarakestra",
    desc: "Penguatan kapasitas dan sinergi internal seluruh pengurus BEM di awal periode.",
    lokasi: "Villa Trawas, Mojokerto", status: "done", waktu: "2 Hari 1 Malam"
  },
  {
    id: 9, tanggal: "10 Jan 2027", dateStr: "2027-01-10", kategori: "seminar", kementerian: "penristek",
    judul: "Inkubasi PKM Batch 1",
    desc: "Pendampingan intensif penyusunan proposal Program Kreativitas Mahasiswa.",
    lokasi: "Lab Terpadu", status: "planning", waktu: "09.00 - 12.00 WIB"
  },
  {
    id: 10, tanggal: "01 - 31 Okt 2026", dateStr: "2026-10-01", endDateStr: "2026-10-31", isPeriod: true, kategori: "internal", kementerian: "pora",
    judul: "TUS Cup: Pekan Olahraga & Seni Mahasiswa",
    desc: "Kompetisi akbar multi-cabang olahraga dan seni antar himpunan dan angkatan mahasiswa selama satu bulan penuh.",
    lokasi: "Sarana Olahraga Kampus TUS", status: "ongoing", waktu: "Selama Bulan Oktober"
  },
  {
    id: 11, tanggal: "18 Nov 2026", dateStr: "2026-11-18", kategori: "seminar", kementerian: "polkastrat",
    judul: "Sekolah Kastrat: Dialektika Demokrasi Kampus",
    desc: "Pelatihan kepemimpinan dan kajian kebijakan publik bersama aktivis pergerakan mahasiswa.",
    lokasi: "Ruang Teater Kampus", status: "open", waktu: "13.00 - 16.30 WIB"
  }
];

const GALERI = [
  { kementerian: "umum", kategori: "internal", caption: "Rapat Kerja Kabinet Aksarakestra 2026", tone: "dark", size: "tall" },
  { kementerian: "adkesma", kategori: "seminar", caption: "Posko Advokasi UKT", tone: "warm", size: "" },
  { kementerian: "sosling", kategori: "aksi-sosial", caption: "Telkom Social Action di Desa Kenjeran", tone: "", size: "" },
  { kementerian: "penristek", kategori: "seminar", caption: "Final National Research Summit", tone: "red", size: "wide" },
  { kementerian: "komdigi", kategori: "internal", caption: "TUS Media Week – Konten Kolaboratif", tone: "", size: "" },
  { kementerian: "dalam-negeri", kategori: "internal", caption: "Koordinasi bulanan seluruh kementerian", tone: "warm", size: "" },
  { kementerian: "sosling", kategori: "aksi-sosial", caption: "Green Campus Movement", tone: "dark", size: "" },
  { kementerian: "penristek", kategori: "seminar", caption: "Inkubasi PKM bersama dosen pembimbing", tone: "", size: "wide" },
  { kementerian: "polkastrat", kategori: "seminar", caption: "Sekolah Kastrat untuk mahasiswa baru", tone: "red", size: "" },
  { kementerian: "psdm", kategori: "internal", caption: "LKMM Tingkat Dasar", tone: "dark", size: "" },
  { kementerian: "ekraf", kategori: "internal", caption: "TUS Entrepreneur Fest", tone: "warm", size: "" },
  { kementerian: "senbud", kategori: "internal", caption: "Gelar Karya Seni TUS", tone: "red", size: "wide" },
  { kementerian: "pora", kategori: "internal", caption: "TUS Cup – Turnamen Olahraga", tone: "", size: "" },
  { kementerian: "agama", kategori: "internal", caption: "Festival Ramadhan Kampus", tone: "warm", size: "" },
  { kementerian: "luar-negeri", kategori: "seminar", caption: "Forum Aliansi BEM SI", tone: "dark", size: "" },
  { kementerian: "umum", kategori: "internal", caption: "Foto bersama seluruh pengurus di depan kampus", tone: "red", size: "wide" }
];
