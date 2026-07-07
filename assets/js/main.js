/* ============================================================
   MAIN SCRIPT BEM KEMA TUS  (v2 redesign)
   - Navbar & footer satu sumber
   - Progress bar, counter animasi, sliding pill filter
   - Kemenko panel (menko + wamenko + 3 kementerian)
   - Galeri lightbox, detail kementerian, tilt kartu
   ============================================================ */

const ICONS = {
  arrow: '<svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.5-4.5L7 20"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/></svg>',
  up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};

const NAV_ITEMS = [
  { href: "index.html", label: "Beranda" },
  { href: "visi-misi.html", label: "Visi & Misi" },
  { href: "struktur.html", label: "Struktur" },
  { href: "kementerian.html", label: "Kementerian" },
  { href: "kegiatan.html", label: "Kegiatan" },
  { href: "galeri.html", label: "Galeri" }
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}
function initials(nama) {
  return nama.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/* ---------- Navbar, footer, progress bar ---------- */
function renderChrome() {
  const page = currentPage();
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="progress-bar" id="progressBar"></div>
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="brand">
            <span class="brand-logo">
              <img src="assets/img/logo.png" alt="Logo ${ORG.nama}"
                   onerror="this.remove();this.parentElement.innerHTML='<span class=&quot;logo-fallback&quot;>LOGO</span>'">
            </span>
            ${ORG.nama}
          </a>
          <button class="nav-toggle" aria-label="Buka menu navigasi" aria-expanded="false">${ICONS.menu}</button>
          <div class="nav-links" id="navLinks">
            ${NAV_ITEMS.map(i =>
              `<a href="${i.href}" class="${page === i.href ? "active" : ""}">${i.label}</a>`
            ).join("")}
            <a href="kontak.html" class="btn btn-red nav-cta">Hubungi Kami</a>
          </div>
        </div>
      </nav>`;

    const toggle = header.querySelector(".nav-toggle");
    const links = header.querySelector("#navLinks");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    const bar = header.querySelector("#progressBar");
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }, { passive: true });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="big-ghost" aria-hidden="true">AKSARAKESTRA</div>
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="f-brand">
                <span class="brand-logo"><span class="logo-fallback">LOGO</span></span>
                ${ORG.nama}
              </div>
              <p>Wadah pemersatu dan perjuangan mahasiswa Telkom University Surabaya dalam mewujudkan cita-cita bangsa.</p>
              <div class="footer-socials">
                <a href="#" aria-label="Website">${ICONS.globe}</a>
                <a href="#" aria-label="Instagram">${ICONS.ig}</a>
                <a href="mailto:${ORG.email}" aria-label="Email">${ICONS.mail}</a>
              </div>
            </div>
            <div>
              <h4>Navigasi</h4>
              <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="visi-misi.html">Visi & Misi</a></li>
                <li><a href="struktur.html">Struktur</a></li>
              </ul>
            </div>
            <div>
              <h4>Informasi</h4>
              <ul>
                <li><a href="kementerian.html">Kementerian</a></li>
                <li><a href="kegiatan.html">Kegiatan</a></li>
                <li><a href="galeri.html">Galeri</a></li>
                <li><a href="kontak.html">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4>Sekretariat</h4>
              <p>${ORG.alamat}</p>
              <p style="margin-top:.4rem">${ORG.sekretariat}</p>
              <a class="footer-mail" href="mailto:${ORG.email}">${ICONS.mail} ${ORG.email}</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; 2024 ${ORG.namaPanjang}. The Academic Vanguard.</span>
            <span>Dikembangkan oleh Kementerian Komunikasi & Digital</span>
          </div>
        </div>
      </footer>
      <button class="to-top" aria-label="Kembali ke atas">${ICONS.up}</button>`;

    const toTop = footer.querySelector(".to-top");
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

/* ---------- Reveal + stagger ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains("reveal"));
      const idx = Math.max(0, siblings.indexOf(e.target));
      e.target.style.transitionDelay = (Math.min(idx, 6) * 70) + "ms";
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: .12 });
  els.forEach(el => io.observe(el));
}

/* ---------- Counter animasi ---------- */
function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const animate = el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    if (reducedMotion) { el.textContent = target.toLocaleString("id-ID") + suffix; return; }
    const dur = 1400, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("id-ID") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .5 });
  els.forEach(el => io.observe(el));
}

/* ---------- Sliding pill filter ---------- */
function initChipSlider(rowId, onChange) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const indicator = document.createElement("span");
  indicator.className = "chip-indicator";
  row.prepend(indicator);

  const move = chip => {
    indicator.style.left = chip.offsetLeft + "px";
    indicator.style.width = chip.offsetWidth + "px";
  };
  const active = row.querySelector(".chip.active") || row.querySelector(".chip");
  requestAnimationFrame(() => move(active));
  window.addEventListener("resize", () => {
    const a = row.querySelector(".chip.active");
    if (a) move(a);
  });

  row.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      row.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      move(chip);
      onChange(chip.dataset.kategori);
    });
  });
}

/* ---------- Tilt halus pada kartu ---------- */
function initTilt() {
  if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
  document.querySelectorAll(".event-card, .leader-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - .5) * -4;
      const ry = ((e.clientX - r.left) / r.width - .5) * 4;
      card.style.transform = `translateY(-8px) perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* ---------- Komponen kartu ---------- */
const STATUS_LABEL = {
  upcoming: ["Segera", ""],
  open: ["Open Reg", "open"],
  ongoing: ["Ongoing", "ongoing"],
  planning: ["Planning", "planning"],
  full: ["Full", "planning"],
  done: ["Selesai", "done"]
};

function eventCard(ev) {
  const [label, cls] = STATUS_LABEL[ev.status] || ["Info", ""];
  const [tgl, bln] = ev.tanggal.split(" ");
  return `
    <article class="event-card reveal" data-kategori="${ev.kategori}">
      <div class="event-media">
        <div class="img-ph ${["warm","dark","red",""][ev.id % 4]}">${ICONS.image}</div>
        <span class="event-status ${cls}">${label}</span>
        <span class="event-date"><span class="d">${tgl}</span><span class="m">${bln}</span></span>
      </div>
      <div class="event-body">
        <h3><span>${ev.judul}</span></h3>
        <p>${ev.desc}</p>
        <div class="event-foot">
          <span class="event-meta">${ICONS.pin} ${ev.lokasi}</span>
          <span class="go">Detail ${ICONS.arrow}</span>
        </div>
      </div>
    </article>`;
}

function kemCard(k) {
  return `
    <a href="kementerian.html?id=${k.id}" class="kem-card reveal">
      <div class="kem-head">
        <div class="kem-icon">${k.singkat}</div>
        <div>
          <h3>${k.nama}</h3>
          <div class="mentri">Menteri: ${k.menteri}</div>
        </div>
      </div>
      <p>${k.desc}</p>
      <span class="more">Lihat profil kementerian ${ICONS.arrow}</span>
    </a>`;
}

function miniKem(k) {
  return `
    <a href="kementerian.html?id=${k.id}" class="mini-kem">
      <span class="ic">${k.singkat}</span>
      <span class="t">${k.nama}</span>
      <span class="k">Menteri: ${k.menteri}</span>
    </a>`;
}

function duoChip(role, nama) {
  return `
    <div class="duo-chip">
      <span class="ava">${initials(nama)}</span>
      <span><span class="r">${role}</span><br><span class="n">${nama}</span></span>
    </div>`;
}

function kemenkoPanel(km, i) {
  const kems = KEMENTERIAN.filter(k => k.kemenko === km.id);
  return `
    <div class="kemenko-panel reveal" data-num="0${i + 1}">
      <div class="kemenko-info">
        <span class="tag">Kemenko 0${i + 1}</span>
        <h3>${km.nama}</h3>
        <p>${km.desc}</p>
        <div class="duo">
          ${duoChip("Menko", km.menko)}
          ${duoChip("Wakil Menko", km.wamenko)}
        </div>
      </div>
      <div class="kemenko-kems">
        ${kems.map(miniKem).join("")}
      </div>
    </div>`;
}

function personCard(nama, role) {
  return `
    <div class="person-card reveal">
      <div class="media"><div class="img-ph">${ICONS.image}</div></div>
      <div class="body">
        <div class="name">${nama}</div>
        <div class="role">${role}</div>
      </div>
    </div>`;
}

/* ---------- Beranda ---------- */
function initHome() {
  const wrap = document.getElementById("home-kegiatan");
  if (!wrap) return;

  const render = kat => {
    const list = KEGIATAN
      .filter(e => e.status !== "done")
      .filter(e => kat === "semua" || e.kategori === kat)
      .slice(0, 3);
    wrap.innerHTML = list.length
      ? list.map(eventCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1">Belum ada kegiatan pada kategori ini. Coba kategori lain.</div>`;
    initReveal(); initTilt();
  };
  initChipSlider("home-filter", render);
  render("semua");

  /* preview kemenko di beranda */
  const kmWrap = document.getElementById("home-kemenko");
  if (kmWrap) {
    kmWrap.innerHTML = KEMENKO.map(kemenkoPanel).join("");
  }
}

/* ---------- Halaman Kegiatan ---------- */
function initKegiatan() {
  const wrap = document.getElementById("kegiatan-grid");
  if (!wrap) return;
  const searchInput = document.getElementById("kegiatan-search");
  const resultInfo = document.getElementById("kegiatan-result");
  let kategori = "semua";

  /* jumlah per kategori pada chip */
  document.querySelectorAll("#kegiatan-filter .chip").forEach(chip => {
    const kat = chip.dataset.kategori;
    const n = kat === "semua" ? KEGIATAN.length : KEGIATAN.filter(e => e.kategori === kat).length;
    chip.insertAdjacentHTML("beforeend", `<span class="count">${n}</span>`);
  });

  const render = () => {
    const q = (searchInput.value || "").toLowerCase();
    const list = KEGIATAN.filter(e =>
      (kategori === "semua" || e.kategori === kategori) &&
      (e.judul.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q))
    );
    if (resultInfo) resultInfo.textContent = `Menampilkan ${list.length} kegiatan`;
    wrap.innerHTML = list.length
      ? list.map(eventCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1">Tidak ada kegiatan yang cocok dengan pencarianmu. Coba kata kunci atau kategori lain.</div>`;
    initReveal(); initTilt();
  };

  initChipSlider("kegiatan-filter", kat => { kategori = kat; render(); });
  searchInput.addEventListener("input", render);
  render();
}

/* ---------- Galeri ---------- */
const KATEGORI_LABEL = {
  "rapat-kerja": "Rapat Kerja", "seminar": "Seminar",
  "aksi-sosial": "Aksi Sosial", "penristek": "Penristek"
};

function initGaleri() {
  const wrap = document.getElementById("galeri-grid");
  if (!wrap) return;
  let kategori = "semua";

  const render = () => {
    const list = GALERI.filter(g => kategori === "semua" || g.kategori === kategori);
    wrap.innerHTML = list.length
      ? list.map(g => `
        <div class="g-item ${g.size} reveal" data-caption="${g.caption}" data-tone="${g.tone}"
             role="button" tabindex="0" aria-label="Perbesar: ${g.caption}">
          <div class="img-ph ${g.tone}">${ICONS.image}</div>
          <span class="tag">${KATEGORI_LABEL[g.kategori] || g.kategori}</span>
          <div class="cap">${g.caption}</div>
        </div>`).join("")
      : `<div class="empty-state" style="grid-column:1/-1">Belum ada dokumentasi pada kategori ini.</div>`;
    initReveal();
    wrap.querySelectorAll(".g-item").forEach(item => {
      const open = () => openLightbox(item.dataset.caption, item.dataset.tone);
      item.addEventListener("click", open);
      item.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
    });
  };

  initChipSlider("galeri-filter", kat => { kategori = kat; render(); });
  render();
}

function openLightbox(caption, tone) {
  let lb = document.getElementById("lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lightbox-close" aria-label="Tutup">&times;</button>
      <div class="lightbox-inner">
        <div class="img-ph" id="lb-img">${ICONS.image}</div>
        <div class="lightbox-cap" id="lb-cap"></div>
      </div>`;
    document.body.appendChild(lb);
    lb.addEventListener("click", e => {
      if (e.target === lb || e.target.closest(".lightbox-close")) lb.classList.remove("show");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") lb.classList.remove("show");
    });
  }
  lb.querySelector("#lb-img").className = `img-ph ${tone}`;
  lb.querySelector("#lb-cap").textContent = caption;
  lb.classList.add("show");
}

/* ---------- Daftar & Detail Kementerian ---------- */
function initKementerian() {
  const listWrap = document.getElementById("kementerian-list");
  const detailWrap = document.getElementById("kementerian-detail");
  if (!listWrap && !detailWrap) return;

  const params = new URLSearchParams(location.search);
  const kem = KEMENTERIAN.find(k => k.id === params.get("id"));

  /* Mode daftar: dikelompokkan per kemenko */
  if (!kem) {
    if (detailWrap) detailWrap.style.display = "none";
    if (listWrap) {
      listWrap.innerHTML = KEMENKO.map((km, i) => {
        const kems = KEMENTERIAN.filter(k => k.kemenko === km.id);
        return `
          <div class="kem-group">
            <div class="kem-group-head reveal">
              <h3><span class="idx">0${i + 1}</span> Kemenko ${km.nama}</h3>
              <div class="duo">
                ${duoChip("Menko", km.menko)}
                ${duoChip("Wakil Menko", km.wamenko)}
              </div>
            </div>
            <div class="kem-grid">${kems.map(kemCard).join("")}</div>
          </div>`;
      }).join("");
      initReveal();
    }
    return;
  }

  /* Mode detail */
  if (listWrap) listWrap.closest("section").style.display = "none";
  const introSection = document.getElementById("kementerian-intro");
  if (introSection) introSection.style.display = "none";

  const kemenko = KEMENKO.find(km => km.id === kem.kemenko);
  document.title = `${kem.nama} | ${ORG.nama}`;

  detailWrap.innerHTML = `
    <div class="page-hero">
      <div class="ghost" aria-hidden="true">${kem.singkat}</div>
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Beranda</a> / <a href="kementerian.html">Kementerian</a> / ${kem.nama}
        </div>
        <h1>Kementerian<br>${kem.nama}</h1>
        <p>${kem.desc} Berada di bawah koordinasi Kemenko ${kemenko ? kemenko.nama : "-"} (Menko ${kemenko ? kemenko.menko : "-"}).</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="detail-grid">
          <div class="reveal">
            <span class="eyebrow">Visi Kementerian</span>
            <h2 class="display" style="font-size:2rem;margin:.5rem 0 1.2rem">Arah Gerak Kami</h2>
            <div class="visi-card">${kem.visi}</div>
            <div style="margin-top:2.2rem">
              <span class="eyebrow">Misi Kementerian</span>
              <div style="margin-top:1.1rem">
                ${kem.misi.map((m, i) => `
                  <div class="misi-item">
                    <div class="misi-num">${String(i + 1).padStart(2, "0")}</div>
                    <p style="align-self:center">${m}</p>
                  </div>`).join("")}
              </div>
            </div>
          </div>
          <div class="reveal">
            <div class="hero-frame" style="transform:none">
              <div class="img-ph red hero-photo" style="aspect-ratio:4/3;box-shadow:var(--shadow)">${ICONS.image}</div>
            </div>
            <div class="stats-strip" style="grid-template-columns:repeat(3,1fr);margin-top:2rem;padding:1.8rem 1rem">
              <div><div class="value" data-count="${kem.staf}">0</div><div class="label">Staf Aktif</div></div>
              <div><div class="value" data-count="${kem.proker.length}">0</div><div class="label">Program Kerja</div></div>
              <div><div class="value" data-count="1">0</div><div class="label">Periode</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section white">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Struktur Kementerian</span>
          <h2>Pengurus ${kem.nama}</h2>
          <p>Susunan pengurus Kementerian ${kem.nama} periode Kabinet Aksarakestra. Ganti foto dan nama sesuai data asli.</p>
        </div>
        <div class="person-grid" style="max-width:920px;margin:0 auto">
          ${personCard(kem.menteri, "Menteri")}
          ${personCard(kem.wamenteri, "Wakil Menteri")}
          ${Array.from({ length: Math.min(kem.staf, 4) }, (_, i) => personCard("Nama Staf " + (i + 1), "Staf Ahli")).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Program Kerja</span>
          <h2>Program Unggulan</h2>
        </div>
        <div style="max-width:840px">
          ${kem.proker.map((p, i) => `
            <div class="proker-item reveal">
              <div class="idx">${String(i + 1).padStart(2, "0")}</div>
              <div>
                <h4>${p.nama}</h4>
                <p>${p.desc}</p>
              </div>
            </div>`).join("")}
        </div>
        <div style="margin-top:2.6rem;display:flex;gap:.9rem;flex-wrap:wrap">
          <a href="kementerian.html" class="btn btn-outline">Semua Kementerian</a>
          <a href="kontak.html" class="btn btn-red">Hubungi Kementerian Ini ${ICONS.arrow}</a>
        </div>
      </div>
    </section>`;
  initReveal(); initCounters();
}

/* ---------- Struktur ---------- */
function initStruktur() {
  const kemenkoWrap = document.getElementById("struktur-kemenko");
  if (!kemenkoWrap) return;

  kemenkoWrap.innerHTML = KEMENKO.map(kemenkoPanel).join("");

  const staffWrap = document.getElementById("struktur-staff");
  staffWrap.innerHTML =
    PIMPINAN.sekretaris.map((n, i) => `
      <div class="staff-chip reveal">
        <div class="role">Sekretaris ${i + 1}</div>
        <div class="name">${n}</div>
      </div>`).join("") +
    PIMPINAN.bendahara.map((n, i) => `
      <div class="staff-chip reveal">
        <div class="role gold">Bendahara ${i + 1}</div>
        <div class="name">${n}</div>
      </div>`).join("");

  initReveal(); initTilt();
}

/* ---------- Kontak ---------- */
function initKontak() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Pesan terkirim \u2713";
    btn.disabled = true;
    btn.style.background = "#1E7A46";
    setTimeout(() => {
      btn.textContent = "Kirim Pesan";
      btn.disabled = false;
      btn.style.background = "";
      form.reset();
    }, 2600);
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initHome();
  initKegiatan();
  initGaleri();
  initKementerian();
  initStruktur();
  initKontak();
  initReveal();
  initCounters();
  initTilt();
});
