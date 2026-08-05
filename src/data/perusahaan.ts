import type { LucideIcon } from "lucide-react";
import { Building2, ClipboardCheck, FileCheck2, HardHat } from "lucide-react";

import proyekGedung from "@/assets/proyek-gedung.jpg";
import proyekJalan from "@/assets/proyek-jalan.jpg";
import proyekJembatan from "@/assets/proyek-jembatan.jpg";
import proyekIrigasi from "@/assets/proyek-irigasi.jpg";
import proyekRenovasi from "@/assets/proyek-renovasi.jpg";
import proyekBendungan from "@/assets/proyek-bendungan.jpg";
import layananPerencanaan from "@/assets/layanan-perencanaan.jpg";
import layananPengawasan from "@/assets/layanan-pengawasan.jpg";
import layananPerizinan from "@/assets/layanan-perizinan.jpg";
import layananKonstruksi from "@/assets/layanan-konstruksi.jpg";

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

export const founder = {
  nama: "H. Ahmad Nasrullah, S.T.",
  jabatan: "Founder & Direktur",
  teks: "Berpengalaman lebih dari 15 tahun di bidang teknik sipil, mulai dari perencanaan struktur, pengawasan proyek infrastruktur, hingga pelaksanaan konstruksi bangunan pemerintah dan swasta. Beliau mendirikan CV. AN NASR KONSULTAN dengan satu prinsip sederhana: setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.",
};

export const klien = [
  "Pemkab Jombang",
  "Dinas PUPR",
  "Desa Bedahlawak",
  "Desa Candi Mulyo",
  "Kec. Tembelang",
  "Kec. Ploso",
  "Kec. Megaluh",
  "Yayasan Al Hikmah",
  "SMK Nusantara",
  "MI Al Falah",
  "Ponpes Darul Ulum",
  "CV. Mitra Karya",
  "CV. Bumi Persada",
  "PT. Sarana Bangun",
  "PT. Tirta Mandiri",
  "Koperasi Sejahtera",
  "RSU Amanah",
  "BUMDes Makmur",
  "PDAM Jombang",
  "Perumda Tirta",
];

export const kotaProyek = [
  { nama: "Jombang", atas: "70%", kiri: "40%" },
  { nama: "Mojokerto", atas: "71%", kiri: "43%" },
  { nama: "Kediri", atas: "74%", kiri: "39%" },
  { nama: "Nganjuk", atas: "68%", kiri: "37%" },
  { nama: "Surabaya", atas: "66%", kiri: "45%" },
  { nama: "Lamongan", atas: "63%", kiri: "42%" },
  { nama: "Malang", atas: "76%", kiri: "42%" },
  { nama: "Semarang", atas: "66%", kiri: "31%" },
  { nama: "Bandung", atas: "70%", kiri: "22%" },
  { nama: "Balikpapan", atas: "36%", kiri: "58%" },
  { nama: "Makassar", atas: "52%", kiri: "68%" },
  { nama: "Denpasar", atas: "74%", kiri: "55%" },
];

export const sesiMingguan = [
  { minggu: "M1", sesi: 210 },
  { minggu: "M2", sesi: 268 },
  { minggu: "M3", sesi: 245 },
  { minggu: "M4", sesi: 312 },
  { minggu: "M5", sesi: 356 },
  { minggu: "M6", sesi: 330 },
  { minggu: "M7", sesi: 398 },
  { minggu: "M8", sesi: 441 },
];

export type Layanan = {
  slug: string;
  nama: string;
  ikon: LucideIcon;
  ringkas: string;
  detail: string[];
  gambar: string;
  alt: string;
  galeri: { src: string; alt: string }[];
  deskripsi: string;
  manfaat: string[];
};

export const layanan: Layanan[] = [
  {
    slug: "perencanaan",
    nama: "Jasa Perencanaan",
    ikon: Building2,
    ringkas:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    gambar: layananPerencanaan,
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    deskripsi:
      "Layanan perencanaan kami mencakup survey awal, perhitungan struktur, penyusunan gambar kerja, rencana kerja dan syarat (RKS), hingga rencana anggaran biaya (RAB). Seluruh desain disusun mengikuti SNI dan kebutuhan nyata di lapangan agar pelaksanaan berjalan tanpa perubahan besar di tengah jalan.",
    manfaat: [
      "Anggaran proyek terukur sejak awal",
      "Gambar kerja siap dipakai pelaksana",
      "Desain aman dan sesuai standar SNI",
      "Meminimalkan pekerjaan tambah kurang",
    ],
    galeri: [
      { src: proyekGedung, alt: "Perencanaan bangunan gedung bertingkat" },
      { src: proyekJembatan, alt: "Perencanaan struktur jembatan penghubung desa" },
      { src: proyekBendungan, alt: "Perencanaan bangunan sumber daya air" },
    ],
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
    gambar: layananPengawasan,
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    deskripsi:
      "Kami menempatkan tenaga pengawas yang memeriksa mutu bahan, volume pekerjaan, serta kesesuaian pelaksanaan dengan gambar rencana. Laporan harian, mingguan, dan dokumentasi visual disampaikan secara berkala kepada pemberi tugas.",
    manfaat: [
      "Mutu pekerjaan terkontrol setiap tahap",
      "Progres proyek terdokumentasi rapi",
      "Penyimpangan cepat terdeteksi",
      "Pembayaran termin sesuai realisasi",
    ],
    galeri: [
      { src: proyekJalan, alt: "Pengawasan pekerjaan jalan beton" },
      { src: proyekIrigasi, alt: "Pengawasan rehabilitasi saluran irigasi" },
      { src: proyekGedung, alt: "Pengawasan pembangunan gedung" },
    ],
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
    gambar: layananPerizinan,
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    deskripsi:
      "Pengurusan dokumen perizinan bangunan kami dampingi dari penyiapan berkas teknis, pengajuan melalui sistem, hingga terbitnya persetujuan. Anda tidak perlu bolak-balik mengurus administrasi sendiri.",
    manfaat: [
      "Bangunan legal dan siap difungsikan",
      "Berkas teknis disiapkan lengkap",
      "Proses pengajuan dipantau sampai terbit",
      "Menghindari risiko sanksi administratif",
    ],
    galeri: [
      { src: proyekGedung, alt: "Dokumen PBG untuk bangunan gedung" },
      { src: proyekRenovasi, alt: "Pengurusan SLF bangunan rumah tinggal" },
    ],
    detail: ["Persetujuan Bangunan Gedung (PBG)", "Sertifikat Laik Fungsi (SLF)"],
  },
  {
    slug: "konstruksi",
    nama: "Jasa Konstruksi",
    ikon: HardHat,
    ringkas:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    gambar: layananKonstruksi,
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    deskripsi:
      "Pelaksanaan pekerjaan dilakukan tim lapangan berpengalaman dengan metode kerja yang aman, jadwal yang realistis, serta material yang sesuai spesifikasi. Progres dilaporkan terbuka sampai serah terima pekerjaan.",
    manfaat: [
      "Satu koordinasi dari desain ke pelaksanaan",
      "Jadwal kerja terkendali",
      "Material sesuai spesifikasi teknis",
      "Garansi masa pemeliharaan pekerjaan",
    ],
    galeri: [
      { src: proyekRenovasi, alt: "Renovasi rumah tinggal dua lantai" },
      { src: proyekJalan, alt: "Pekerjaan jalan beton desa" },
      { src: proyekJembatan, alt: "Pembangunan jembatan penghubung" },
    ],
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
] as const;