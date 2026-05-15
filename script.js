/* =========================
   GLOBAL SCREEN MANAGER
========================= */
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  if (screenId === 'screen6' || screenId === 'screen15') {
    tampilkanDataScreen6();
  }

  if (screenId === 'screenPena17') {
    tampilkanDataLevel2();
  }

  if (screenId === 'screen16') {
    tampilkanScoreLevel2();
  }

  if (screenId === 'screen26') {
    tampilkanScoreLevel3();
  }

  if (screenId === 'screenPena') {
    const isi = localStorage.getItem('catatanPena') || '';
    const area = document.getElementById('catatanPena');
    if (area) area.value = isi;
  }

  if (screenId === 'screen4') {
    setTimeout(() => {
      const input = document.getElementById('namaInput');
      if (input) input.focus();
    }, 300);

    if (screenId === 'screen31') {
      const el = document.getElementById('nilaiGameLevel4');
      if (el) {
        el.innerText = localStorage.getItem('skorGameLevel4') || 0;

    if (screenId === 'screen6') {
  tampilkanDataScreen6();

  if (screenId === 'screen6') {
  setTimeout(() => {
    tampilkanDataScreen6();
  }, 100);
}
  
}    
      }
    }
  }
}

/* =========================
   USER SYSTEM
========================= */
function mulaiApp() {
  const nama = document.getElementById('namaInput').value;
  if (nama.trim() !== '') {
    localStorage.setItem('namaUser', nama);
    showScreen('screen2');
  } else {
    alert('Nama belum diisi!');
  }
}

function cekNamaSebelumMain() {
  const nama = localStorage.getItem('namaUser');
  if (nama && nama.trim() !== '') {
    showScreen('screen3');
  } else {
    alert('Isi nama dulu sebelum mulai!');
    showScreen('screen4');
  }
}

function bukaData() {
  const nama = localStorage.getItem('namaUser') || '';
  if (nama.trim() !== '') {
    tampilkanDataScreen6();
    showScreen('screen6');
  } else {
    alert('Isi nama dulu sebelum membuka data!');
    showScreen('screen4');
  }
}

function kembaliKeHome() {
  showScreen('screen1');
}

function keluarApp() {
  localStorage.removeItem('namaUser');
  localStorage.removeItem('skorGame');
  localStorage.removeItem('skorGameLevel2');
  localStorage.removeItem('skorGameLevel3');
  localStorage.removeItem('skorGameLevel4');    
  localStorage.removeItem('skorGameLevel5'); 
  localStorage.removeItem('catatanPena');
  alert('Semua data telah dihapus.');
  showScreen('screen1');
}

/* =========================
   DATA DISPLAY
========================= */
function tampilkanDataScreen6() {
  const nama = localStorage.getItem('namaUser') || '-';
  const skor1 = localStorage.getItem('skorGame') || 0;
  const skor2 = localStorage.getItem('skorGameLevel2') || 0;
  const skor3 = localStorage.getItem('skorGameLevel3') || 0;
  const skor4 = localStorage.getItem('skorGameLevel4') || 0;
  const skor6 = localStorage.getItem('skorGameLevel6') || 0;

  const skor5 = localStorage.getItem('skorGameLevel5') || 0;
  const catatan = localStorage.getItem('catatanPena') || '-';
  const skor7 = localStorage.getItem('skorGameLevel7') || 0;
  const skor8 = localStorage.getItem('skorGameLevel8') || 0;
  const skor9 = localStorage.getItem('skorGameLevel9') || 0;
  const skor66 = localStorage.getItem('skorGameLevel66') || 0;
  

  if (document.getElementById('tampilNama'))
    document.getElementById('tampilNama').innerText = 'Nama: ' + nama;

  if (document.getElementById('tampilNilai'))
    document.getElementById('tampilNilai').innerText = 'Level 1: ' + skor1;

  if (document.getElementById('tampilNilai2'))
    document.getElementById('tampilNilai2').innerText = 'Level 2: ' + skor2;

  if (document.getElementById('tampilNilai3'))
    document.getElementById('tampilNilai3').innerText = 'Level 3: ' + skor3;

  if (document.getElementById('tampilPena'))
    document.getElementById('tampilPena').innerText = 'Catatan: ' + catatan;

  if (document.getElementById('tampilNilai4'))
    document.getElementById('tampilNilai4').innerText = 'Level 4: ' + skor4;

  if (document.getElementById('tampilNilai5'))
  document.getElementById('tampilNilai5').innerText = 'Level 5: ' + skor5;  

  if (document.getElementById('tampilNilai6'))
  document.getElementById('tampilNilai6').innerText = 'Level 6: ' + skor6;
  if (document.getElementById('tampilNilai7'))
  document.getElementById('tampilNilai7').innerText = 'Level 7: ' + skor7;

  if (document.getElementById('tampilNilai8'))
document.getElementById('tampilNilai8').innerText = 'Level 8: ' + skor8;

if (document.getElementById('tampilNilai9'))
  document.getElementById('tampilNilai9').innerText = 'Level 9: ' + skor9;

  const el66 = document.getElementById('tampilNilai66');
if (el66) {
  el66.innerText = 'Level 10 (66): ' + skor66;
}

}

function tampilkanDataLevel2() {
  const nama = localStorage.getItem('namaUser') || '-';
  const skor2 = localStorage.getItem('skorGameLevel2') || 0;
  const catatan = localStorage.getItem('catatanPena') || '-';

  const elNama = document.querySelector('.nama17');
  const elNilai2 = document.querySelector('.nilai217');
  const elPena = document.querySelector('.pena17');

  if (elNama) elNama.innerText = 'Nama: ' + nama;
  if (elNilai2) elNilai2.innerText = 'Level 2: ' + skor2;
  if (elPena) elPena.innerText = catatan;
}

/* =========================
   CATATAN PENA
========================= */
function simpanPena() {
  const input = document.getElementById('catatanPena');
  if (!input) return;

  const isi = input.value.trim() || '-';
  localStorage.setItem('catatanPena', isi);

  tampilkanDataScreen6();
  tampilkanDataLevel2();
}

document.addEventListener('input', function (e) {
  if (e.target && e.target.id === 'catatanPena') {
    simpanPena();
  }
});

/* =========================
   LEVEL 1
========================= */
function initLevel1() {
  const pasangan = {
    singa: 'ksinga',
    ular: 'kular',
    ikan: 'kikan',
    ayam: 'kayam',
    kalajengking: 'kkalajengking',
    capung: 'kcapung',
    kuda: 'kkuda',
    sapi: 'ksapi',
  };

  setupDragGame('screen5', pasangan, 'nilaiGame', 'skorGame');
}

function mainUlang() {
  resetGame('screen5', 'nilaiGame', 'skorGame');
}

/* =========================
   LEVEL 2
========================= */
function tampilkanScoreLevel2() {
  const el = document.getElementById('nilaiGameLevel2');
  if (el) {
    el.innerText = localStorage.getItem('skorGameLevel2') || 0;
  }
}

function initLevel2() {
  const pasangan = {
    'kupu-kupu': 'kkupu-kupu',
    air: 'kair',
    tunas: 'ktunas',
    bunga: 'kbunga',
    telurulat: 'ktelurulat',
    kepompong: 'kkepompong',
    daun: 'kdaun',
    ulat: 'kulat',
  };

  setupDragGame('screen16', pasangan, 'nilaiGameLevel2', 'skorGameLevel2');
}

function mainUlangLevel2() {
  resetGame('screen16', 'nilaiGameLevel2', 'skorGameLevel2');
}

/* =========================
   GENERIC DRAG SYSTEM
========================= */
function setupDragGame(screenId, pasangan, scoreElementId, storageKey) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const items = screen.querySelectorAll('.hewan');
  let active = null,
    offsetX = 0,
    offsetY = 0;

  let benar = {};
  Object.keys(pasangan).forEach((k) => (benar[k] = false));

  screen.gameStatus = benar;

  items.forEach((item) => {
    const style = window.getComputedStyle(item);
    item.dataset.startLeft = style.left;
    item.dataset.startTop = style.top;

    item.addEventListener('mousedown', (e) => {
      active = item;

      const rect = item.getBoundingClientRect();

      // 🔥 hitung offset titik klik
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // 🔥 MATIKAN translate biar posisi akurat saat drag
      active.style.transform = 'none';

      active.style.zIndex = 9999;
    });
  });

  document.addEventListener('mousemove', (e) => {
    if (!active) return;
    const parent = screen.getBoundingClientRect();
    active.style.left = e.clientX - parent.left - offsetX + 'px';
    active.style.top = e.clientY - parent.top - offsetY + 'px';
  });

  document.addEventListener('mouseup', (e) => {
    if (!active) return;

    let success = false;
    const nama = Object.keys(pasangan).find((n) =>
      active.classList.contains(n),
    );

    screen.querySelectorAll('.keranjang').forEach((k) => {
      const rect = k.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      if (
        Math.sqrt(dx * dx + dy * dy) < rect.width * 0.25 &&
        k.classList.contains(pasangan[nama])
      ) {
        const parent = screen.getBoundingClientRect();

        const centerX = cx - parent.left;
        const centerY = cy - parent.top;

        active.style.left = centerX + 'px';
        active.style.top = centerY + 'px';
        active.style.transform = 'translate(-50%, -50%) scale(0.7)';

        benar[nama] = true;
        success = true;
      }
    });

    if (!success) {
      screen.querySelectorAll('.hewan').forEach((h) => {
        h.style.left = h.dataset.startLeft || '';
        h.style.top = h.dataset.startTop || '';
        h.style.transform = '';
        h.style.zIndex = '';
      });

      Object.keys(benar).forEach((k) => {
        benar[k] = false;
      });

      localStorage.setItem(storageKey, 0);

      const el = document.getElementById(scoreElementId);
      if (el) el.innerText = '0';

      active = null;
      return;
    }

    const total = Object.keys(benar).length;
    const correct = Object.values(benar).filter((v) => v).length;
    const skor = Math.round((correct / total) * 100);

    localStorage.setItem(storageKey, skor);

    const el = document.getElementById(scoreElementId);
    if (el) el.innerText = skor;

    active = null;
  });
}

function resetGame(screenId, scoreElementId, storageKey) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  screen.querySelectorAll('.hewan').forEach((h) => {
    h.style.left = h.dataset.startLeft || '';
    h.style.top = h.dataset.startTop || '';
    h.style.transform = '';
    h.style.zIndex = '';
  });

  if (screen.gameStatus) {
    Object.keys(screen.gameStatus).forEach((k) => {
      screen.gameStatus[k] = false;
    });
  }

  localStorage.setItem(storageKey, 0);

  const el = document.getElementById(scoreElementId);
  if (el) el.innerText = '0';
}

/* =========================
   LEVEL 3
========================= */
function tampilkanScoreLevel3() {
  const el = document.getElementById('scoreLevel3');
  if (el) {
    el.innerText = localStorage.getItem('skorGameLevel3') || 0;
    if (document.getElementById('tampilNilai4'))
      document.getElementById('tampilNilai4').innerText = 'Level 4: ' + skor4;
  }
}

function setupLevel3() {
  const area = document.getElementById('level3');
  if (!area) return;

  const items = area.querySelectorAll('.telur-a, .ult-b, .kempo-c, .kupu-d');
  const bases = area.querySelectorAll('.base-a, .base-b, .base-c, .base-d');

  let active = null;
  let offsetX = 0;
  let offsetY = 0;

  let score = 0;

  let sudahBenar = {
    'telur-a': false,
    'ult-b': false,
    'kempo-c': false,
    'kupu-d': false,
  };

  function updateScore() {
    const el = document.getElementById('scoreLevel3');
    if (el) el.innerText = score;
    localStorage.setItem('skorGameLevel3', score);
    tampilkanDataScreen6();
  }

  const pasangan = {
    'telur-a': 'base-a',
    'ult-b': 'base-b',
    'kempo-c': 'base-c',
    'kupu-d': 'base-d',
  };

  items.forEach((item) => {
    const style = window.getComputedStyle(item);
    item.dataset.startLeft = style.left;
    item.dataset.startTop = style.top;

    item.addEventListener('mousedown', (e) => {
      active = item;

      const r = item.getBoundingClientRect();
      offsetX = e.clientX - r.left;
      offsetY = e.clientY - r.top;

      item.style.zIndex = 9999;
    });
  });

  document.addEventListener('mousemove', (e) => {
    if (!active) return;

    const areaRect = area.getBoundingClientRect();

    let x = ((e.clientX - areaRect.left - offsetX) / areaRect.width) * 100;
    let y = ((e.clientY - areaRect.top - offsetY) / areaRect.height) * 100;

    active.style.left = x + '%';
    active.style.top = y + '%';
  });

  document.addEventListener('mouseup', () => {
    if (!active) return;

    let benar = false;

    bases.forEach((base) => {
      const r1 = active.getBoundingClientRect();
      const r2 = base.getBoundingClientRect();

      const kena =
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top;

      if (kena) {
        for (let key in pasangan) {
          if (
            active.classList.contains(key) &&
            base.classList.contains(pasangan[key])
          ) {
            const areaRect = area.getBoundingClientRect();

            let centerX =
              ((r2.left + r2.width / 2 - areaRect.left) / areaRect.width) * 100;
            let centerY =
              ((r2.top + r2.height / 2 - areaRect.top) / areaRect.height) * 100;

            active.style.left = centerX + '%';
            active.style.top = centerY + '%';

            active.style.transform = 'translate(-50%, -50%)';
            active.style.pointerEvents = 'none';

            if (!sudahBenar[key]) {
              sudahBenar[key] = true;
              score += 25;
              updateScore();
            }

            benar = true;
          }
        }
      }
    });

    if (!benar) {
      score = 0;

      for (let k in sudahBenar) {
        sudahBenar[k] = false;
      }

      updateScore();

      items.forEach((item) => {
        item.style.left = item.dataset.startLeft;
        item.style.top = item.dataset.startTop;
        item.style.transform = 'none';
        item.style.pointerEvents = 'auto';
        item.style.zIndex = 1;
      });
    }

    active.style.zIndex = 1;
    active = null;
  });

  updateScore();
}

function resetLevel3() {
  const area = document.getElementById('level3');
  if (!area) return;

  const items = area.querySelectorAll('.telur-a, .ult-b, .kempo-c, .kupu-d');

  items.forEach((item) => {
    item.style.left = item.dataset.startLeft;
    item.style.top = item.dataset.startTop;
    item.style.transform = 'none';
    item.style.pointerEvents = 'auto';
    item.style.zIndex = 1;
  });

  localStorage.setItem('skorGameLevel3', 0);

  const scoreEl = document.getElementById('scoreLevel3');
  if (scoreEl) scoreEl.innerText = '0';

  tampilkanDataScreen6();
}

/* =========================
   AUTO BUTTON NAVIGATION
========================= */
document.addEventListener('DOMContentLoaded', () => {
  const screenMap = {
    btnNext: 'screen18',
    btnBack16: 'screen16',
    btnToLevel3From16: 'screen26',
    btnNext19: 'screen19',
    btnBack18: 'screen18',
    btnTo16: 'screen16',
    btnNext20: 'screen20',
    btnBack16From20: 'screen16',
    btnTo20: 'screen20',
    btnTo19: 'screen19',
    btnTo21: 'screen21',
    btnBack20: 'screen20',
    btnTo16From21: 'screen16',
    btnTo22: 'screen22',
    btnBack21: 'screen21',
    btnTo16From22: 'screen16',
    btnTo23: 'screen23',
    btnTo24: 'screen24',
    btnBack23: 'screen23',
    btnTo16From24: 'screen16',
    btnTo18From24: 'screen18',
    btnTo24From18: 'screen24',
    btnBack22: 'screen22',
    btnTo16From23: 'screen16',
    btnTo25From24: 'screen25',
    btnBack24From25: 'screen24',
    btnTo16From25: 'screen16',
    btnTo18From25: 'screen18',
    btnTo25From18: 'screen25',
  };

  Object.entries(screenMap).forEach(([btnId, target]) => {
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener('click', () => showScreen(target));
  });

  const btnReset = document.querySelector('.btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', resetLevel3);
  }

  initLevel1();
  initLevel2();
  setupLevel3();
});

/* =========================
   LEVEL 4 - SCREEN 31
========================= */

function bukaLevel4() {
  showScreen('screen31');
}

/* tombol dari screen26 ke level 4 */
document.addEventListener('DOMContentLoaded', () => {
  const btnLevel4 = document.querySelector('.to-level4-btn');

  if (btnLevel4) {
    btnLevel4.addEventListener('click', bukaLevel4);
  }

  /* tombol back dari level 4 */
  const btnBack26 = document.querySelector('.back-to-26');

  if (btnBack26) {
    btnBack26.addEventListener('click', () => {
      showScreen('screen26');
    });
  }

  /* tombol home level 4 */
  const btnHome31 = document.querySelector('.home-from31');

  if (btnHome31) {
    btnHome31.addEventListener('click', () => {
      showScreen('screen26');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const btnFrom3 = document.querySelector('.to-level4-from3-btn');

  if (btnFrom3) {
    btnFrom3.addEventListener('click', function () {
      showScreen('screen31');
    });
  }
});

/* =========================
   LEVEL 4 FINAL FIX (AUTO INJECT)
   ❗ TIDAK MERUSAK LEVEL 1,2,3
========================= */

(function () {
  let sudahInit = false; // 🔥 kunci utama

  function initLevel4() {
    if (sudahInit) return; // cegah init ulang
    sudahInit = true;

    const screen = document.getElementById('screen31');
    if (!screen) return;

    const items = screen.querySelectorAll('.hewan');
    if (items.length === 0) {
      console.warn('Level 4 gagal: .hewan tidak ditemukan');
      return;
    }

    const pasangan = {
      'bawang-putih': 'keranjang-bawang-putih',
      'cabai-hijau': 'keranjang-cabai-hijau',
      'bawang-merah': 'keranjang-bawang-merah',
      wortel: 'keranjang-wortel',
      kentang: 'keranjang-ketang',
      jahe: 'keranjang-jahe',
      'cabai-merah': 'keranjang-cabai',
      semangka: 'keranjang-semangka',
    };

    setupDragGame('screen31', pasangan, 'nilaiGameLevel4', 'skorGameLevel4');

    const el = document.getElementById('nilaiGameLevel4');
    if (el) {
      el.innerText = localStorage.getItem('skorGameLevel4') || 0;
    }

    console.log('LEVEL 4 AKTIF ✅');
  }

  const oldShowScreen = showScreen;

  window.showScreen = function (screenId) {
    oldShowScreen(screenId);

    if (screenId === 'screen31') {
      setTimeout(initLevel4, 100);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-ulang-level4');

    if (btn) {
      btn.addEventListener('click', () => {
        resetGame('screen31', 'nilaiGameLevel4', 'skorGameLevel4');
      });
    }
  });

  /* =========================
   BUTTON HOME LEVEL 4
========================= */
  document.addEventListener('DOMContentLoaded', () => {
    const btnHome = document.querySelector('.btn-home-level4');

    if (btnHome) {
      btnHome.addEventListener('click', () => {
        showScreen('screen1');
      });
    }
  });

  /* =========================
   BUTTON BACK KE SCREEN 3
========================= */
  document.addEventListener('DOMContentLoaded', () => {
    const btnBack = document.querySelector('.btn-back-level4');

    if (btnBack) {
      btnBack.addEventListener('click', () => {
        showScreen('screen3');
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnToLevel4');

    if (btn) {
      btn.addEventListener('click', () => {
        showScreen('screen1'); // 🔥 pindah ke Level 4
      });
    }
  });
})();

/* =========================================================
   🔥 FINAL PATCH FIX (NON-DESTRUCTIVE)
   ❗ Tidak mengubah kode lama sedikit pun
========================================================= */

(function () {
  /* =========================
     FIX SHOW SCREEN LEVEL 4
  ========================= */
  const originalShowScreen = window.showScreen;

  window.showScreen = function (screenId) {
    originalShowScreen(screenId);

    // 🔥 pastikan skor Level 4 tampil
    if (screenId === 'screen31') {
      const el = document.getElementById('nilaiGameLevel4');
      if (el) {
        el.innerText = localStorage.getItem('skorGameLevel4') || 0;
      }
    }
  };

  /* =========================
     FIX skor4 UNDEFINED
  ========================= */
  const originalTampilData = window.tampilkanDataScreen6;

  window.tampilkanDataScreen6 = function () {
    originalTampilData();

    const skor4 = localStorage.getItem('skorGameLevel4') || 0;

    const el = document.getElementById('tampilNilai4');
    if (el) {
      el.innerText = 'Level 4: ' + skor4;

      
    }
  };

  /* =========================
     FIX BUTTON KE LEVEL 4
  ========================= */
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnToLevel4');

    if (btn) {
      btn.addEventListener('click', () => {
        showScreen('screen31'); // 🔥 arah yang benar
      });
    }
  });
})();

/* =========================
   BUTTON LEVEL 4 ➝ LEVEL 5
   (KHUSUS NAVIGASI SAJA)
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const btnLevel5 = document.querySelector('.to-level5-btn');

  if (btnLevel5) {
    btnLevel5.addEventListener('click', () => {
      showScreen('screen40'); // 🔥 ganti sesuai ID screen level 5 lo
    });
  }
});

/* =========================
   BUTTON LEVEL 5 ➝ LEVEL 4
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const btnBack = document.querySelector('.btn-back-to-31');

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      showScreen('screen31'); // 🔥 balik ke level 4
    });
  }
});

/* =========================
   LEVEL 5 (1 ITEM - BATANG PISANG)
========================= */

/* =========================
   LEVEL 5 (IKUT LEVEL 1 & 2)
   ❗ PAKAI setupDragGame
   ❗ TIDAK BENTROK showScreen
========================= */

(function () {

  let sudahInitLevel5 = false;

  function initLevel5() {
    if (sudahInitLevel5) return;
    sudahInitLevel5 = true;

    const screen = document.getElementById('screen40');
    if (!screen) return;

    const pasangan = {
      'batang-pisang': 'keranjang-pisang',
      'batang-pisang-2': 'keranjang-pisang-2',
      'tunas-pisang': 'keranjang-tunas',
      'daun-pisang': 'keranjang-daun'
    };

    // 🔥 FULL ikut Level 1 & 2
    setupDragGame(
      'screen40',
      pasangan,
      'nilaiGameLevel5',
      'skorGameLevel5'
    );

    // 🔥 tampilkan skor
    const el = document.getElementById('nilaiGameLevel5');
    if (el) {
      el.innerText = localStorage.getItem('skorGameLevel5') || 0;
    }

    console.log('LEVEL 5 AKTIF (SYSTEM LEVEL 1 & 2) ✅');
  }

  /* =========================
     TRIGGER TANPA OVERRIDE showScreen
  ========================= */
  document.addEventListener('DOMContentLoaded', () => {

    const observer = new MutationObserver(() => {
      const screen = document.getElementById('screen40');

      if (screen && screen.classList.contains('active')) {
        initLevel5();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });

  });

})();

document.addEventListener('DOMContentLoaded', () => {
  const btnReset5 = document.querySelector('.btn-reset-level5');

  if (btnReset5) {
    btnReset5.addEventListener('click', () => {
      resetGame('screen40', 'nilaiGameLevel5', 'skorGameLevel5');
    });
  }
});


function resetLevel45() {
  localStorage.removeItem('skorGameLevel4');
  localStorage.removeItem('skorGameLevel5');

  // update tampilan kalau sedang ada di screen data
  tampilkanDataScreen6();

  // reset tampilan score kalau sedang aktif
  const el4 = document.getElementById('nilaiGameLevel4');
  if (el4) el4.innerText = 0;

  const el5 = document.getElementById('nilaiGameLevel5');
  if (el5) el5.innerText = 0;
}


/* =========================================================
   LEVEL 6 FINAL (SCREEN 45) - 4 OBJEK
   ❗ KHUSUS LEVEL 6 (CLEAN & STABLE)
========================================================= */

(function () {

  let sudahInitLevel6 = false;

  function initLevel6() {
    if (sudahInitLevel6) return;

    const screen = document.getElementById('screen45');
    if (!screen) return;

    const items = screen.querySelectorAll('.hewan');
    if (items.length === 0) return;

    sudahInitLevel6 = true;

    const pasangan = {
      'batang-kentang': 'keranjang-kentang',
      'buah-kentang': 'keranjang-buah-kentang',
      'akar-kentang': 'keranjang-akar-kentang',
      'daun-kentang': 'keranjang-daun-kentang'
    };

    setupDragGame(
      'screen45',
      pasangan,
      'nilaiGameLevel6',
      'skorGameLevel6'
    );

    updateScore();

    console.log('LEVEL 6 SIAP ✅');
  }

  function updateScore() {
    const el = document.getElementById('nilaiGameLevel6');
    if (el) {
      el.innerText = localStorage.getItem('skorGameLevel6') || 0;
    }
  }

  /* =========================
     TRIGGER SAAT SCREEN AKTIF
  ========================= */
  const originalShowScreen = window.showScreen;

  window.showScreen = function (screenId) {
    originalShowScreen(screenId);

    if (screenId === 'screen45') {
      setTimeout(() => {
        initLevel6();
        updateScore();
      }, 100);
    }
  };

})();

/* =========================
   RESET LEVEL 6
========================= */
document.addEventListener('DOMContentLoaded', () => {
  const btnReset6 = document.querySelector('.btn-reset-level6');

  if (btnReset6) {
    btnReset6.addEventListener('click', () => {
      resetGame('screen45', 'nilaiGameLevel6', 'skorGameLevel6');

      const el = document.getElementById('nilaiGameLevel6');
      if (el) el.innerText = 0;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn40 = document.querySelector('.bottom-btn-40-to45');

  if (btn40) {
    btn40.addEventListener('click', () => {
      showScreen('screen45');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const btn45to40 = document.querySelector('.bottom-btn-45-to40');

  if (btn45to40) {
    btn45to40.addEventListener('click', () => {
      showScreen('screen40');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const btn3to45 = document.querySelector('.bottom-btn-3-to45');

  if (btn3to45) {
    btn3to45.addEventListener('click', () => {
      showScreen('screen45');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btnHome45 = document.querySelector('.bottom-btn-45-home');

  if (btnHome45) {
    btnHome45.addEventListener('click', () => {
      showScreen('screen1');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn45to3 = document.querySelector('.bottom-btn-45-to3');

  if (btn45to3) {
    btn45to3.addEventListener('click', () => {
      showScreen('screen3');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn45to46 = document.querySelector('.bottom-btn-45-to46');

  if (btn45to46) {
    btn45to46.addEventListener('click', () => {
      showScreen('screen46');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn46to45 = document.querySelector('.bottom-btn-46-to45');

  if (btn46to45) {
    btn46to45.addEventListener('click', () => {
      showScreen('screen45');
    });
  }
});


/* =========================================================
   LEVEL 7 FIX FINAL (SCREEN 50)
   - update score realtime
   - 0–100 (4 soal)
   - sinkron ke screen6
   - aman tanpa merusak kode lama
========================================================= */

(function () {

  let sudahInitLevel7 = false;

  function getScore7() {
    return parseInt(localStorage.getItem('skorGameLevel7')) || 0;
  }

  function setScore7(val) {
    localStorage.setItem('skorGameLevel7', val);
  }

  function updateUILevel7() {
    const el = document.getElementById('scoreLevel7');
    if (el) el.innerText = getScore7();

    const el2 = document.getElementById('nilaiGameLevel7');
    if (el2) el2.innerText = getScore7();

    // sinkron ke screen6
    if (typeof tampilkanDataScreen6 === 'function') {
      tampilkanDataScreen6();
    }
  }

  function initLevel7() {
    if (sudahInitLevel7) return;
    sudahInitLevel7 = true;

    const screen = document.getElementById('screen50');
    if (!screen) return;

    const pasangan = {
      'batang-wortel': 'keranjang-batang',
      'buah-wortel': 'keranjang-buah',
      'akar-wortel': 'keranjang-akar',
      'daun-wortel': 'keranjang-daun'
    };

    // RESET awal score
    setScore7(0);
    updateUILevel7();

    setupDragGame(
      'screen50',
      pasangan,
      'nilaiGameLevel7',
      'skorGameLevel7'
    );
  }

  /* =========================
     PATCH showScreen (AMAN)
  ========================= */
  const oldShow = window.showScreen;

  window.showScreen = function (id) {
    oldShow(id);

    if (id === 'screen50') {
      setTimeout(initLevel7, 100);
      setTimeout(updateUILevel7, 150);
    }
  };

  /* =========================
     UPDATE SCORE LIVE
     (HOOK GLOBAL LOCALSTORAGE CHANGE)
  ========================= */
  const originalSetItem = localStorage.setItem;

  localStorage.setItem = function (key, value) {
    originalSetItem.apply(this, arguments);

    if (key === 'skorGameLevel7') {
      updateUILevel7();
    }
  };

  /* =========================
     RESET BUTTON LEVEL 7
  ========================= */
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-reset-level7');

    if (btn) {
      btn.addEventListener('click', () => {
        setScore7(0);

        resetGame('screen50', 'nilaiGameLevel7', 'skorGameLevel7');
        updateUILevel7();
      });
    }
  });

})();


/* =========================================================
   LEVEL 8 FINAL (SCREEN 55) - SEMANGKA
   ❗ KHUSUS LEVEL 8
   ❗ TIDAK MERUSAK LEVEL LAIN
========================================================= */

(function () {

  let sudahInitLevel8 = false;

  function initLevel8() {

    if (sudahInitLevel8) return;

    const screen = document.getElementById('screen55');
    if (!screen) return;

    const items = screen.querySelectorAll('.hewan');
    if (items.length === 0) return;

    sudahInitLevel8 = true;

    const pasangan = {
      'batang-semangka': 'keranjang-batang-semangka',
      'buah-semangka': 'keranjang-buah-semangka',
      'bunga-semangka': 'keranjang-bunga-semangka',
      'akar-semangka': 'keranjang-akar-semangka',
      'daun-semangka': 'keranjang-daun-semangka'
    };

    setupDragGame(
      'screen55',
      pasangan,
      'nilaiGameLevel8',
      'skorGameLevel8'
    );

    updateScore8();

    console.log('LEVEL 8 AKTIF ✅');
  }

  function updateScore8() {

    const el = document.getElementById('nilaiGameLevel8');

    if (el) {
      el.innerText =
        localStorage.getItem('skorGameLevel8') || 0;
    }
  }

  /* =========================
     PATCH showScreen (AMAN)
  ========================= */

  const oldShowScreen = window.showScreen;

  window.showScreen = function (screenId) {

    oldShowScreen(screenId);

    if (screenId === 'screen55') {

      setTimeout(() => {

        initLevel8();
        updateScore8();

      }, 100);
    }
  };

  /* =========================
     RESET BUTTON LEVEL 8
  ========================= */

  document.addEventListener('DOMContentLoaded', () => {

    const btnReset =
      document.querySelector('.btn-reset-level8');

    if (btnReset) {

      btnReset.addEventListener('click', () => {

        resetGame(
          'screen55',
          'nilaiGameLevel8',
          'skorGameLevel8'
        );

        const el =
          document.getElementById('nilaiGameLevel8');

        if (el) el.innerText = 0;
      });
    }
  });

})();


(function () {

  let sudahInitLevel9 = false;

  function initLevel9() {

    if (sudahInitLevel9) return;

    const screen = document.getElementById('screen61');
    if (!screen) return;

    sudahInitLevel9 = true;

    const pasangan = {
      'buah-tomat': 'keranjang-buah',
      'batang-tomat': 'keranjang-batang',
      'akar-tomat': 'keranjang-akar',
      'daun-tomat': 'keranjang-daun'
    };

    setupDragGame(
      'screen61',
      pasangan,
      'nilaiGameLevel9',
      'skorGameLevel9'
    );

    const el = document.getElementById('nilaiGameLevel9');
    if (el) {
      el.innerText = localStorage.getItem('skorGameLevel9') || 0;
    }

  }

  const oldShow = window.showScreen;

  window.showScreen = function (id) {
    oldShow(id);

    if (id === 'screen61') {
      setTimeout(initLevel9, 100);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {

    const btnReset = document.querySelector('.btn-reset-level9');

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        resetGame('screen61', 'nilaiGameLevel9', 'skorGameLevel9');
      });
    }

  });

})();





/* =========================
   LEVEL 66 - SCORE 0–100
========================= */

(function () {

  let active = null;
  let offsetX = 0;
  let offsetY = 0;

  let cleaned = 0;
  let finished = false;

  const screen = document.getElementById('screen66');
  const sabun = document.getElementById('sabun');
  const scoreEl = document.getElementById('scoreLevel66');

  const kuman = screen.querySelectorAll('.kuman');
  const maxKuman = kuman.length;
  const pointPerKuman = 100 / maxKuman;

  // =========================
  // SCORE SYSTEM
  // =========================
  function updateScore() {
    if (finished) return;

    const score = Math.round(cleaned * pointPerKuman);

    if (scoreEl) scoreEl.innerText = score;
    localStorage.setItem('skorGameLevel66', score);

    // 🔥 LOCK jika semua kuman hilang
    if (cleaned >= maxKuman) {
      finished = true;
      if (scoreEl) scoreEl.innerText = 100;
      localStorage.setItem('skorGameLevel66', 100);
    }
  }

  // =========================
  // DRAG SABUN
  // =========================
  if (sabun) {
    sabun.addEventListener('mousedown', (e) => {
      if (finished) return;

      active = sabun;

      const rect = sabun.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      sabun.style.zIndex = 9999;
    });
  }

  document.addEventListener('mousemove', (e) => {
    if (!active || finished) return;

    const parent = screen.getBoundingClientRect();

    active.style.left = (e.clientX - parent.left - offsetX) + 'px';
    active.style.top = (e.clientY - parent.top - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (!active || finished) return;

    const sabunRect = sabun.getBoundingClientRect();

    kuman.forEach((k) => {

      if (k.style.display === 'none') return;

      const kRect = k.getBoundingClientRect();

      const overlap =
        sabunRect.left < kRect.right &&
        sabunRect.right > kRect.left &&
        sabunRect.top < kRect.bottom &&
        sabunRect.bottom > kRect.top;

      if (overlap) {
        k.style.display = 'none';
        cleaned++;
        updateScore();
      }
    });

    active = null;
  });

  updateScore();


  // =========================
  // RESET SYSTEM (IMPORTANT)
  // =========================
  window.resetSabun66 = function () {

    cleaned = 0;
    finished = false;
    active = null;

    // reset sabun
    if (sabun) {
      sabun.style.left = '10%';
      sabun.style.top = '80%';
      sabun.style.transform = 'none';
      sabun.style.zIndex = '20';
    }

    // reset kuman
    kuman.forEach(k => {
      k.style.display = 'block';
    });

    // reset score
    if (scoreEl) scoreEl.innerText = 0;
    localStorage.setItem('skorGameLevel66', 0);

    updateScore();
  };

})();


/* =========================
   RESET SABUN + KUMAN SCREEN 66
========================= */

function resetSabun66() {
  const sabun = document.getElementById('sabun');
  const screen = document.getElementById('screen66');

  if (sabun && screen) {
    // balik ke posisi awal sabun
    sabun.style.left = '10%';
    sabun.style.top = '80%';
    sabun.style.transform = 'none';
    sabun.style.zIndex = '20';
  }

  // tampilkan semua kuman lagi
  const kuman = screen.querySelectorAll('.kuman');
  kuman.forEach(k => {
    k.style.display = 'block';
  });

  // reset score
  const scoreEl = document.getElementById('scoreLevel66');
  if (scoreEl) scoreEl.innerText = 0;
  
}







function initLevel67() {

  const pasangan = {
    'nama1': 'k-nama1',
    'nama2': 'k-nama2',
    'nama3': 'k-nama3'
  };

  setupDragGame(
    'screen67',
    pasangan,
    'nilaiGameLevel67',
    'skorGameLevel67'
  );

  // 🔥 SYNC SCORE KE SCREEN 6
  const scoreEl67 = document.getElementById('nilaiGameLevel67');

  if (scoreEl67) {
    const observer = new MutationObserver(() => {
      const score = parseInt(scoreEl67.innerText || 0);

      const scoreScreen6 = document.getElementById('scoreLevel66');
      if (scoreScreen6) {
        scoreScreen6.innerText = score;
      }
    });

    observer.observe(scoreEl67, { childList: true });
  }
}


/* trigger saat masuk screen 67 */
const oldShowScreen67 = window.showScreen;

window.showScreen = function (id) {
  oldShowScreen67(id);

  if (id === 'screen67') {
    setTimeout(initLevel67, 100);
  }
};


/* =========================
   RESET SCREEN 67
========================= */

function resetScreen67() {
  const screen = document.getElementById('screen67');
  if (!screen) return;

  // reset semua item drag
  const items = screen.querySelectorAll('.hewan');
  items.forEach((item) => {
    item.style.left = '';
    item.style.top = '';
    item.style.transform = '';
    item.style.zIndex = '';
    item.style.pointerEvents = '';
  });

  // reset score level 67
  localStorage.setItem('skorGameLevel67', 0);

  const scoreEl = document.getElementById('nilaiGameLevel67');
  if (scoreEl) scoreEl.innerText = 0;

  // 🔥 RESET juga tampilan di screen 6
  const scoreScreen6 = document.getElementById('scoreLevel66');
  if (scoreScreen6) scoreScreen6.innerText = 0;
}



/* =========================
   LEVEL SCREEN 74
========================= */

(function () {

  let active = null;
  let offsetX = 0;
  let offsetY = 0;

  let cleaned = 0;

  const sampah = document.querySelectorAll('#screen74 .sampah');

  const tong = document.getElementById('tong74');

  const scoreEl = document.getElementById('scoreLevel74');



  // =========================
  // DRAG START
  // =========================

  sampah.forEach((item) => {

    item.addEventListener('mousedown', startDrag);
    item.addEventListener('touchstart', startDrag);

  });


  function startDrag(e) {

    active = e.target;

    const rect = active.getBoundingClientRect();

    if (e.touches) {

      offsetX = e.touches[0].clientX - rect.left;
      offsetY = e.touches[0].clientY - rect.top;

    } else {

      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

    }

    active.style.zIndex = 9999;
  }


  // =========================
  // DRAG MOVE
  // =========================

  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag);


  function drag(e) {

    if (!active) return;

    e.preventDefault();

    let clientX;
    let clientY;

    if (e.touches) {

      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;

    } else {

      clientX = e.clientX;
      clientY = e.clientY;

    }

    const screen = document.getElementById('screen74');

    const rect = screen.getBoundingClientRect();

    active.style.left =
      ((clientX - rect.left - offsetX) / rect.width) * 100 + '%';

    active.style.top =
      ((clientY - rect.top - offsetY) / rect.height) * 100 + '%';
  }


  // =========================
  // DROP
  // =========================

  document.addEventListener('mouseup', drop);
  document.addEventListener('touchend', drop);


  function drop() {

    if (!active) return;

    const tongRect = tong.getBoundingClientRect();

    const itemRect = active.getBoundingClientRect();

    const masuk =
      itemRect.left < tongRect.right &&
      itemRect.right > tongRect.left &&
      itemRect.top < tongRect.bottom &&
      itemRect.bottom > tongRect.top;

    if (masuk) {

      active.style.display = 'none';

      cleaned++;

      let score = Math.round((cleaned / 10) * 100);

      scoreEl.innerText = score;
const scoreProtulingLevel1 =
  document.getElementById('scoreProtulingLevel1');

if (scoreProtulingLevel1) {

  scoreProtulingLevel1.innerText = score;
}
    }

    active = null;
  }

})();


/* =========================
   RESET LEVEL 74
========================= */


const posisiAwal74 = [

  { left: '28%', top: '47%' },
  { left: '38%', top: '46%' },
  { left: '49%', top: '46%' },
  { left: '65%', top: '48%' },
  { left: '56%', top: '57%' },

  { left: '34%', top: '57%' },
  { left: '31%', top: '65%' },
  { left: '44%', top: '67%' },
  { left: '58%', top: '67%' },
  { left: '45.3%', top: '49.3%' }

];

function resetLevel74() {
  
  const scoreProtulingLevel1 =
  document.getElementById('scoreProtulingLevel1');

if(scoreProtulingLevel1){

  scoreProtulingLevel1.innerText = 0;
}

  const items =
    document.querySelectorAll('#screen74 .sampah');

  items.forEach((item, index) => {

    item.style.display = 'block';

    item.style.left =
      posisiAwal74[index].left;

    item.style.top =
      posisiAwal74[index].top;
  });

  // reset score
  cleaned = 0;

  const scoreEl =
    document.getElementById('scoreLevel74');

  if (scoreEl) {
    scoreEl.innerText = 0;
  }
}


/* =========================
   TOMBOL RESET LEVEL 74
========================= */

const resetBtn74 =
  document.querySelector(
    '#screen74 .reset-level74'
  );

if (resetBtn74) {

  resetBtn74.addEventListener(
    'click',
    resetLevel74
  );

}

 
/* =========================
   LEVEL 76
========================= */

(function(){

  const daun =
    document.getElementById("daun76");

  const tong =
    document.getElementById("tong76");

  const scoreEl =
    document.getElementById("scoreLevel76");

  let isDragging = false;

  let offsetX = 0;
  let offsetY = 0;


  /* =========================
     START DRAG
  ========================= */

  daun.addEventListener("mousedown", startDrag);
  daun.addEventListener("touchstart", startDrag);


  function startDrag(e){

    isDragging = true;

    const rect =
      daun.getBoundingClientRect();

    if(e.touches){

      offsetX =
        e.touches[0].clientX - rect.left;

      offsetY =
        e.touches[0].clientY - rect.top;

    }else{

      offsetX =
        e.clientX - rect.left;

      offsetY =
        e.clientY - rect.top;
    }
  }


  /* =========================
     MOVE
  ========================= */

  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag, {passive:false});


  function drag(e){

    if(!isDragging) return;

    e.preventDefault();

    let clientX;
    let clientY;

    if(e.touches){

      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;

    }else{

      clientX = e.clientX;
      clientY = e.clientY;
    }

    const screen =
      document.getElementById("screen76");

    const rect =
      screen.getBoundingClientRect();

    daun.style.left =
      ((clientX - rect.left - offsetX)
      / rect.width) * 100 + "%";

    daun.style.top =
      ((clientY - rect.top - offsetY)
      / rect.height) * 100 + "%";
  }


  /* =========================
     DROP
  ========================= */

  document.addEventListener("mouseup", drop);
  document.addEventListener("touchend", drop);


  function drop(){

    if(!isDragging) return;

    isDragging = false;

    const tongRect =
      tong.getBoundingClientRect();

    const daunRect =
      daun.getBoundingClientRect();

    const masuk =
      daunRect.left < tongRect.right &&
      daunRect.right > tongRect.left &&
      daunRect.top < tongRect.bottom &&
      daunRect.bottom > tongRect.top;

    if(masuk){

      daun.style.display = "none";

      scoreEl.innerText = "100";

      /* SCORE SCREEN 6 */

      const scoreProtulingLevel2 =
  document.getElementById("scoreProtulingLevel2");

if(scoreProtulingLevel2){

  scoreProtulingLevel2.innerText = "100";
}
    }
  }


  /* =========================
     RESET
  ========================= */

  document
    .querySelector("#screen76 .reset-level76")
    .addEventListener("click", function(){

      daun.style.display = "block";

      daun.style.width = "50%";

daun.style.left = "25%";
daun.style.top = "40%";

      scoreEl.innerText = "0";

      const scoreProtulingLevel2 =
  document.getElementById("scoreProtulingLevel2");

if(scoreProtulingLevel2){

  scoreProtulingLevel2.innerText = "0";
}
    });

})();
      




/* =========================
   LEVEL 78
========================= */

(function(){

  let active = null;

  let offsetX = 0;
  let offsetY = 0;

  let cleaned = 0;

  const items =
    document.querySelectorAll("#screen78 .item78");

  const scoreEl =
    document.getElementById("scoreLevel78");


  const pasangan = {

    bawangA:
      document.getElementById("keranjangBawangA"),

    jerukB:
      document.getElementById("keranjangJerukB"),

    tomatB:
      document.getElementById("keranjangTomatB"),

    jerukC:
      document.getElementById("keranjangJerukC")
  };


  /* =========================
     START DRAG
  ========================= */

  items.forEach((item)=>{

    item.addEventListener("mousedown", startDrag);
    item.addEventListener("touchstart", startDrag);

  });


  function startDrag(e){

    active = this;

    const rect =
      active.getBoundingClientRect();

    if(e.touches){

      offsetX =
        e.touches[0].clientX - rect.left;

      offsetY =
        e.touches[0].clientY - rect.top;

    }else{

      offsetX =
        e.clientX - rect.left;

      offsetY =
        e.clientY - rect.top;
    }
  }


  /* =========================
     MOVE
  ========================= */

  document.addEventListener("mousemove", drag78);
  document.addEventListener("touchmove", drag78, {passive:false});


  function drag78(e){

    if(!active) return;

    e.preventDefault();

    let clientX;
    let clientY;

    if(e.touches){

      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;

    }else{

      clientX = e.clientX;
      clientY = e.clientY;
    }

    const screen =
      document.getElementById("screen78");

    const rect =
      screen.getBoundingClientRect();

    active.style.left =
      ((clientX - rect.left - offsetX)
      / rect.width) * 100 + "%";

    active.style.top =
      ((clientY - rect.top - offsetY)
      / rect.height) * 100 + "%";
  }


  /* =========================
     DROP
  ========================= */

  document.addEventListener("mouseup", drop78);
  document.addEventListener("touchend", drop78);


  function drop78(){

    if(!active) return;

    let target = null;

    if(active.classList.contains("bawangA")){

      target = pasangan.bawangA;
    }

    if(active.classList.contains("jerukB")){

      target = pasangan.jerukB;
    }

    if(active.classList.contains("tomatB")){

      target = pasangan.tomatB;
    }

    if(active.classList.contains("jerukC")){

      target = pasangan.jerukC;
    }

    const itemRect =
      active.getBoundingClientRect();

    const targetRect =
      target.getBoundingClientRect();


let dropLeft =
  targetRect.left + (targetRect.width * 0.25);

let dropRight =
  targetRect.left + (targetRect.width * 0.60);

let dropTop =
  targetRect.top + (targetRect.height * 0.25);

let dropBottom =
  targetRect.top + (targetRect.height * 0.60);
    
  const centerX =
  itemRect.left + itemRect.width / 2;

const centerY =
  itemRect.top + itemRect.height / 2;

const masuk =
  centerX > dropLeft &&
  centerX < dropRight &&
  centerY > dropTop &&
  centerY < dropBottom;
    
    if(masuk){

      active.style.display = "none";

      cleaned++;

      let score =
        Math.round((cleaned / 4) * 100);

      scoreEl.innerText = score;


      /* SCORE SCREEN 6 */

      const scoreLevel78Screen6 =
        document.getElementById("scoreLevel78Screen6");

      if(scoreLevel78Screen6){

        scoreLevel78Screen6.innerText = score;
         
      }
    }

    active = null;
  }


  /* =========================
     RESET
  ========================= */

  document
    .querySelector("#screen78 .reset-level78")
    .addEventListener("click", reset78);


  function reset78(){

    cleaned = 0;

    scoreEl.innerText = 0;

    const scoreLevel78Screen6 =
      document.getElementById("scoreLevel78Screen6");

    if(scoreLevel78Screen6){

      scoreLevel78Screen6.innerText = 0;
    }

    items.forEach((item)=>{

      item.style.display = "block";
    });

    document.querySelector(".bawangA").style.left = "28%";
document.querySelector(".bawangA").style.top = "38%";

document.querySelector(".jerukB").style.left = "53.4%";
document.querySelector(".jerukB").style.top = "46%";

document.querySelector(".tomatB").style.left = "26%";
document.querySelector(".tomatB").style.top = "59.9%";

document.querySelector(".jerukC").style.left = "57%";
document.querySelector(".jerukC").style.top = "60.1%";
  }

})();


/* =========================
   LEVEL 80
========================= */

(function(){

  let active = null;

  let offsetX = 0;
  let offsetY = 0;

  let cleaned = 0;

  let slotMerah = 0;
  let slotBiruTua = 0;
  let slotBiruMuda = 0;

  const buku =
    document.querySelectorAll("#screen80 .buku80");

  const scoreEl =
    document.getElementById("scoreLevel80");


  const rakMerah =
    document.getElementById("rakMerah80");

  const rakBiruTua =
    document.getElementById("rakBiruTua80");

  const rakBiruMuda =
    document.getElementById("rakBiruMuda80");


  /* =========================
     START DRAG
  ========================= */

  buku.forEach((item)=>{

    item.addEventListener("mousedown", startDrag);
    item.addEventListener("touchstart", startDrag);

  });


  function startDrag(e){

    active = this;

    const rect =
      active.getBoundingClientRect();

    if(e.touches){

      offsetX =
        e.touches[0].clientX - rect.left;

      offsetY =
        e.touches[0].clientY - rect.top;

    }else{

      offsetX =
        e.clientX - rect.left;

      offsetY =
        e.clientY - rect.top;
    }
  }


  /* =========================
     MOVE
  ========================= */

  document.addEventListener("mousemove", drag80);
  document.addEventListener("touchmove", drag80,{passive:false});


  function drag80(e){

    if(!active) return;

    e.preventDefault();

    let clientX;
    let clientY;

    if(e.touches){

      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;

    }else{

      clientX = e.clientX;
      clientY = e.clientY;
    }

    const screen =
      document.getElementById("screen80");

    const rect =
      screen.getBoundingClientRect();

    /* =========================
   SMOOTH DRAG
========================= */

requestAnimationFrame(()=>{

  active.style.left =
    ((clientX - rect.left - offsetX)
    / rect.width) * 100 + "%";

  active.style.top =
    ((clientY - rect.top - offsetY)
    / rect.height) * 100 + "%";

});
  }


  /* =========================
     DROP
  ========================= */

  document.addEventListener("mouseup", drop80);
  document.addEventListener("touchend", drop80);


  function drop80(){

    if(!active) return;

    const itemRect =
      active.getBoundingClientRect();

    const centerX =
      itemRect.left + itemRect.width/2;

    const centerY =
      itemRect.top + itemRect.height/2;

    let target = null;


    if(active.classList.contains("merah")){

      target = rakMerah;
    }

    if(active.classList.contains("biruTua")){

      target = rakBiruTua;
    }

    if(active.classList.contains("biruMuda")){

      target = rakBiruMuda;
    }


    const rakRect =
      target.getBoundingClientRect();

    const masuk =
      centerX > rakRect.left &&
      centerX < rakRect.right &&
      centerY > rakRect.top &&
      centerY < rakRect.bottom;


    if(masuk){

      active.style.transform =
        "rotate(90deg)";

      active.style.width = "4%";


      /* =========================
   SUSUN RAK MERAH
========================= */

if(active.classList.contains("merah")){

  active.style.left =
    (42 + (slotMerah * 1.8)) + "%";

  active.style.top = "49%";

  active.style.transform =
    "rotate(0deg)";

  active.style.width = "3.2%";

  slotMerah++;
}


/* =========================
   SUSUN RAK BIRU TUA
========================= */

if(active.classList.contains("biruTua")){

  active.style.left =
    (42 + (slotBiruTua * 1.8)) + "%";

  active.style.top = "59%";

  active.style.transform =
    "rotate(0deg)";

  active.style.width = "3.2%";

  slotBiruTua++;
}


/* =========================
   SUSUN RAK BIRU MUDA
========================= */

if(active.classList.contains("biruMuda")){

  active.style.left =
    (42 + (slotBiruMuda * 1.8)) + "%";

  active.style.top = "67%";

  active.style.transform =
    "rotate(0deg)";

  active.style.width = "3.2%";

  slotBiruMuda++;
}


      cleaned++;

      let score =
        Math.round((cleaned / 18) * 100);

      scoreEl.innerText = score;


      /* SCORE SCREEN 6 */

      const scoreLevel80Screen6 =
        document.getElementById("scoreLevel80Screen6");

      if(scoreLevel80Screen6){

        scoreLevel80Screen6.innerText = score;
      }
    }

    active = null;
  }


 /* =========================
   RESET LEVEL 80
========================= */

document
  .querySelector("#screen80 .reset-level80")
  .addEventListener("click", reset80);


function reset80(){

  cleaned = 0;

  scoreEl.innerText = 0;


  /* SCORE SCREEN 6 */

  const scoreLevel80Screen6 =
    document.getElementById("scoreLevel80Screen6");

  if(scoreLevel80Screen6){

    scoreLevel80Screen6.innerText = 0;
  }


  /* RESET SLOT */

  slotMerah = 0;
  slotBiruTua = 0;
  slotBiruMuda = 0;


  /* RESET SEMUA BUKU */

  buku.forEach((item)=>{

    item.style.transform =
      "rotate(-90deg)";

    item.style.width = "8%";
  });


  /* =========================
     WAJAH SMILE
  ========================= */


  /* MATA KIRI */

  document.querySelector(".merah1").style.left = "28%";
  document.querySelector(".merah1").style.top = "28%";

  document.querySelector(".merah2").style.left = "36%";
  document.querySelector(".merah2").style.top = "28%";


  /* MATA KANAN */

  document.querySelector(".biruTua1").style.left = "58%";
  document.querySelector(".biruTua1").style.top = "28%";

  document.querySelector(".biruTua2").style.left = "66%";
  document.querySelector(".biruTua2").style.top = "28%";


  /* HIDUNG */

  document.querySelector(".biruMuda1").style.left = "48%";
  document.querySelector(".biruMuda1").style.top = "45%";

  document.querySelector(".biruMuda2").style.left = "52%";
  document.querySelector(".biruMuda2").style.top = "45%";


  /* MULUT */

  document.querySelector(".merah3").style.left = "28%";
  document.querySelector(".merah3").style.top = "64%";

  document.querySelector(".merah4").style.left = "36%";
  document.querySelector(".merah4").style.top = "72%";

  document.querySelector(".merah5").style.left = "46%";
  document.querySelector(".merah5").style.top = "76%";

  document.querySelector(".merah6").style.left = "56%";
  document.querySelector(".merah6").style.top = "76%";

  document.querySelector(".biruTua3").style.left = "66%";
  document.querySelector(".biruTua3").style.top = "72%";

  document.querySelector(".biruTua4").style.left = "74%";
  document.querySelector(".biruTua4").style.top = "64%";


  /* PIPI */

  document.querySelector(".biruMuda3").style.left = "20%";
  document.querySelector(".biruMuda3").style.top = "52%";

  document.querySelector(".biruMuda4").style.left = "78%";
  document.querySelector(".biruMuda4").style.top = "52%";


  /* BAWAH */

  document.querySelector(".biruTua5").style.left = "34%";
  document.querySelector(".biruTua5").style.top = "88%";

  document.querySelector(".biruTua6").style.left = "66%";
  document.querySelector(".biruTua6").style.top = "88%";

  document.querySelector(".biruMuda5").style.left = "44%";
  document.querySelector(".biruMuda5").style.top = "90%";

  document.querySelector(".biruMuda6").style.left = "56%";
  document.querySelector(".biruMuda6").style.top = "90%";
}
  
/* =========================
   LEVEL 82
========================= */

(function(){

  let active = null;

  let offsetX = 0;
  let offsetY = 0;

  let cleaned = 0;

  const scoreEl =
    document.getElementById("scoreLevel82");


  const vas =
    document.getElementById("vas82");

  const kursi =
    document.getElementById("kursi82");


  const shadowVas =
    document.getElementById("shadowVas82");

  const shadowKursi =
    document.getElementById("shadowKursi82");


  const items = [vas, kursi];


  /* =========================
     START DRAG
  ========================= */

  items.forEach((item)=>{

    item.addEventListener("mousedown", startDrag);
    item.addEventListener("touchstart", startDrag);

  });


  function startDrag(e){

    active = this;

    const rect =
      active.getBoundingClientRect();

    if(e.touches){

      offsetX =
        e.touches[0].clientX - rect.left;

      offsetY =
        e.touches[0].clientY - rect.top;

    }else{

      offsetX =
        e.clientX - rect.left;

      offsetY =
        e.clientY - rect.top;
    }
  }


  /* =========================
     MOVE
  ========================= */

  document.addEventListener("mousemove", drag82);
  document.addEventListener("touchmove", drag82,{passive:false});


  function drag82(e){

    if(!active) return;

    e.preventDefault();

    let clientX;
    let clientY;

    if(e.touches){

      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;

    }else{

      clientX = e.clientX;
      clientY = e.clientY;
    }

    const screen =
      document.getElementById("screen82");

    const rect =
      screen.getBoundingClientRect();

    active.style.left =
      ((clientX - rect.left - offsetX)
      / rect.width) * 100 + "%";

    active.style.top =
      ((clientY - rect.top - offsetY)
      / rect.height) * 100 + "%";
  }


  /* =========================
     DROP
  ========================= */

  document.addEventListener("mouseup", drop82);
  document.addEventListener("touchend", drop82);


  function drop82(){

    if(!active) return;

    const itemRect =
      active.getBoundingClientRect();

    const centerX =
      itemRect.left + itemRect.width/2;

    const centerY =
      itemRect.top + itemRect.height/2;

    let target = null;


    if(active.id === "vas82"){

      target = shadowVas;
    }

    if(active.id === "kursi82"){

      target = shadowKursi;
    }


    const targetRect =
      target.getBoundingClientRect();


    let dropLeft =
      targetRect.left + (targetRect.width * 0.20);

    let dropRight =
      targetRect.left + (targetRect.width * 0.80);

    let dropTop =
      targetRect.top + (targetRect.height * 0.20);

    let dropBottom =
      targetRect.top + (targetRect.height * 0.80);


    const masuk =
      centerX > dropLeft &&
      centerX < dropRight &&
      centerY > dropTop &&
      centerY < dropBottom;


    /* =========================
       JIKA MASUK
    ========================= */

    if(masuk){

      /* VAS */

      if(active.id === "vas82"){

        active.style.left = "43%";
        active.style.top = "42%";

        active.style.transform =
          "rotate(445deg)";

        active.style.width = "10%";
      }


      /* KURSI */

      if(active.id === "kursi82"){

        active.style.left = "48%";
        active.style.top = "55%";

        active.style.transform =
          "rotate(240deg)";

        active.style.width = "15%";
      }


      cleaned++;

      let score =
        Math.round((cleaned / 2) * 100);

      scoreEl.innerText = score;


      /* SCORE SCREEN 6 */

      const scoreLevel82Screen6 =
        document.getElementById("scoreLevel82Screen6");

      if(scoreLevel82Screen6){

        scoreLevel82Screen6.innerText = score;
      }
    }


    /* =========================
       JIKA SALAH
    ========================= */

    if(!masuk){

      if(active.id === "vas82"){

        active.style.left = "18%";
        active.style.top = "78%";

        active.style.transform =
          "rotate(-90deg)";

        active.style.width = "16%";
      }

      if(active.id === "kursi82"){

        active.style.left = "60%";
        active.style.top = "78%";

        active.style.transform =
          "rotate(-90deg)";

        active.style.width = "18%";
      }
    }

    active = null;
  }


  /* =========================
     RESET
  ========================= */

  document
    .querySelector("#screen82 .reset-level82")
    .addEventListener("click", reset82);


  function reset82(){

    cleaned = 0;

    scoreEl.innerText = 0;


    /* SCORE SCREEN 6 */

    const scoreLevel82Screen6 =
      document.getElementById("scoreLevel82Screen6");

    if(scoreLevel82Screen6){

      scoreLevel82Screen6.innerText = 0;
    }


    /* RESET VAS */

    vas.style.left = "18%";
    vas.style.top = "78%";

    vas.style.width = "16%";

    vas.style.transform =
      "rotate(-90deg)";


    /* RESET KURSI */

    kursi.style.left = "60%";
    kursi.style.top = "78%";

    kursi.style.width = "18%";

    kursi.style.transform =
      "rotate(-90deg)";
  }

})();
  

})();



/* =========================
   SCREEN 82 - TOGGLE
========================= */

(function(){


  /* =========================
     SCORE
  ========================= */

  const scoreEl =
    document.getElementById("scoreLevel82");

  let score = 0;


  /* SCORE SCREEN 6 */

  const scoreLevel82Screen6 =
    document.getElementById("scoreLevel82Screen6");


  /* =========================
     LAPTOP 1
  ========================= */

  const laptop1 =
    document.getElementById("laptop1");

  const powerLaptop1 =
    document.getElementById("powerLaptop1");

  let laptop1On = false;


  /* =========================
     LAPTOP 2
  ========================= */

  const laptop2 =
    document.getElementById("laptop2");

  const powerLaptop2 =
    document.getElementById("powerLaptop2");

  let laptop2On = false;


  /* =========================
     LAMPU 1
  ========================= */

  const lampu1 =
    document.getElementById("lampu1");

  const powerLampu1 =
    document.getElementById("powerLampu1");

  let lampu1On = false;


  /* =========================
     LAMPU 2
  ========================= */

  const lampu2 =
    document.getElementById("lampu2");

  const powerLampu2 =
    document.getElementById("powerLampu2");

  let lampu2On = false;


  /* =========================
     KONDISI AWAL
  ========================= */

  laptop1.style.display = "none";
  laptop2.style.display = "none";

  lampu1.style.display = "none";
  lampu2.style.display = "none";


  /* =========================
     UPDATE SCORE
  ========================= */

  function updateScore(){

    let aktif = 0;

    if(laptop1On) aktif++;
    if(laptop2On) aktif++;

    if(lampu1On) aktif++;
    if(lampu2On) aktif++;

    score =
      Math.round((aktif / 4) * 100);

    scoreEl.innerText = score;


    /* SCORE SCREEN 6 */

    if(scoreLevel82Screen6){

      scoreLevel82Screen6.innerText = score;
    }
  }


  /* =========================
     TOGGLE LAPTOP 1
  ========================= */

  powerLaptop1.addEventListener("click", ()=>{

    laptop1On = !laptop1On;

    laptop1.style.display =
      laptop1On ? "block" : "none";

    updateScore();
  });


  /* =========================
     TOGGLE LAPTOP 2
  ========================= */

  powerLaptop2.addEventListener("click", ()=>{

    laptop2On = !laptop2On;

    laptop2.style.display =
      laptop2On ? "block" : "none";

    updateScore();
  });


  /* =========================
     TOGGLE LAMPU 1
  ========================= */

  powerLampu1.addEventListener("click", ()=>{

    lampu1On = !lampu1On;

    lampu1.style.display =
      lampu1On ? "block" : "none";

    updateScore();
  });


  /* =========================
     TOGGLE LAMPU 2
  ========================= */

  powerLampu2.addEventListener("click", ()=>{

    lampu2On = !lampu2On;

    lampu2.style.display =
      lampu2On ? "block" : "none";

    updateScore();
  });


  /* =========================
     RESET
  ========================= */

  document
    .querySelector("#screen82 .reset-level82")
    .addEventListener("click", reset82);


  function reset82(){

    /* KONDISI AWAL */

    laptop1On = false;
    laptop2On = false;

    lampu1On = false;
    lampu2On = false;


    /* SEMBUNYIKAN SEMUA */

    laptop1.style.display = "none";
    laptop2.style.display = "none";

    lampu1.style.display = "none";
    lampu2.style.display = "none";


    /* RESET SCORE */

    updateScore();
  }


  /* =========================
     SCORE AWAL
  ========================= */

  updateScore();

})();
