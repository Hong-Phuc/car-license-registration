import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 bg-opacity-90 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Cột 1: Logo, tên, mạng xã hội */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/icon/logoweb.ico"
              className="h-12 w-12"
              alt="Logo"
            />
            <span className="text-2xl font-bold text-white drop-shadow">
              Thầy Việt dạy lái xe
            </span>
          </div>
          <div className="flex gap-5 mt-2">
            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-400/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-400/50 hover:bg-gradient-to-tr hover:from-blue-400/10 hover:to-black/40 group relative overflow-hidden"
              aria-label="Facebook"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>
              <div className="relative z-10">
                <FaFacebook className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-pink-400/20 hover:scale-110 hover:-rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-pink-400/50 hover:bg-gradient-to-tr hover:from-pink-400/10 hover:to-black/40 group relative overflow-hidden"
              aria-label="TikTok"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>
              <div className="relative z-10">
                <FaTiktok className="w-7 h-7 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
        {/* Cột 2: Thông tin liên hệ */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-2">
              <MdPhone className="text-green-600 w-6 h-6" />
            </span>
            <span className="text-lg font-semibold text-white">
              0901 234 567
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-2">
              <MdEmail className="text-blue-600 w-6 h-6" />
            </span>
            <span className="text-lg font-semibold text-white">
              tranmaxxxx@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-2">
              <MdLocationOn className="text-red-600 w-6 h-6" />
            </span>
            <span className="text-lg font-semibold text-white">
              Trường Cao đẳng GTVT Trung Ương 3, Quận 12, Việt Nam
            </span>
          </div>
        </div>
        {/* Cột 3: Bản đồ hoặc nội dung khác giữ nguyên */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.993014354348!2d106.6521233153345!3d10.76291369233159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edb2b8e8c6d%3A0x6e7e0e92ce40938b!2zVHLGsOG7nW5nIENhbyDEkOG6oW5nIEdUVlQgVHJ1bmcg4buRYyAz!5e0!3m2!1svi!2s!4v1688456789012!5m2!1svi!2s"
            width="250"
            height="150"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-white text-sm py-3 bg-blue-900 bg-opacity-30 border-t border-blue-300">
        © {new Date().getFullYear()} Thầy Việt dạy lái xe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
