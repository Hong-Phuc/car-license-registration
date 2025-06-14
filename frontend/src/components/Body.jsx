import React from "react";
import RegisterFrorm from "./RegisterForm";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const CheckItem = ({ icon, title, children }) => (
  <div className="grid grid-cols-[40px_1fr] gap-3 py-4 bg-white bg-opacity-80 rounded-lg shadow mb-4">
    <div className="flex items-start justify-center pt-1">{icon}</div>
    <div>
      <div className="font-semibold text-blue-900 text-lg mb-1">{title}</div>
      {children}
    </div>
  </div>
);

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-8 pb-4 z-10">
        <div className="flex items-center gap-4">
          <img
            src="src/assets/icon/logoweb.ico"
            alt="Logo"
            className="h-18 mr-10 mb-2 w-12 md:w-16"
          />
          <h1 className="text-2xl md:text-[40px] text-white font-bold text-center drop-shadow-lg font-extrabold">
            ĐÀO TẠO LÁI XE Ô TÔ THẦY VIỆT
          </h1>
        </div>
        <p className="text-white text-base mt-1 text-[16px] md:text-[20px] text-center">
          Hơn 10 năm công tác giảng dạy kèm cặp học viên kinh nghiệm tại Trường
          Cao đẳng GTVT TWIII
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center w-[98%] sm:w-[95%] md:w-[90%] max-w-8xl mt-8">
        {/* Banner */}
        <div className="relative w-full mb-8">
          <img
            src="src/assets/img/carImg.avif"
            alt="Car"
            className="w-full drop-shadow-2xl rounded-2xl object-cover"
            style={{ zIndex: 2, minHeight: 500, maxHeight: 700 }}
          />
          <div className="absolute top-6 left-4 sm:top-1/4 sm:left-10 rounded-xl p-4 sm:p-8 bg-black/30 max-w-full sm:max-w-2xl w-[90%] sm:w-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 text-white drop-shadow-lg">
              Thầy Trần Quốc Việt
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white drop-shadow">
              Luôn lấy chữ tín làm kim chỉ nam, chất lượng đi kèm hiệu quả hàng
              đầu
            </p>
            {/* Nút đăng ký và số điện thoại */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <a
                href="#register-form"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition hover:from-indigo-600 hover:to-blue-600 hover:scale-105 cursor-pointer text-lg"
              >
                Đăng ký ngay
              </a>
              <span className="text-white text-base">
                Hoặc liên hệ{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 font-semibold hover:text-blue-200 transition"
                >
                  093 717 18 07
                </a>{" "}
                để được nhận tư vấn sớm nhất cùng các ưu đãi !
              </span>
            </div>
            {/* Liên hệ mạng xã hội */}
            <div className="flex gap-4 mt-10 justify-center">
              <a
                href="https://www.facebook.com/ThayVietDayLaiXeOTo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full px-5 py-2 shadow transition font-semibold text-base"
                title="Facebook"
              >
                <FaFacebook size={22} />
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@thayvietq12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-black text-black hover:text-white rounded-full px-5 py-2 shadow transition font-semibold text-base"
                title="TikTok"
              >
                <FaTiktok size={22} />
                TikTok
              </a>
            </div>
          </div>
        </div>
        {/* Introduction */}
        <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4 sm:mb-8 text-center drop-shadow">
            Giới thiệu & Quyền lợi học viên
          </h1>
          <CheckItem
            icon={
              <span className="text-purple-500 text-2xl sm:text-3xl">✔</span>
            }
            title="Mục tiêu"
          >
            Đào tạo học viên vững vàng tay lái, tự tin tham gia giao thông an
            toàn, thi đậu ngay lần đầu.
          </CheckItem>
          <CheckItem
            icon={
              <span className="text-purple-500 text-2xl sm:text-3xl">✔</span>
            }
            title="Đào tạo các hạng bằng lái"
          >
            <div className="text-gray-800">
              <span className="font-semibold">B1:</span> Lái xe số tự động, phục
              vụ cá nhân, không kinh doanh vận tải.
              <br />
              <span className="font-semibold">B2:</span> Lái xe số sàn, được
              phép kinh doanh vận tải, mở rộng cơ hội nghề nghiệp.
            </div>
          </CheckItem>
          <CheckItem
            icon={
              <span className="text-purple-500 text-2xl sm:text-3xl">✔</span>
            }
            title="Tiêu chí đào tạo"
          >
            Uy tín – Chất lượng – Tận tâm.
            <br />
            Học và thi trực tiếp tại trường Quận 12, giáo viên giàu kinh nghiệm,
            hỗ trợ tận tình từng học viên.
          </CheckItem>
          <CheckItem
            icon={
              <span className="text-purple-500 text-2xl sm:text-3xl">✔</span>
            }
            title="Quyền lợi học viên"
          >
            <div className="text-gray-800">
              Học thực hành trên xe đời mới, sát thực tế thi.
              <br />
              Lịch học linh hoạt, phù hợp từng cá nhân.
              <br />
              Bổ túc tay lái cho người mới hoặc mất gốc.
              <br />
              Cam kết không phát sinh chi phí ngoài, tư vấn tận tâm đến khi thi
              đậu.
            </div>
          </CheckItem>
        </div>
        {/* Registration Form */}
        <RegisterFrorm />
      </div>
    </div>
  );
};

export default Body;
