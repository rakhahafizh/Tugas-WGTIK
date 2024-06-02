function raziaGanjilGenap(tanggal, dataKendaraan) {
  function adalahGanjil(angka) {
    return angka % 2 !== 0;
  }

  function ambilDigitTerakhir(plat) {
    let angka = '';
    for (let i = 0; i < plat.length; i++) {
      if (!isNaN(plat[i]) && plat[i] !== ' ') {
        angka += plat[i];
      }
    }
    if (angka) {
      return parseInt(angka[angka.length - 1], 10);
    }
    return null;
  }

  const ruteTerbatas = [
    'Gajah Mada',
    'Hayam Wuruk',
    'Sisingamangaraja',
    'Panglima Polim',
    'Fatmawati',
    'Tomang Raya'
  ];

  const hasil = [];

  for (let i = 0; i < dataKendaraan.length; i++) {
    const kendaraan = dataKendaraan[i];
    if (kendaraan.type === 'Mobil') {
      const digitTerakhir = ambilDigitTerakhir(kendaraan.plat);
      const tanggalGanjil = adalahGanjil(tanggal);
      const platGanjil = adalahGanjil(digitTerakhir);
      let jumlahPelanggaran = 0;
      
      for (let j = 0; j < kendaraan.rute.length; j++) {
        const rute = kendaraan.rute[j];
        for (let k = 0; k < ruteTerbatas.length; k++) {
          if (rute === ruteTerbatas[k]) {
            if ((tanggalGanjil && !platGanjil) || (!tanggalGanjil && platGanjil)) {
              jumlahPelanggaran++;
            }
          }
        }
      }

      if (jumlahPelanggaran > 0) {
        hasil.push({ name: kendaraan.name, tilang: jumlahPelanggaran });
      }
    }
  }

  return hasil;
}

console.log(
  raziaGanjilGenap(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang"
      ]
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada"
      ]
    }
  ])
);
