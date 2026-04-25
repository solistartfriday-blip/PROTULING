function klikTombol(nama) {
  if (nama === "PROTUIPA") {
    alert("Masuk ke permainan PROTUIPA");
  }

  else if (nama === "PROTULING") {
    alert("Masuk ke permainan PROTULING");
  }

  else if (nama === "NAMA") {
    let user = prompt("Masukkan nama:");
    if (user) {
      alert("Halo, " + user);
    }
  }

  else if (nama === "KELUAR") {
    alert("Keluar dari aplikasi");
  }
}
