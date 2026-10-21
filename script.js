// script.js 
document.getElementById("pesan").textContent = "Hello World"; 
console.log("Hello World"); 

const namaPengguna = prompt("Masukkan nama Anda:", ""); 
if (namaPengguna && namaPengguna.trim() !== "") { 
    alert("Halo, " + namaPengguna + "!"); 
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + "."; 
} else { 
    alert("Nama belum diisi."); 
}

function operasiDasar(a, b) { 
    console.log("Penjumlahan:", a + b); 
    console.log("Pengurangan:", a - b); 
    console.log("Perkalian:", a * b); 
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol"); 
    console.log("Modulus:", a % b); 
} 

const input1 = prompt("Masukkan angka pertama:");
const input2 = prompt("Masukkan angka kedua:");

const angka1 = Number(input1);
const angka2 = Number(input2);

operasiDasar(angka1, angka2);

const inputNilai = prompt("Masukkan nilai (0–100):"); 
const nilaiMahasiswa = Number(inputNilai); 
 
if (inputNilai === null || inputNilai.trim() === "" || 
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) { 
  alert("Input nilai tidak valid."); 
} else if (nilaiMahasiswa >= 60) { 
  alert("Lulus"); 
} else { 
  alert("Belum lulus"); 
}

const inputPilihan = prompt("Masukkan angka 1–5:"); 
switch (inputPilihan) { 
  case "1": alert("Bilangan satu"); break; 
  case "2": alert("Bilangan dua"); break; 
  case "3": alert("Bilangan tiga"); break; 
  case "4": alert("Bilangan empat"); break; 
  case "5": alert("Bilangan lima"); break; 
  default: alert("Pilihan tidak tersedia"); 
}

function cekBilangan() { 
  const input = document.getElementById("bilangan").value; 
  const angka = Number(input); 
  const hasil = document.getElementById("hasilBilangan"); 
 
  if (input.trim() === "" || !Number.isInteger(angka)) { 
    hasil.textContent = "Masukkan bilangan bulat yang valid."; 
  } else if (angka % 2 === 0) { 
    hasil.textContent = "Bilangan genap"; 
  } else { 
    hasil.textContent = "Bilangan ganjil"; 
  } 
} 

function ubahWarnaLatar(warna) { 
    document.body.style.backgroundColor = warna; 
}

function hitungTotal() { 
    let total = 0; 
    daftarMenu.forEach((item) => { 
        if (item.checked) total += Number(item.value); 
    }); 
    document.getElementById("total").textContent = total.toLocaleString("id-ID"); 
} 

const daftarMenu = document.querySelectorAll(".menu"); 
daftarMenu.forEach((item) => { 
    item.addEventListener("change", hitungTotal); 
}); 

console.log("--- Tabel Perkalian 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

// pengujian:
console.log(cekGenap(4)); 
console.log(cekGenap(7)); 

function validasiForm() {
    const input = document.getElementById("kolomInput").value;
    const pesan = document.getElementById("pesanStatus");

    if (input.trim() === "") {
        pesan.textContent = "Kolom tidak boleh kosong!";
        pesan.style.color = "red";
        return false;
    }

    pesan.textContent = "Data berhasil dikirim.";
    pesan.style.color = "green";
    return true;
}

function toggleElemen() {
    const elemen = document.getElementById("teksInfo");
    if (elemen.style.display === "none") {
        elemen.style.display = "block";
    } else {
        elemen.style.display = "none";
    }
}

// MINI PROJECT

function hitungNilaiAkhir(tugas, uts, uas) { 
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40); 
} 

function tentukanPredikat(nilai) { 
    if (nilai >= 85) return "A"; 
    if (nilai >= 75) return "B"; 
    if (nilai >= 60) return "C"; 
    if (nilai >= 50) return "D"; 
    return "E"; 
} 

// Fungsi Validasi Rentang 0 - 100
function isValidNilai(nilai) {
    return !isNaN(nilai) && nilai >= 0 && nilai <= 100;
}


// FUNGSI TAMPILAN & PEMROSESAN DOM 

function prosesHitung() {
    // Mengambil nilai dari element input HTML (asumsi ID: tugas, uts, uas)
    const valTugas = parseFloat(document.getElementById("tugas").value);
    const valUts = parseFloat(document.getElementById("uts").value);
    const valUas = parseFloat(document.getElementById("uas").value);
    
    const divHasil = document.getElementById("hasil");

    // Validasi Rentang Nilai
    if (!isValidNilai(valTugas) || !isValidNilai(valUts) || !isValidNilai(valUas)) {
        divHasil.innerHTML = "<p style='color:red;'>Error: Semua nilai harus diisi angka rentang 0 - 100!</p>";
        return;
    }

    // Hitung menggunakan fungsi logika
    const nilaiAkhir = hitungNilaiAkhir(valTugas, valUts, valUas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    // Tampilkan hasil langsung ke dalam elemen HTML (bukan console)
    divHasil.innerHTML = `
        <h3>Hasil Penilaian:</h3>
        <p>Nilai Akhir: <b>${nilaiAkhir.toFixed(2)}</b></p>
        <p>Predikat: <b>${predikat}</b></p>
        <p>Status Kelulusan: <b>${status}</b></p>
    `;
}


// PENGUJIAN 3 SKENARIO NILAI BERBEDA 

function ujiSkenario(tugas, uts, uas) {
    console.log(`\n--- Uji Skenario (${tugas}, ${uts}, ${uas}) ---`);
    
    if (!isValidNilai(tugas) || !isValidNilai(uts) || !isValidNilai(uas)) {
        console.log("Error: Nilai di luar rentang 0-100");
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    console.log("Nilai Akhir :", akhir.toFixed(2));
    console.log("Predikat    :", tentukanPredikat(akhir));
    console.log("Status      :", akhir >= 60 ? "Lulus" : "Belum lulus");
}

// Eksekusi Pengujian Skenario di Console
ujiSkenario(85, 78, 88); 
ujiSkenario(65, 60, 55);
ujiSkenario(40, 50, 30); 