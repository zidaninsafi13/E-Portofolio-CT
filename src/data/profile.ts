import type { PortfolioProfile } from "../types/portfolio";

export const profile: PortfolioProfile = {
  name: "Zidan Insafi",
  program: "PPG",
  status: "Mahasiswa PPG",
  field: "PJOK / Olahraga",
  course: "Computational Thinking",
  year: 2026,
  photo: new URL("../../assets/profile/profil-2.jpeg", import.meta.url).href,
  introduction: "Enam topik pembelajaran dan rangkaian LK dalam satu perjalanan Computational Thinking.",
  quote: "Belajar terarah, bertumbuh melalui praktik, dan terdokumentasi dalam satu ruang.",
  sectionNote: "Identitas dan konteks belajar yang menjadi dasar untuk membaca setiap bagian portofolio.",
  description: "Area ini merangkum identitas pemilik portofolio dan menjadi tempat untuk menambahkan dokumentasi pembelajaran.",
};
