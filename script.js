function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");

  // tampilkan nama di screen6
  if (screenId === "screen6") {
  const nama = localStorage.getItem("namaUser") || "";
  const skor = localStorage.getItem("skorGame") || 0;

  document.getElementById("tampilNama").innerText = "Nama: " + nama;
  document.getElementById("tampilNilai").innerText = "level 1: " + skor;
}
  
if (screenId === "screen4") {
    setTimeout(() => {
      document.getElementById("namaInput").focus();
    }, 300);
  }
}

function mulaiApp() {
  const nama = document.getElementById("namaInput").value;

  if (nama.trim() !== "") {
    localStorage.setItem("namaUser", nama);
    showScreen("screen2");
  } else {
    alert("Nama belum diisi!");
  }
}

/* 🔥 FIX DI SINI (pakai localStorage) */
function cekNamaSebelumMain() {
  const nama = localStorage.getItem("namaUser");

  if (nama && nama.trim() !== "") {
    showScreen("screen3");
  } else {
    alert("Isi nama dulu sebelum mulai!");
    showScreen("screen4");
  }
}

/* 🔥 FIX DI SINI */
function bukaData() {
  const nama = localStorage.getItem("namaUser") || "";
  const skor = localStorage.getItem("skorGame") || 0;

  if (nama.trim() !== "") {
    document.getElementById("tampilNama").innerText = "Nama: " + nama;
    document.getElementById("tampilNilai").innerText = "Skor: " + skor;

    showScreen("screen6");
  } else {
    alert("Isi nama dulu sebelum membuka data!");
    showScreen("screen4");
  }
}

/* 🔥 TAMBAHAN */
function kembaliKeHome() {
  showScreen("screen1");
}

/* 🔥 FIX AGAR DATA HILANG */
function keluarApp() {
  localStorage.removeItem("namaUser");
  alert("Terima kasih telah menggunakan aplikasi.");
}

// ============================
// 🔥 SISTEM NILAI (BARU)
// ============================
function updateNilai(sudahBenar) {
  const total = Object.keys(sudahBenar).length;
  const benar = Object.values(sudahBenar).filter(v => v === true).length;
  const skor = Math.round((benar / total) * 100);

  const el = document.getElementById("nilaiGame");
  if (el) el.innerText = skor;

  // 🔥 TAMBAHAN: simpan skor
  localStorage.setItem("skorGame", skor);
}

// ============================
// TOMBOL ULANG (TIDAK DIUBAH)
// ============================
function tampilkanTombolUlang() {
  const btn = document.getElementById("btnUlang");
  if (btn) btn.style.display = "block";
}

function mainUlang() {
  const semuaHewan = document.querySelectorAll(".hewan");
  const semuaKeranjang = document.querySelectorAll(".keranjang");

  // 🔥 BALIK KE POSISI CSS
  semuaHewan.forEach(h => {
    h.style.left = h.dataset.startLeft || "";
    h.style.top = h.dataset.startTop || "";
    h.style.transform = "";
    h.style.cursor = "grab";
  });

  // 🔥 RESET KERANJANG KE CSS
  semuaKeranjang.forEach(k => {
    k.style.left = "";
    k.style.top = "";
  });

  // 🔥 RESET STATUS
  if (window.sudahBenarGlobal) {
    Object.keys(window.sudahBenarGlobal).forEach(k => {
      window.sudahBenarGlobal[k] = false;
    });
  }

  // 🔥 RESET NILAI
  const el = document.getElementById("nilaiGame");
  if (el) el.innerText = "0";
}

// ============================
// DRAG & DROP
// ============================
document.addEventListener("DOMContentLoaded", () => {

  const pasangan = {
    singa: "ksinga",
    ular: "kular",
    ikan: "kikan",
    ayam: "kayam",
    kalajengking: "kkalajengking",
    capung: "kcapung",
    kuda: "kkuda",
    sapi: "ksapi"
  };

  const screen = document.getElementById("screen5");
  const semuaHewan = document.querySelectorAll(".hewan");

  let active = null;
  let offsetX = 0;
  let offsetY = 0;

  // GLOBAL STATE
  if (!window.sudahBenarGlobal) {
    window.sudahBenarGlobal = {};
  }
  const sudahBenar = window.sudahBenarGlobal;

  Object.keys(pasangan).forEach(k => {
    sudahBenar[k] = false;
  });

  // SIMPAN POSISI AWAL
  semuaHewan.forEach(h => {
    const style = window.getComputedStyle(h);
    h.dataset.startLeft = style.left;
    h.dataset.startTop = style.top;
  });

  // 🔥 TOMBOL SELALU AKTIF
  const btnUlang = document.getElementById("btnUlang");
  if (btnUlang) {
    btnUlang.style.display = "block";
    btnUlang.addEventListener("click", mainUlang);
  }

  // START DRAG
  semuaHewan.forEach(hewan => {
    hewan.addEventListener("mousedown", (e) => {
      e.preventDefault();

      const nama = Object.keys(pasangan).find(n =>
        hewan.classList.contains(n)
      );

      if (sudahBenar[nama]) return;

      active = hewan;

      const rect = hewan.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      hewan.style.zIndex = 9999;
      hewan.style.cursor = "grabbing";
    });
  });

  // DRAGGING
  document.addEventListener("mousemove", (e) => {
    if (!active) return;

    requestAnimationFrame(() => {
      const parent = screen.getBoundingClientRect();

      let x = e.clientX - parent.left - offsetX;
      let y = e.clientY - parent.top - offsetY;

      active.style.left = x + "px";
      active.style.top = y + "px";
    });
  });

  // RESET
  function resetSemuaHewan() {
    semuaHewan.forEach(h => {
      h.style.left = h.dataset.startLeft;
      h.style.top = h.dataset.startTop;
      h.style.transform = "";
      h.style.cursor = "grab";
    });

    Object.keys(sudahBenar).forEach(k => {
      sudahBenar[k] = false;
    });

    updateNilai(sudahBenar);
  }

  // DROP
  document.addEventListener("mouseup", (e) => {
    if (!active) return;

    const hewan = active;

    const namaHewan = Object.keys(pasangan).find(n =>
      hewan.classList.contains(n)
    );

    const semuaKeranjang = document.querySelectorAll(".keranjang");

    let benar = false;

    semuaKeranjang.forEach(k => {
      const rectK = k.getBoundingClientRect();

      const inside =
        e.clientX > rectK.left &&
        e.clientX < rectK.right &&
        e.clientY > rectK.top &&
        e.clientY < rectK.bottom;

      if (inside && k.classList.contains(pasangan[namaHewan])) {
        benar = true;

        const parent = screen.getBoundingClientRect();
        const rectH = hewan.getBoundingClientRect();

        const posX =
          rectK.left + rectK.width / 2 - parent.left - rectH.width / 2;

        const posY =
          rectK.top + rectK.height / 2 - parent.top - rectH.height / 2;

        hewan.style.left = posX + "px";
        hewan.style.top = posY + "px";
        hewan.style.transform = "scale(0.7)";
        hewan.style.cursor = "default";

        sudahBenar[namaHewan] = true;

        // 🔥 UPDATE NILAI
        updateNilai(sudahBenar);
      }
    });

    if (!benar) {
      resetSemuaHewan();
    }

    active = null;
  });

});
