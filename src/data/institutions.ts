import type { Institution } from "../types/portfolio";

export const institutions: Institution[] = [
  {
    id: "lptk",
    kind: "lptk",
    name: "Universitas Nusantara PGRI Kediri",
    description: "Konteks perkuliahan dan ruang untuk menata dokumen pendukung program PPG.",
    address: "Jl. Ahmad Dahlan No. 76, Mojoroto, Kota Kediri, Jawa Timur 64112",
    image: "/images/UNP.jpg",
    url: "https://www.google.com/maps/search/?api=1&query=Universitas+Nusantara+PGRI+Kediri",
  },
  {
    id: "ppl",
    kind: "ppl",
    name: "Sekolah Dasar Negeri 1 Setonopande",
    description: "Konteks sekolah mitra untuk menata dokumentasi PPL dan LK pembelajaran.",
    address: "Jl. Sam Ratulangi Gg. II No. 1, Setono Pande, Kota Kediri, Jawa Timur 64126",
    image: "/images/ppl-placeholder.png",
    url: "https://www.google.com/maps/search/?api=1&query=-7.8242%2C112.0153",
  },
];
