/* ============================================================
   DATA TERPUSAT BEM KEMA TUS
   Ubah konten website cukup dari file ini.
   Nama pengurus masih placeholder, silakan ganti sesuai data asli.
   ============================================================ */

const ORG = {
  nama: "BEM KEMA TUS",
  namaPanjang: "BEM KEMA Telkom University Surabaya",
  kabinet: "Kabinet Aksarakestra",
  tagline: "Mewujudkan Kampus Progresif, Kritis, dan Berintegritas sebagai pusat pengabdian dan inovasi mahasiswa.",
  alamat: "Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
  sekretariat: "Gedung Student Center, Lantai 2",
  email: "bem@ittelkom-sby.ac.id",
  instagram: "@bemkematus",
  visi: "\u201CMenjadikan BEM KEMA Telkom University Surabaya sebagai wadah aspirasi yang progresif, inklusif, dan berintegritas demi kemajuan institusi dan bangsa.\u201D",
  misi: [
    {
      judul: "Advokasi Responsif",
      desc: "Membangun sistem advokasi mahasiswa yang cepat, tanggap, dan solutif terhadap seluruh isu akademik maupun non-akademik."
    },
    {
      judul: "Pengembangan Kompetensi & Riset",
      desc: "Melalui Kementerian Penristek, kami fokus pada pengembangan riset dan teknologi mahasiswa guna inovasi berkelanjutan."
    },
    {
      judul: "Sinergi Kolaborasi",
      desc: "Memperkuat hubungan harmonis dan kolaboratif antara organisasi mahasiswa di lingkungan internal maupun eksternal kampus."
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
      { nama: "TUS Media Week", desc: "Pekan konten kolaboratif seluruh kementerian dalam satu tema besar." },
      { nama: "Desain Bootcamp", desc: "Pelatihan desain grafis dan videografi untuk staf muda." },
      { nama: "Podcast Suara KEMA", desc: "Obrolan santai isu kampus bersama narasumber internal dan eksternal." }
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
      { nama: "Festival Ramadhan Kampus", desc: "Rangkaian kajian, buka bersama, dan santunan selama Ramadhan." },
      { nama: "Dialog Lintas Iman", desc: "Forum diskusi terbuka membangun toleransi antar mahasiswa." },
      { nama: "Peringatan Hari Besar Keagamaan", desc: "Kolaborasi perayaan hari besar seluruh agama di kampus." }
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
      { nama: "Studi Banding Nasional", desc: "Kunjungan dan pertukaran praktik baik dengan BEM kampus lain." },
      { nama: "Forum Aliansi BEM SI", desc: "Partisipasi aktif dalam aliansi BEM Seluruh Indonesia." },
      { nama: "International Webinar Series", desc: "Webinar bersama pembicara internasional." }
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
      { nama: "Forum Ormawa TUS", desc: "Forum koordinasi bulanan seluruh organisasi mahasiswa." },
      { nama: "KEMA Gathering", desc: "Ajang keakraban lintas himpunan dan UKM." },
      { nama: "Sinergi Proker Bersama", desc: "Pemetaan dan kolaborasi program kerja antar Ormawa." }
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
      { nama: "Kajian Isu Bulanan", desc: "Diskusi terbuka isu terkini kampus dan nasional." },
      { nama: "Policy Brief KEMA", desc: "Publikasi kajian tertulis sebagai bahan advokasi." },
      { nama: "Sekolah Kastrat", desc: "Pelatihan dasar kajian strategis untuk mahasiswa baru." }
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
      { nama: "Telkom Social Action", desc: "Aksi pengabdian masyarakat di desa binaan sekitar Surabaya." },
      { nama: "Green Campus Movement", desc: "Gerakan pengurangan sampah dan penghijauan kampus." },
      { nama: "TUS Tanggap Bencana", desc: "Penggalangan dana dan relawan untuk daerah terdampak bencana." }
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
      { nama: "Posko Advokasi UKT", desc: "Pendampingan mahasiswa dalam pengajuan keringanan UKT." },
      { nama: "KEMA Peduli Beasiswa", desc: "Sosialisasi dan pendampingan informasi beasiswa." },
      { nama: "Survei Kesejahteraan Mahasiswa", desc: "Pemetaan tahunan kondisi kesejahteraan mahasiswa." }
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
      { nama: "TUS Entrepreneur Fest", desc: "Bazar dan kompetisi ide bisnis mahasiswa." },
      { nama: "Merchandise KEMA", desc: "Produksi dan penjualan merchandise resmi organisasi." },
      { nama: "Kelas Bisnis Kreatif", desc: "Workshop bisnis bersama praktisi UMKM dan startup." }
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
      { nama: "TUS Cup", desc: "Turnamen olahraga antar himpunan dan angkatan." },
      { nama: "Sport Day KEMA", desc: "Hari olahraga bersama seluruh civitas akademika." },
      { nama: "Delegasi POMDA", desc: "Persiapan dan pengiriman atlet ke Pekan Olahraga Mahasiswa." }
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
      { nama: "LKMM Tingkat Dasar", desc: "Latihan Keterampilan Manajemen Mahasiswa untuk kader baru." },
      { nama: "Upgrading Pengurus", desc: "Penguatan kapasitas internal pengurus BEM." },
      { nama: "KEMA Leadership Camp", desc: "Kemah kepemimpinan intensif calon penerus organisasi." }
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
      { nama: "Gelar Karya Seni TUS", desc: "Pentas akbar seni musik, tari, dan teater mahasiswa." },
      { nama: "Pekan Budaya Nusantara", desc: "Festival budaya daerah dari berbagai asal mahasiswa." },
      { nama: "Art Corner", desc: "Ruang pameran karya seni rupa mahasiswa di kampus." }
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
      { nama: "National Research Summit", desc: "Agenda unggulan mewadahi inovasi teknologi mahasiswa se-Indonesia." },
      { nama: "Inkubasi PKM", desc: "Pendampingan intensif proposal Program Kreativitas Mahasiswa." },
      { nama: "TUS Tech Talk", desc: "Seminar teknologi bersama praktisi industri." }
    ],
    staf: 9
  }
];

const KEGIATAN = [
  {
    id: 1, tanggal: "24 Okt 2024", kategori: "seminar",
    judul: "Vanguard Leadership Summit: Future Tech & Policy",
    desc: "Membahas integrasi teknologi AI dalam kebijakan publik mahasiswa era modern bersama pembicara nasional.",
    lokasi: "Hall Kampus A", status: "upcoming"
  },
  {
    id: 2, tanggal: "12 Nov 2024", kategori: "sosial",
    judul: "Telkom Mengajar: Digital Literacy for Rural Area",
    desc: "Program pengabdian masyarakat untuk mengenalkan dasar-dasar digital kepada siswa sekolah dasar di desa binaan.",
    lokasi: "Desa Binaan Kenjeran", status: "full"
  },
  {
    id: 3, tanggal: "05 Des 2024", kategori: "internal",
    judul: "Rapat Koordinasi Akhir Tahun (RAKAT) 2024",
    desc: "Evaluasi total kinerja organisasi selama satu tahun periode kepengurusan BEM KEMA TUS.",
    lokasi: "Ruang Rapat Student Center", status: "planning"
  },
  {
    id: 4, tanggal: "15 Okt 2024", kategori: "internal",
    judul: "Malam Keakraban KEMA",
    desc: "Pererat tali persaudaraan antar mahasiswa melalui malam penuh seni dan kolaborasi kreatif.",
    lokasi: "Hall Kampus A", status: "upcoming"
  },
  {
    id: 5, tanggal: "22 Okt 2024", kategori: "penristek",
    judul: "National Research Summit",
    desc: "Agenda unggulan Kementerian Penristek untuk mewadahi inovasi teknologi mahasiswa se-Indonesia.",
    lokasi: "Zoom Meeting", status: "open"
  },
  {
    id: 6, tanggal: "05 Nov 2024", kategori: "sosial",
    judul: "Telkom Social Action",
    desc: "Aksi nyata pengabdian masyarakat di desa binaan sekitar kampus Surabaya.",
    lokasi: "Desa Kenjeran", status: "ongoing"
  },
  {
    id: 7, tanggal: "18 Sep 2024", kategori: "seminar",
    judul: "TUS Tech Talk: Karier di Industri Digital",
    desc: "Seminar karier bersama praktisi industri teknologi membahas peluang kerja lulusan IT.",
    lokasi: "Auditorium Kampus", status: "done"
  },
  {
    id: 8, tanggal: "30 Agu 2024", kategori: "internal",
    judul: "Upgrading Pengurus Kabinet Aksarakestra",
    desc: "Penguatan kapasitas dan sinergi internal seluruh pengurus BEM di awal periode.",
    lokasi: "Villa Trawas, Mojokerto", status: "done"
  },
  {
    id: 9, tanggal: "10 Jan 2025", kategori: "penristek",
    judul: "Inkubasi PKM Batch 1",
    desc: "Pendampingan intensif penyusunan proposal Program Kreativitas Mahasiswa.",
    lokasi: "Lab Terpadu", status: "planning"
  }
];

const GALERI = [
  { kategori: "rapat-kerja", caption: "Rapat Kerja Kabinet Aksarakestra 2024", tone: "dark", size: "tall" },
  { kategori: "seminar", caption: "Vanguard Leadership Summit 2024", tone: "warm", size: "" },
  { kategori: "aksi-sosial", caption: "Telkom Social Action di Desa Kenjeran", tone: "", size: "" },
  { kategori: "penristek", caption: "Final National Research Summit", tone: "red", size: "wide" },
  { kategori: "seminar", caption: "TUS Tech Talk bersama praktisi industri", tone: "", size: "" },
  { kategori: "rapat-kerja", caption: "Koordinasi bulanan seluruh kementerian", tone: "warm", size: "" },
  { kategori: "aksi-sosial", caption: "Green Campus Movement", tone: "dark", size: "" },
  { kategori: "penristek", caption: "Inkubasi PKM bersama dosen pembimbing", tone: "", size: "wide" },
  { kategori: "seminar", caption: "Sekolah Kastrat untuk mahasiswa baru", tone: "red", size: "" }
];
