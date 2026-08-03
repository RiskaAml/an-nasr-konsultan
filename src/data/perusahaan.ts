import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  Award,
  Users,
  ShieldCheck,
  MessagesSquare,
  Clock,
  HeartHandshake,
} from "lucide-react";

import proyekGedung from "@/assets/proyek-gedung.jpg";
import proyekJalan from "@/assets/proyek-jalan.jpg";
import proyekJembatan from "@/assets/proyek-jembatan.jpg";
import proyekIrigasi from "@/assets/proyek-irigasi.jpg";
import proyekRenovasi from "@/assets/proyek-renovasi.jpg";
import proyekBendungan from "@/assets/proyek-bendungan.jpg";

export const perusahaan = {
  nama: "CV. AN NASR KONSULTAN",
  singkat:
    "Penyedia jasa konsultansi teknik sipil, perencanaan, pengawasan, perizinan, dan konstruksi di Kabupaten Jombang, Jawa Timur.",
  telepon: "+62 812-0000-0000",
  whatsapp: "6281200000000",
  email: "annasrkonsultan@email.com",
  jamOperasional: "Senin – Sabtu, 08.00 – 17.00 WIB",
  domisili:
    "Jl. Raya Tembelang RT.001 RW.003, Desa Bedahlawak, Kecamatan Tembelang, Kabupaten Jombang",
  kantor: "Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang",
};

export const statistik = [
  { angka: 150, suffix: "+", label: "Proyek Ditangani" },
  { angka: 100, suffix: "+", label: "Klien" },
  { angka: 10, suffix: "+", label: "Bidang Layanan" },
  { angka: 100, suffix: "%", label: "Komitmen terhadap Kualitas" },
];

export type Layanan = {
  slug: string;
  nama: string;
  ikon: LucideIcon;
  ringkas: string;
  detail: string[];
};

export const layanan: Layanan[] = [
  {
    slug: "perencanaan",
    nama: "Jasa Perencanaan",
    ikon: Building2,
    ringkas:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    detail: [
      "Perencanaan Bangunan Gedung",
      "Perencanaan Jalan",
      "Perencanaan Jembatan",
      "Perencanaan Sumber Daya Air",
      "Saluran Irigasi",
      "Penahan Tanah",
      "Bendungan",
    ],
  },
  {
    slug: "pengawasan",
    nama: "Jasa Pengawasan",
    ikon: ClipboardCheck,
    ringkas:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    detail: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
      "Pengawasan Irigasi",
      "Pengawasan Penahan Tanah",
      "Pengawasan Bendungan",
    ],
  },
  {
    slug: "perizinan",
    nama: "Jasa Perizinan",
    ikon: FileCheck2,
    ringkas:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    detail: ["Persetujuan Bangunan Gedung (PBG)", "Sertifikat Laik Fungsi (SLF)"],
  },
  {
    slug: "konstruksi",
    nama: "Jasa Konstruksi",
    ikon: HardHat,
    ringkas:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    detail: [
      "Pembangunan Rumah",
      "Renovasi Rumah",
      "Gedung",
      "Kantor",
      "Sekolah",
      "Jalan Aspal",
      "Jalan Beton",
      "Jembatan",
      "Saluran Irigasi",
      "Penahan Tanah",
      "Bendungan",
    ],
  },
];

export const keunggulan = [
  {
    ikon: Award,
    judul: "Profesional",
    teks: "Setiap pekerjaan ditangani dengan prosedur teknis yang tertib dan dokumentasi yang rapi.",
  },
  {
    ikon: Users,
    judul: "Tim Berpengalaman",
    teks: "Didukung tenaga ahli teknik sipil dan arsitektur yang terbiasa menangani proyek pemerintah maupun swasta.",
  },
  {
    ikon: ShieldCheck,
    judul: "Standar Mutu",
    teks: "Perencanaan dan pelaksanaan mengacu pada SNI serta spesifikasi teknis yang dipersyaratkan.",
  },
  {
    ikon: MessagesSquare,
    judul: "Komunikasi Transparan",
    teks: "Progres, kendala, dan kebutuhan biaya dilaporkan secara terbuka kepada pemberi tugas.",
  },
  {
    ikon: Clock,
    judul: "Ketepatan Waktu",
    teks: "Jadwal kerja disusun realistis dan dikendalikan agar pekerjaan selesai sesuai kontrak.",
  },
  {
    ikon: HeartHandshake,
    judul: "Pelayanan Terbaik",
    teks: "Konsultasi awal hingga serah terima pekerjaan didampingi tanpa biaya tersembunyi.",
  },
];

export const prosesKerja = [
  {
    judul: "Konsultasi",
    teks: "Diskusi awal untuk memahami kebutuhan, lingkup, serta anggaran proyek Anda.",
  },
  {
    judul: "Survey Lapangan",
    teks: "Pengukuran, pengambilan data topografi, dan pemeriksaan kondisi eksisting lokasi.",
  },
  {
    judul: "Perencanaan",
    teks: "Penyusunan desain teknis, perhitungan struktur, dan rencana anggaran biaya.",
  },
  {
    judul: "Penyusunan Dokumen",
    teks: "Gambar kerja, RKS, RAB, serta dokumen perizinan disiapkan secara lengkap.",
  },
  {
    judul: "Pelaksanaan",
    teks: "Pekerjaan konstruksi dijalankan sesuai metode kerja dan jadwal yang disepakati.",
  },
  {
    judul: "Pengawasan",
    teks: "Pengendalian mutu bahan, volume, dan progres pekerjaan di lapangan setiap tahap.",
  },
  {
    judul: "Serah Terima",
    teks: "Pemeriksaan akhir, penyerahan dokumen as built, dan serah terima pekerjaan.",
  },
];

export const kategoriPortfolio = [
  "Semua",
  "Bangunan",
  "Jalan",
  "Jembatan",
  "Irigasi",
  "Gedung",
  "Renovasi",
];

export const portfolio = [
  {
    nama: "Pembangunan Gedung Serbaguna",
    lokasi: "Kecamatan Jombang, Jombang",
    kategori: "Gedung",
    gambar: proyekGedung,
    tinggi: "tall",
  },
  {
    nama: "Peningkatan Jalan Beton Desa",
    lokasi: "Kecamatan Tembelang, Jombang",
    kategori: "Jalan",
    gambar: proyekJalan,
    tinggi: "short",
  },
  {
    nama: "Pembangunan Jembatan Penghubung Desa",
    lokasi: "Kecamatan Ploso, Jombang",
    kategori: "Jembatan",
    gambar: proyekJembatan,
    tinggi: "tall",
  },
  {
    nama: "Rehabilitasi Saluran Irigasi Primer",
    lokasi: "Kecamatan Megaluh, Jombang",
    kategori: "Irigasi",
    gambar: proyekIrigasi,
    tinggi: "short",
  },
  {
    nama: "Renovasi Rumah Tinggal Dua Lantai",
    lokasi: "Candi Mulyo, Jombang",
    kategori: "Renovasi",
    gambar: proyekRenovasi,
    tinggi: "short",
  },
  {
    nama: "Pengawasan Bangunan Penahan Air",
    lokasi: "Kabupaten Jombang",
    kategori: "Bangunan",
    gambar: proyekBendungan,
    tinggi: "short",
  },
];

export const testimoni = [
  {
    nama: "Bapak Ahmad Fauzi",
    instansi: "Pemerintah Desa Bedahlawak",
    inisial: "AF",
    rating: 5,
    ulasan:
      "Perencanaan jalan desa kami dikerjakan sangat rapi. Dokumen lengkap, pengawasan di lapangan juga rutin sehingga hasil pekerjaan sesuai dengan gambar rencana.",
  },
  {
    nama: "Ibu Sri Wahyuni",
    instansi: "Yayasan Pendidikan Al Hikmah",
    inisial: "SW",
    rating: 5,
    ulasan:
      "Proses pengurusan PBG gedung sekolah kami didampingi sampai terbit. Tim menjelaskan setiap tahapan dengan sabar dan komunikatif.",
  },
  {
    nama: "Bapak Hendra Kusuma",
    instansi: "CV. Mitra Karya Sejahtera",
    inisial: "HK",
    rating: 5,
    ulasan:
      "Pengawasan pekerjaan jembatan berjalan disiplin. Laporan mingguan selalu tepat waktu dan mutu pekerjaan benar-benar dikontrol.",
  },
  {
    nama: "Bapak Muhammad Ridwan",
    instansi: "Pemilik Proyek Rumah Tinggal",
    inisial: "MR",
    rating: 5,
    ulasan:
      "Renovasi rumah selesai sesuai jadwal dengan anggaran yang transparan. Sangat membantu dari tahap desain sampai serah terima.",
  },
];

export const faq = [
  {
    tanya: "Apa saja layanan yang tersedia?",
    jawab:
      "Kami melayani jasa perencanaan, pengawasan, perizinan (PBG dan SLF), serta pelaksanaan konstruksi untuk bangunan gedung, jalan, jembatan, irigasi, penahan tanah, dan bendungan.",
  },
  {
    tanya: "Apakah melayani proyek pemerintah?",
    jawab:
      "Ya. Kami berpengalaman menangani pekerjaan pemerintah desa, kecamatan, maupun dinas terkait dengan kelengkapan administrasi dan dokumen teknis sesuai ketentuan.",
  },
  {
    tanya: "Apakah melayani proyek swasta?",
    jawab:
      "Tentu. Proyek swasta seperti rumah tinggal, ruko, kantor, sekolah, dan bangunan usaha lainnya kami tangani mulai dari perencanaan hingga pelaksanaan.",
  },
  {
    tanya: "Bagaimana proses konsultasi?",
    jawab:
      "Konsultasi awal dapat dilakukan melalui WhatsApp, telepon, atau kunjungan ke kantor kami. Setelah kebutuhan dipahami, kami lakukan survey lapangan dan menyusun penawaran teknis serta biaya.",
  },
  {
    tanya: "Apakah melayani luar Jombang?",
    jawab:
      "Ya. Selain Kabupaten Jombang, kami juga melayani wilayah sekitar seperti Mojokerto, Kediri, Nganjuk, Lamongan, dan kota lain di Jawa Timur.",
  },
];

export const navigasi = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/tentang" },
  { label: "Layanan", to: "/layanan" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Proses Kerja", to: "/proses-kerja" },
  { label: "FAQ", to: "/faq" },
  { label: "Kontak", to: "/kontak" },
];