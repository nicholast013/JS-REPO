let nomor = 0
const lirik = [
  "Mars Abdi Siswa:",
  "Kita Warga Abdi Siswa",
  "Maju Bersama",
  "Bergerak Bersatu Padu",
  "Membangun Bangsa",
  "Tuk Mencapai Cita-Cita",
  "Cita Nan Mulya",
  "Indonesia Sejahtera",
  "Dambaan Kita",
  "Scientia.. Scientia..",
  "Dikaulah Lambangku",
  "Perisai Cita-Citaku",
  "Semoga Tuhan Bersamaku",
  "Scientia.. Scientia..",
  "Dikaulah Lambangku",
  "Perisai Cita-Citaku",
  "Semoga Tuhan Bersamaku"
]
  
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function lirikfunction() {
  if (nomor == lirik.length) {
    nomor = 0;
  }
  document.getElementById("lirik").textContent = lirik[nomor];
  nomor += 1;
}

window.addEventListener("load", (event) => {
  setInterval(lirikfunction, 5000);
});
