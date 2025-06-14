import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

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
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        {/* Cột 2: SĐT và Email */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-white">
            <FaPhoneAlt className="text-lg" />
            <span className="text-base md:text-lg font-medium drop-shadow">
              0901 234 567
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaEnvelope className="text-lg" />
            <a
              href="mailto:tranmaxxxx@gmail.com"
              className="underline hover:text-blue-200 transition text-base md:text-lg font-medium"
            >
              tranmaxxxx@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-white mt-1 text-center md:text-left">
            <FaMapMarkerAlt className="text-lg flex-shrink-0" />
            <span className="text-base md:text-lg font-medium drop-shadow">
              Trường Cao đẳng GTVT Trung Ương 3,
              <br />
              Quận 12, Việt Nam
            </span>
          </div>
        </div>
        {/* Cột 3: Map */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="w-56 h-32 rounded-lg overflow-hidden shadow border border-blue-300 flex-shrink-0">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Trường+Cao+đẳng+GTVT+Trung+Ương+3,+Quận+12,+Việt+Nam&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm py-3 bg-blue-900 bg-opacity-30 border-t border-blue-300">
        © {new Date().getFullYear()} Thầy Việt dạy lái xe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
