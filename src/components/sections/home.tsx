"use client";
import Image from 'next/image'; // Direkomendasikan untuk optimasi gambar

export default function HomeSection() {
  return (
    // 1. Menambahkan warna latar belakang utama
    <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0f172a] p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl">
        
        {/* Kiri - Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* 2. Mengubah warna nama menjadi gradien biru yang serasi */}
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            // Mengganti inline style dengan kelas Tailwind untuk gradien
            className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#67e8f9]"
          >
            Hi, I'm Fiki!
          </h1>

          {/* 3. Mengubah warna deskripsi menjadi lebih lembut */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            // Mengganti inline style dengan kelas text-[#cbd5e1] (slate-300)
            className="text-base sm:text-lg lg:text-xl xl:text-xl mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-[#cbd5e1]"
          >
            I am an undergraduate student in Informatics Engineering at Universitas Brawijaya with a deep interest in AI/ML Engineer, Data Science and Full Stack Enthusiast
          </p>

          {/* Social Media Icons - TIDAK DIUBAH SESUAI PERMINTAAN */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
          >
            {/* Ikon LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/rifqicahyono" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-blue-500 cursor-pointer group-hover:text-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-full h-full"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </div>
            </a>
            {/* Ikon GitHub */}
            <a 
              href="https://github.com/RifqiCah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white cursor-pointer group-hover:text-gray-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-full h-full"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </div>
            </a>
            {/* Ikon Instagram */}
            <a 
              href="https://www.instagram.com/rif_qifiki/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-pink-500 cursor-pointer group-hover:text-pink-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-full h-full"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </div>
            </a>
            {/* Ikon Email */}
            <a 
              href="mailto:namakamu@gmail.com"
              className="group transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-10 text-white cursor-pointer group-hover:text-gray-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-full h-full"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
              </div>
            </a>
          </div>
        </div>

        {/* Kanan - Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
          <div 
            className="relative group"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            {/* 4. Menggunakan <Image> dari next/image untuk optimasi */}
            <Image
              src="/images/home/home-3.jpg"
              alt="Foto Fiki"
              width={320} // Lebar asli gambar atau representatif
              height={320} // Tinggi asli gambar atau representatif
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full shadow-lg shadow-blue-500 transition-transform duration-300 group-hover:scale-105"
              priority // Tambahkan ini agar gambar utama dimuat lebih dulu
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

      </div>
    </section>
  );
}