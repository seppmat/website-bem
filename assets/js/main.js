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
            <span>&copy; 2026 ${ORG.namaPanjang}. Kabinet Aksarakestra.</span>
            <span>Dikembangkan oleh Kementerian Pendidikan, Riset, dan Teknologi</span>
          </div>
        </div>
      </footer>
      <button class="to-top" aria-label="Kembali ke atas">${ICONS.up}</button>

      <!-- Floating Action Button Lacak Aspirasi (Sudut Kanan Bawah) -->
      <button type="button" class="floating-track-btn" id="floatingTrackBtn" onclick="openTrackingModal()" aria-label="Lacak Status Aspirasi">
        <span class="ftb-pulse"></span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
        <span class="ftb-text">Lacak Aspirasi</span>
      </button>

      <!-- Modal Pop-Up Lacak Aspirasi Terpadu -->
      <div class="tracking-modal-overlay" id="trackingModalOverlay" onclick="closeTrackingModalOnOverlay(event)">
        <div class="tracking-modal-card">
          <button type="button" class="tracking-modal-close" onclick="closeTrackingModal()" aria-label="Tutup Popup">&times;</button>
          
          <div class="tsh-badge" style="margin-bottom:.6rem">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
            Sistem Pelacakan Tiket
          </div>
          <h3 style="font-size:1.45rem;margin-bottom:.35rem">Lacak Status Aspirasi</h3>
          <p style="font-size:.85rem;color:var(--muted);margin-bottom:1.4rem">Masukkan kode tiket aspirasimu untuk memeriksa status tindak lanjut secara real-time.</p>

          <form class="tracking-search-bar" id="tracking-form-modal" onsubmit="trackAspirasiModal(event)">
            <div class="tsb-input-wrapper">
              <svg class="tsb-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="track-id-modal-input" placeholder="Contoh: ASP-2026-001" autocomplete="off" required>
            </div>
            <button type="submit" class="btn btn-red tsb-btn" style="padding:.75rem 1.4rem;font-size:.88rem">
              <span>Lacak</span>
            </button>
          </form>

          <div class="tracking-demo-pills" style="margin-top:1rem;justify-content:flex-start">
            <span class="tdp-label">Demo:</span>
            <button type="button" class="tdp-pill" onclick="fillTrackingInputModal('ASP-2026-001')">
              <span class="tdp-dot dot-selesai"></span> Selesai
            </button>
            <button type="button" class="tdp-pill" onclick="fillTrackingInputModal('ASP-2026-002')">
              <span class="tdp-dot dot-proses"></span> Diproses
            </button>
            <button type="button" class="tdp-pill" onclick="fillTrackingInputModal('ASP-2026-003')">
              <span class="tdp-dot dot-terima"></span> Diterima
            </button>
          </div>

          <!-- Wadah Hasil Tracking Modal -->
          <div id="tracking-modal-result" class="tracking-result-box" style="display:none;margin-top:1.4rem"></div>

          <div style="margin-top:1.4rem;padding-top:.85rem;border-top:1px dashed var(--line);display:flex;justify-content:space-between;align-items:center;font-size:.78rem">
            <span style="color:var(--muted)">Belum mengirim aspirasi?</span>
            <a href="kontak.html" style="color:var(--red);font-weight:800" onclick="closeTrackingModal()">Kirim Aspirasi &rarr;</a>
          </div>
        </div>
      </div>`;

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

  row.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      row.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
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

/* ---------- Custom Styled Dropdown (Universal) ---------- */
function initCustomSelect(wrapperId, onSelectChange, customItems) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) return;
  const trigger = wrapper.querySelector(".custom-select-btn");
  const textLabel = wrapper.querySelector(".cs-text");
  const menu = wrapper.querySelector(".custom-select-menu");
  if (!trigger || !menu) return;

  // Build items: gunakan customItems jika ada, atau default ke list kementerian
  const items = customItems || [
    { id: "semua", nama: "Semua Kementerian", desc: "Tampilkan seluruh agenda" },
    { id: "umum", nama: "Umum / Presidium", desc: "Agenda bersama atau pimpinan" }
  ].concat(KEMENTERIAN.map(k => ({
    id: k.id,
    nama: k.nama,
    desc: `Kementerian ${k.nama}`
  })));

  menu.innerHTML = items.map(item => `
    <div class="custom-select-opt ${item.id === (items[0]?.id) ? 'selected' : ''}" data-val="${item.id}" role="option">
      <div class="opt-left">
        <span class="opt-name">${item.nama}</span>
        ${item.desc ? `<span class="opt-desc">${item.desc}</span>` : ''}
      </div>
      <svg class="opt-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
  `).join("");

  const toggle = (force) => {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    const nextState = typeof force === "boolean" ? force : !isExpanded;
    trigger.setAttribute("aria-expanded", nextState);
    menu.classList.toggle("open", nextState);
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    // Tutup dropdown lain jika ada
    document.querySelectorAll(".custom-select-menu.open").forEach(m => {
      if (m !== menu) {
        m.classList.remove("open");
        const t = m.previousElementSibling;
        if (t) t.setAttribute("aria-expanded", "false");
      }
    });
    toggle();
  });

  menu.querySelectorAll(".custom-select-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      menu.querySelectorAll(".custom-select-opt").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      const val = opt.dataset.val;
      const found = items.find(it => it.id === val);
      if (textLabel && found) textLabel.textContent = found.nama;
      toggle(false);
      if (typeof onSelectChange === "function") onSelectChange(val, found);
    });
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      toggle(false);
    }
  });
}

/* ---------- Beranda (Calendar of Events Widget) ---------- */
let currentCalYear = 2026;
let currentCalMonth = 9; // 0-based: 9 = Oktober (karena event banyak di Okt 2026)
let selectedCalDate = "2026-10-24"; // default event Leadership Summit

const NAMA_BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

function initHome() {
  const wrap = document.getElementById("home-calendar-widget");
  if (!wrap) return;

  const renderCalendar = () => {
    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay(); // 0: Minggu
    const totalDays = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();

    // Map events in this month (baik single date maupun rentang periode)
    const monthKey = `${currentCalYear}-${String(currentCalMonth + 1).padStart(2, "0")}`;
    const startOfMonth = `${monthKey}-01`;
    const endOfMonth = `${monthKey}-${String(totalDays).padStart(2, "0")}`;

    const eventsThisMonth = KEGIATAN.filter(k => {
      if (k.endDateStr) {
        return (k.dateStr <= endOfMonth && k.endDateStr >= startOfMonth);
      }
      return k.dateStr && k.dateStr.startsWith(monthKey);
    });

    let daysHtml = "";
    // Offset hari kosong sebelum tanggal 1
    for (let i = 0; i < firstDay; i++) {
      daysHtml += `<div class="cal-day empty"></div>`;
    }

    // Hari 1 s.d. totalDays
    for (let d = 1; d <= totalDays; d++) {
      const fullDateStr = `${monthKey}-${String(d).padStart(2, "0")}`;
      
      // Cek apakah tanggal d masuk dalam agenda (single date atau dalam rentang periode)
      const dayEvents = KEGIATAN.filter(k => {
        if (k.endDateStr) {
          return fullDateStr >= k.dateStr && fullDateStr <= k.endDateStr;
        }
        return k.dateStr === fullDateStr;
      });

      const hasEvent = dayEvents.length > 0;
      const isSelected = selectedCalDate === fullDateStr;
      const hasPeriodEvent = dayEvents.some(k => k.endDateStr);
      const isPeriodStart = dayEvents.some(k => k.dateStr === fullDateStr);
      const isPeriodEnd = dayEvents.some(k => k.endDateStr === fullDateStr);

      // Status indicator classes
      let statusDot = "";
      if (hasEvent) {
        const topEv = dayEvents.find(k => !k.endDateStr) || dayEvents[0];
        statusDot = `<span class="cal-dot ${topEv.status || 'upcoming'}"></span>`;
      }

      let rangeCls = "";
      if (hasPeriodEvent) {
        rangeCls = "in-range";
        if (isPeriodStart) rangeCls += " range-start";
        if (isPeriodEnd) rangeCls += " range-end";
      }

      daysHtml += `
        <button type="button" class="cal-day ${hasEvent ? 'has-event' : ''} ${rangeCls} ${isSelected ? 'selected' : ''}" 
                data-date="${fullDateStr}">
          <span class="day-num">${d}</span>
          ${statusDot}
        </button>
      `;
    }

    // Filter event terpilih pada tanggal yang diklik
    const selectedEvents = KEGIATAN.filter(k => {
      if (k.endDateStr) {
        return selectedCalDate >= k.dateStr && selectedCalDate <= k.endDateStr;
      }
      return k.dateStr === selectedCalDate;
    });
    let detailPaneHtml = "";

    if (selectedEvents.length > 0) {
      detailPaneHtml = selectedEvents.map(ev => {
        const [label, cls] = STATUS_LABEL[ev.status] || ["Info", ""];
        const kemObj = KEMENTERIAN.find(k => k.id === ev.kementerian);
        return `
          <div class="cal-event-card">
            <div class="cal-event-top">
              <span class="event-status ${cls}">${label}</span>
              <span class="cal-event-tag">${kemObj ? kemObj.nama : 'BEM KEMA'}</span>
            </div>
            <h3 class="cal-event-title">${ev.judul}</h3>
            <p class="cal-event-desc">${ev.desc}</p>
            <div class="cal-event-meta-grid">
              <div>${ICONS.calendar} <span>${ev.tanggal}</span></div>
              <div><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> <span>${ev.waktu || 'Konfirmasi'}</span></div>
              <div>${ICONS.pin} <span>${ev.lokasi}</span></div>
            </div>
            <div class="cal-event-foot">
              <a href="kegiatan.html" class="btn btn-red" style="padding:.55rem 1.1rem;font-size:.82rem">
                Lihat di Agenda ${ICONS.arrow}
              </a>
            </div>
          </div>
        `;
      }).join("");
    } else {
      // Tampilkan agenda mendatang lainnya di bulan ini atau umum
      detailPaneHtml = `
        <div class="cal-empty-pane">
          <div class="cal-empty-icon">${ICONS.calendar}</div>
          <h4>Tidak ada agenda di tanggal ini</h4>
          <p>Silakan pilih tanggal yang memiliki titik penanda (agenda terjadwal), atau jelajahi kegiatan di bulan lainnya.</p>
          <div style="margin-top:1.4rem">
            <span class="eyebrow" style="font-size:.65rem">Agenda Bulan ${NAMA_BULAN[currentCalMonth]}</span>
            <div class="cal-upcoming-list">
              ${eventsThisMonth.length > 0 ? eventsThisMonth.map(e => `
                <div class="cal-mini-item" onclick="selectCalendarDate('${e.dateStr}')">
                  <div class="cmi-date">${e.tanggal.split(" ")[0]}</div>
                  <div class="cmi-body">
                    <span class="cmi-title">${e.judul}</span>
                    <span class="cmi-sub">${e.lokasi}</span>
                  </div>
                </div>
              `).join("") : '<p style="font-size:.82rem;color:var(--muted)">Belum ada agenda terdaftar di bulan ini.</p>'}
            </div>
          </div>
        </div>
      `;
    }

    let periodBannerHtml = "";
    const activePeriodEvents = eventsThisMonth.filter(k => k.endDateStr);
    if (activePeriodEvents.length > 0) {
      periodBannerHtml = `
        <div class="cal-period-banner">
          <div class="cpb-badge"><span class="pulse-dot"></span> Proker Sepanjang Bulan</div>
          ${activePeriodEvents.map(pe => `
            <div class="cpb-item" onclick="selectCalendarDate('${pe.dateStr}')">
              <span class="cpb-title">${pe.judul}</span>
              <span class="cpb-range">${pe.tanggal}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    wrap.innerHTML = `
      <div class="calendar-layout">
        <!-- Panel Kiri: Grid Kalender Interaktif -->
        <div class="cal-grid-panel">
          <div class="cal-header">
            <div class="cal-month-title">
              <h3>${NAMA_BULAN[currentCalMonth]} <span class="year">${currentCalYear}</span></h3>
              <span class="cal-badge-count">${eventsThisMonth.length} Agenda</span>
            </div>
            <div class="cal-nav-btns">
              <button type="button" class="cal-btn-prev" aria-label="Bulan sebelumnya">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button type="button" class="cal-btn-next" aria-label="Bulan berikutnya">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          ${periodBannerHtml}

          <div class="cal-weekdays">
            <span>Min</span><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span>
          </div>

          <div class="cal-days-grid" id="cal-days-container">
            ${daysHtml}
          </div>

          <div class="cal-legend">
            <div><span class="cal-range-sample"></span> Periode Berjalan</div>
            <div><span class="cal-dot open"></span> Agenda Spesifik</div>
            <div><span class="cal-dot done"></span> Selesai</div>
          </div>
        </div>

        <!-- Panel Kanan: Detail Agenda Tanggal Terpilih -->
        <div class="cal-detail-panel">
          <div class="cal-detail-header">
            <span class="eyebrow">Agenda Terpilih</span>
            <div class="selected-date-label">
              ${selectedCalDate}
            </div>
          </div>
          <div class="cal-detail-body">
            ${detailPaneHtml}
          </div>
        </div>
      </div>
    `;

    // Event listener navigasi bulan
    wrap.querySelector(".cal-btn-prev").addEventListener("click", () => {
      currentCalMonth--;
      if (currentCalMonth < 0) {
        currentCalMonth = 11;
        currentCalYear--;
      }
      renderCalendar();
    });

    wrap.querySelector(".cal-btn-next").addEventListener("click", () => {
      currentCalMonth++;
      if (currentCalMonth > 11) {
        currentCalMonth = 0;
        currentCalYear++;
      }
      renderCalendar();
    });

    // Event listener klik tanggal
    wrap.querySelectorAll(".cal-day:not(.empty)").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedCalDate = btn.dataset.date;
        renderCalendar();
      });
    });
  };

  window.selectCalendarDate = (dateStr) => {
    selectedCalDate = dateStr;
    const parts = dateStr.split("-");
    currentCalYear = parseInt(parts[0], 10);
    currentCalMonth = parseInt(parts[1], 10) - 1;
    renderCalendar();
  };

  renderCalendar();

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
  let kemFilter = "semua";

  initCustomSelect("kegiatan-select-wrapper", (val) => {
    kemFilter = val;
    render();
  });

  /* jumlah per kategori pada chip */
  document.querySelectorAll("#kegiatan-filter .chip").forEach(chip => {
    const kat = chip.dataset.kategori;
    const n = kat === "semua" ? KEGIATAN.length : KEGIATAN.filter(e => e.kategori === kat).length;
    chip.insertAdjacentHTML("beforeend", `<span class="count">${n}</span>`);
  });

  const render = () => {
    const q = (searchInput ? searchInput.value || "" : "").toLowerCase();
    const list = KEGIATAN.filter(e => {
      const matchKategori = (kategori === "semua" || e.kategori === kategori);
      const matchKem = (kemFilter === "semua" || e.kementerian === kemFilter);
      const matchQuery = (e.judul.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q));
      return matchKategori && matchKem && matchQuery;
    });

    if (resultInfo) resultInfo.textContent = `Menampilkan ${list.length} kegiatan`;
    wrap.innerHTML = list.length
      ? list.map(eventCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1">Tidak ada kegiatan yang cocok dengan kriteria filter atau pencarianmu. Coba pilih kementerian lain.</div>`;
    initReveal(); initTilt();
  };

  initChipSlider("kegiatan-filter", kat => { kategori = kat; render(); });
  if (searchInput) searchInput.addEventListener("input", render);
  render();
}

/* ---------- Galeri ---------- */
function initGaleri() {
  const wrap = document.getElementById("galeri-grid");
  if (!wrap) return;
  let kategori = "semua";
  let kemFilter = "semua";

  initCustomSelect("galeri-select-wrapper", (val) => {
    kemFilter = val;
    render();
  });

  const render = () => {
    const list = GALERI.filter(g =>
      (kategori === "semua" || g.kategori === kategori) &&
      (kemFilter === "semua" || g.kementerian === kemFilter)
    );
    wrap.innerHTML = list.length
      ? list.map(g => `
        <div class="g-item ${g.size} reveal" data-caption="${g.caption}" data-tone="${g.tone}"
             role="button" tabindex="0" aria-label="Perbesar: ${g.caption}">
          <div class="img-ph ${g.tone}">${ICONS.image}</div>
          <span class="tag">${g.kementerian === 'umum' ? 'Kabinet' : (KEMENTERIAN.find(k=>k.id===g.kementerian)?.nama || g.kementerian)}</span>
          <div class="cap">${g.caption}</div>
        </div>`).join("")
      : `<div class="empty-state" style="grid-column:1/-1">Belum ada dokumentasi pada kategori/kementerian ini. Silakan pilih kementerian lain.</div>`;
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
            <div class="proker-item reveal" id="proker-${i}">
              <div class="idx">${String(i + 1).padStart(2, "0")}</div>
              <div class="proker-content">
                <div class="proker-header" onclick="toggleProker(${i})">
                  <div>
                    <h4>${p.nama}</h4>
                    <p>${p.desc}</p>
                  </div>
                  <button class="proker-toggle-btn" aria-label="Lihat detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                </div>
                <div class="proker-detail" id="proker-detail-${i}" style="display:none">
                  <div class="proker-meta-grid">
                    <div class="proker-meta-item">
                      <span class="proker-meta-label">Tujuan Kegiatan</span>
                      <span class="proker-meta-value">${p.tujuan || '-'}</span>
                    </div>
                    <div class="proker-meta-item">
                      <span class="proker-meta-label">Sasaran Peserta</span>
                      <span class="proker-meta-value">${p.sasaran || '-'}</span>
                    </div>
                    <div class="proker-meta-item">
                      <span class="proker-meta-label">Jumlah Peserta</span>
                      <span class="proker-meta-value">${p.jumlahPeserta || '-'}</span>
                    </div>
                    <div class="proker-meta-item">
                      <span class="proker-meta-label">Hasil / Capaian</span>
                      <span class="proker-meta-value">${p.hasil || '-'}</span>
                    </div>
                    <div class="proker-meta-item proker-meta-full">
                      <span class="proker-meta-label">Dampak Kegiatan</span>
                      <span class="proker-meta-value">${p.dampak || '-'}</span>
                    </div>
                  </div>
                  ${p.dokumentasi && p.dokumentasi.length ? `
                    <div style="margin-top:1.2rem">
                      <span class="proker-meta-label" style="display:block;margin-bottom:.7rem">Dokumentasi</span>
                      <div class="proker-docs-grid">
                        ${p.dokumentasi.map(doc => `
                          <div class="proker-doc-item">
                            <div class="img-ph dark">${ICONS.image}</div>
                            <span>${doc}</span>
                          </div>`).join('')}
                      </div>
                    </div>` : ''}
                </div>
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

  // Inisialisasi Custom Dropdown Kategori di Form Kontak
  const kategoriList = [
    { id: "advokasi-ukt", nama: "Advokasi UKT & Keringanan Biaya Kuliah", desc: "Keringanan cicilan, penundaan, & beasiswa" },
    { id: "fasilitas", nama: "Fasilitas, Sarana, & Prasarana Kampus", desc: "Lab, ruang kelas, WiFi, & fasilitas fisik" },
    { id: "akademik", nama: "Kebijakan Akademik & Perkuliahan", desc: "Kurikulum, dosen, KRS, & jadwal kuliah" },
    { id: "ormawa", nama: "Kemahasiswaan, Komunitas, & Ormawa", desc: "Kegiatan ormawa, UKM, & himpunan" },
    { id: "ide-proker", nama: "Gagasan & Inovasi Program Kerja BEM", desc: "Saran acara, kolaborasi, & ide terobosan" },
    { id: "keamanan-lingkungan", nama: "Lingkungan, Kebersihan, & Keamanan", desc: "Parkir, keselamatan kampus, & sanitasi" },
    { id: "lainnya", nama: "Lainnya / Pertanyaan Umum", desc: "Pertanyaan atau aduan di luar kategori" }
  ];

  const hiddenKat = document.getElementById("cf-kategori");
  initCustomSelect("contact-kategori-wrapper", (val, item) => {
    if (hiddenKat) hiddenKat.value = val;
  }, kategoriList);

  // Inisialisasi Custom Dropdown Kementerian di Form Kontak
  const kementerianList = [
    { id: "semua", nama: "BEM KEMA Terpadu", desc: "Presidium & Koordinasi Kemenko" }
  ].concat(KEMENTERIAN.map(k => ({
    id: k.id,
    nama: `Kementerian ${k.nama}`,
    desc: k.desc
  })));

  const hiddenKem = document.getElementById("cf-kementerian");
  initCustomSelect("contact-kementerian-wrapper", (val, item) => {
    if (hiddenKem) hiddenKem.value = val;
  }, kementerianList);

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (hiddenKat && !hiddenKat.value) {
      alert("Silakan pilih Kategori Aspirasi terlebih dahulu.");
      return;
    }

    const btn = form.querySelector("button[type=submit]");
    const randomNum = Math.floor(100 + Math.random() * 900);
    const newTicketId = `ASP-2026-${randomNum}`;
    
    btn.innerHTML = `<span>Aspirasi Terkirim! Tiket: ${newTicketId}</span>`;
    btn.disabled = true;
    btn.style.background = "#1E7A46";

    // Simpan ke dummy data lokal
    const cfJudul = document.getElementById("cf-judul");
    const cfNama = document.getElementById("cf-nama");
    const senderName = cfNama && cfNama.value.trim() ? cfNama.value.trim() : "Anonim";
    
    const katObj = kategoriList.find(k => k.id === (hiddenKat ? hiddenKat.value : ""));
    const kemObj = kementerianList.find(k => k.id === (hiddenKem ? hiddenKem.value : "semua"));

    DUMMY_ASPIRASI[newTicketId] = {
      judul: cfJudul && cfJudul.value ? cfJudul.value : "Aspirasi Mahasiswa",
      kategori: katObj ? katObj.nama : "Aspirasi Mahasiswa",
      kementerian: kemObj ? kemObj.nama : "BEM KEMA Terpadu",
      tanggal: "Hari ini",
      status: "diterima",
      statusText: "Aspirasi Diterima",
      statusStep: 1,
      catatan: `Aspirasi telah berhasil masuk dari ${senderName} dan sedang dalam antrean telaah advokasi BEM KEMA TUS.`
    };

    // Tampilkan notifikasi popup / banner konfirmasi dengan tautan ke halaman lacak
    setTimeout(() => {
      btn.innerHTML = `<span>Kirimkan Aspirasi Sekarang</span><svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
      btn.disabled = false;
      btn.style.background = "";
      form.reset();

      // Reset text label dropdown
      const katText = document.getElementById("contact-kategori-text");
      if (katText) katText.textContent = "Pilih Kategori Aspirasi...";
      if (hiddenKat) hiddenKat.value = "";

      // Buka modal pop-up lacak langsung dengan tiket yang baru dibuat
      openTrackingModal(newTicketId);
    }, 1500);
  });
}

/* ---------- Mode Aspirasi Terbuka vs Anonim ---------- */
const DUMMY_ASPIRASI = {
  "ASP-2026-001": {
    judul: "Pengajuan Keringanan UKT Semester Genap",
    kategori: "Advokasi UKT & Keringanan Biaya",
    kementerian: "Kementerian Adkesma",
    tanggal: "14 Okt 2026",
    status: "selesai",
    statusText: "Selesai Ditindaklanjuti",
    statusStep: 3, // 1: Diterima, 2: Diproses, 3: Selesai
    catatan: "Audiensi dengan bagian Keuangan Kampus telah selesai. Daftar penerima potongan telah dikirimkan ke email terdaftar."
  },
  "ASP-2026-002": {
    judul: "Keluhan Ketersediaan Stopkontak di Student Center",
    kategori: "Fasilitas & Sarana Kampus",
    kementerian: "Kementerian Dalam Negeri",
    tanggal: "28 Okt 2026",
    status: "proses",
    statusText: "Sedang Diproses",
    statusStep: 2,
    catatan: "Surat permohonan penambahan stopkontak telah diserahkan ke bagian Sarpras dan sedang dalam proses pengadaan."
  },
  "ASP-2026-003": {
    judul: "Usulan Pengadaan Kompetisi E-Sport Antar Fakultas",
    kategori: "Kemahasiswaan & Ormawa",
    kementerian: "Kementerian PORA",
    tanggal: "02 Nov 2026",
    status: "diterima",
    statusText: "Aspirasi Diterima",
    statusStep: 1,
    catatan: "Aspirasi telah masuk ke database Kementerian PORA dan akan dibahas pada rapat kerja bulanan berikutnya."
  }
};

function openTrackingModal(presetId) {
  const modal = document.getElementById("trackingModalOverlay");
  if (!modal) return;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  if (presetId) {
    fillTrackingInputModal(presetId);
  } else {
    const input = document.getElementById("track-id-modal-input");
    if (input) input.focus();
  }
}

function closeTrackingModal() {
  const modal = document.getElementById("trackingModalOverlay");
  if (!modal) return;
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function closeTrackingModalOnOverlay(e) {
  if (e.target.id === "trackingModalOverlay") {
    closeTrackingModal();
  }
}

function fillTrackingInputModal(id) {
  const input = document.getElementById("track-id-modal-input");
  if (input) {
    input.value = id;
    const form = document.getElementById("tracking-form-modal");
    if (form) trackAspirasiModal(new Event("submit"));
  }
}

function trackAspirasiModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("track-id-modal-input");
  const resultBox = document.getElementById("tracking-modal-result");
  if (!input || !resultBox) return;

  const code = input.value.trim().toUpperCase();
  const data = DUMMY_ASPIRASI[code];

  if (!data) {
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div class="tracking-not-found">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>
          <strong>Tiket ${code} Tidak Ditemukan</strong>
          <p>Mohon periksa kembali kode tiket aspirasimu atau gunakan contoh tiket demo di atas.</p>
        </div>
      </div>
    `;
    return;
  }

  const step1Cls = data.statusStep >= 1 ? "active" : "";
  const step2Cls = data.statusStep >= 2 ? "active" : "";
  const step3Cls = data.statusStep >= 3 ? "active" : "";

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div class="tracking-found-card">
      <div class="tfc-head">
        <div>
          <span class="tfc-id">${code}</span>
          <h4 class="tfc-title">${data.judul}</h4>
          <span class="tfc-meta">${data.kategori} &bull; ${data.kementerian}</span>
        </div>
        <span class="tfc-status-badge ${data.status}">${data.statusText}</span>
      </div>

      <!-- Stepper Progress 3 Tahap -->
      <div class="tracking-stepper">
        <div class="t-step ${step1Cls}">
          <div class="t-dot"><span class="t-num">1</span></div>
          <span class="t-label">Diterima</span>
        </div>
        <div class="t-line ${data.statusStep >= 2 ? 'active' : ''}"></div>
        <div class="t-step ${step2Cls}">
          <div class="t-dot"><span class="t-num">2</span></div>
          <span class="t-label">Diproses</span>
        </div>
        <div class="t-line ${data.statusStep >= 3 ? 'active' : ''}"></div>
        <div class="t-step ${step3Cls}">
          <div class="t-dot"><span class="t-num">3</span></div>
          <span class="t-label">Selesai</span>
        </div>
      </div>

      <div class="tfc-notes">
        <span class="tfc-notes-label">Progres &amp; Catatan:</span>
        <p>${data.catatan}</p>
      </div>
    </div>
  `;
}

function fillTrackingInput(id) {
  const input = document.getElementById("track-id-input");
  if (input) {
    input.value = id;
    const form = document.getElementById("tracking-form");
    if (form) trackAspirasi(new Event("submit"));
  }
}

function trackAspirasi(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("track-id-input");
  const resultBox = document.getElementById("tracking-result-box");
  if (!input || !resultBox) return;

  const code = input.value.trim().toUpperCase();
  const data = DUMMY_ASPIRASI[code];

  if (!data) {
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div class="tracking-not-found">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>
          <strong>Tiket ${code} Tidak Ditemukan</strong>
          <p>Mohon periksa kembali kode tiket aspirasimu atau gunakan contoh tiket demo di atas.</p>
        </div>
      </div>
    `;
    return;
  }

  const step1Cls = data.statusStep >= 1 ? "active" : "";
  const step2Cls = data.statusStep >= 2 ? "active" : "";
  const step3Cls = data.statusStep >= 3 ? "active" : "";

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div class="tracking-found-card">
      <div class="tfc-head">
        <div>
          <span class="tfc-id">${code}</span>
          <h4 class="tfc-title">${data.judul}</h4>
          <span class="tfc-meta">${data.kategori} &bull; ${data.kementerian} &bull; ${data.tanggal}</span>
        </div>
        <span class="tfc-status-badge ${data.status}">${data.statusText}</span>
      </div>

      <!-- Stepper Progress 3 Tahap -->
      <div class="tracking-stepper">
        <div class="t-step ${step1Cls}">
          <div class="t-dot"><span class="t-num">1</span></div>
          <span class="t-label">Diterima</span>
        </div>
        <div class="t-line ${data.statusStep >= 2 ? 'active' : ''}"></div>
        <div class="t-step ${step2Cls}">
          <div class="t-dot"><span class="t-num">2</span></div>
          <span class="t-label">Diproses</span>
        </div>
        <div class="t-line ${data.statusStep >= 3 ? 'active' : ''}"></div>
        <div class="t-step ${step3Cls}">
          <div class="t-dot"><span class="t-num">3</span></div>
          <span class="t-label">Selesai</span>
        </div>
      </div>

      <div class="tfc-notes">
        <span class="tfc-notes-label">Progres &amp; Tindak Lanjut:</span>
        <p>${data.catatan}</p>
      </div>
    </div>
  `;
}

function setAspirasiMode(mode) {
  const btnTerbuka = document.getElementById("btn-mode-terbuka");
  const btnAnonim = document.getElementById("btn-mode-anonim");
  const identitasFields = document.getElementById("identitas-fields");
  const anonimNotice = document.getElementById("anonim-notice");
  const cfNama = document.getElementById("cf-nama");
  const cfEmail = document.getElementById("cf-email");

  if (!btnTerbuka || !btnAnonim || !identitasFields) return;

  if (mode === "anonim") {
    btnTerbuka.classList.remove("active");
    btnAnonim.classList.add("active");
    identitasFields.style.display = "none";
    if (anonimNotice) anonimNotice.style.display = "flex";
    if (cfNama) cfNama.removeAttribute("required");
    if (cfEmail) cfEmail.removeAttribute("required");
  } else {
    btnAnonim.classList.remove("active");
    btnTerbuka.classList.add("active");
    identitasFields.style.display = "block";
    if (anonimNotice) anonimNotice.style.display = "none";
    if (cfNama) cfNama.setAttribute("required", "required");
    if (cfEmail) cfEmail.setAttribute("required", "required");
  }
}

/* ---------- Boot ---------- */
function toggleProker(idx) {
  const detail = document.getElementById(`proker-detail-${idx}`);
  const item = document.getElementById(`proker-${idx}`);
  if (!detail) return;
  const isOpen = detail.style.display !== 'none';
  detail.style.display = isOpen ? 'none' : 'block';
  item.classList.toggle('proker-open', !isOpen);
}

function initLacakAspirasi() {
  const autoId = sessionStorage.getItem("last_track_id");
  if (autoId) {
    sessionStorage.removeItem("last_track_id");
    fillTrackingInput(autoId);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initHome();
  initKegiatan();
  initGaleri();
  initKementerian();
  initStruktur();
  initKontak();
  initLacakAspirasi();
  initReveal();
  initCounters();
  initTilt();
});
