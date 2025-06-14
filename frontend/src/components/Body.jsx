import React from "react";
import RegisterFrorm from "./RegisterForm";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const CheckItem = ({ icon, title, children }) => (
  <div className="group grid grid-cols-[48px_1fr] gap-4 py-5 px-4 bg-white bg-opacity-90 rounded-xl shadow transition-all border border-[#EF88AD] hover:shadow-xl hover:border-[#A53860] mb-6">
    <div className="flex items-start justify-center pt-1">
      <span className="text-[#670D2F] text-3xl group-hover:scale-110 transition-transform">
        {icon}
      </span>
    </div>
    <div>
      <div className="font-bold text-[#670D2F] text-lg mb-1 tracking-wide">
        {title}
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-8 justify-center">
    <span className="inline-block w-8 h-1 rounded bg-gradient-to-r from-[#EF88AD] to-[#A53860]"></span>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#670D2F] text-center drop-shadow tracking-wide">
      {children}
    </h2>
    <span className="inline-block w-8 h-1 rounded bg-gradient-to-r from-[#A53860] to-[#EF88AD]"></span>
  </div>
);

const CarImage = ({ src, alt }) => (
  <div className="overflow-hidden rounded-2xl shadow-lg border border-[#A53860] bg-white transition-transform hover:scale-105 duration-300">
    <img src={src} alt={alt} className="w-[320px] h-[360px] object-cover" />
  </div>
);

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#3A0519] via-[#A53860] to-[#3A0519] relative">
      {/* Header */}
      <header className="w-full flex flex-col items-center pt-8 pb-4 z-10">
        <div className="flex items-center gap-4">
          <img
            src="src/assets/icon/logoweb.ico"
            alt="Logo"
            className="p-2 mr-10 mb-2 w-12 md:w-20 bg-white rounded-full shadow-lg drop-shadow-lg"
          />
          <h1 className="text-2xl md:text-[40px] text-white font-extrabold text-center drop-shadow-lg">
            ĐÀO TẠO LÁI XE Ô TÔ THẦY VIỆT
          </h1>
        </div>
        <p className="text-white text-base mt-1 text-[16px] md:text-[20px] text-center">
          Hơn 10 năm công tác giảng dạy kèm cặp học viên kinh nghiệm tại Trường
          Cao đẳng GTVT TWIII
        </p>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center w-[98%] sm:w-[95%] md:w-[90%] max-w-8xl mt-8">
        {/* Banner */}
        <section className="relative w-full mb-8">
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
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <a
                href="#register-form"
                className="bg-gradient-to-r from-[#A53860] to-[#EF88AD] text-white font-bold py-3 px-10 rounded-full shadow-lg transition hover:from-[#3A0519] hover:to-[#A53860] hover:scale-105 cursor-pointer text-lg"
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
            <div className="flex gap-4 mt-10 justify-center">
              <a
                href="https://www.facebook.com/ThayVietDayLaiXeOTo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full px-5 py-2 shadow transition font-semibold text-base"
              >
                <FaFacebook size={22} /> Facebook
              </a>
              <a
                href="https://www.tiktok.com/@thayvietq12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-black text-black hover:text-white rounded-full px-5 py-2 shadow transition font-semibold text-base"
              >
                <FaTiktok size={22} /> TikTok
              </a>
            </div>
          </div>
        </section>

        {/* Info and Image Section */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="bg-rose-100 rounded-3xl shadow-2xl border border-[#EF88AD] p-6 sm:p-10 flex flex-col h-full">
            <SectionTitle>Giới thiệu & Quyền lợi học viên</SectionTitle>
            <CheckItem icon={<span>✔</span>} title="Mục tiêu">
              Đào tạo học viên vững vàng tay lái, tự tin tham gia giao thông an
              toàn, thi đậu ngay lần đầu.
            </CheckItem>
            <CheckItem icon={<span>✔</span>} title="Đào tạo các hạng bằng lái">
              <span className="font-semibold">B1:</span> Lái xe số tự động, phục
              vụ cá nhân, không kinh doanh vận tải.
              <br />
              <span className="font-semibold">B2:</span> Lái xe số sàn, được
              phép kinh doanh vận tải, mở rộng cơ hội nghề nghiệp.
            </CheckItem>
            <CheckItem icon={<span>✔</span>} title="Tiêu chí đào tạo">
              Uy tín – Chất lượng – Tận tâm.
              <br />
              Học và thi trực tiếp tại trường Quận 12, giáo viên giàu kinh
              nghiệm, hỗ trợ tận tình từng học viên.
            </CheckItem>
            <CheckItem icon={<span>✔</span>} title="Quyền lợi học viên">
              Học thực hành trên xe đời mới, sát thực tế thi.
              <br />
              Lịch học linh hoạt, phù hợp từng cá nhân.
              <br />
              Bổ túc tay lái cho người mới hoặc mất gốc.
              <br />
              Cam kết không phát sinh chi phí ngoài, tư vấn tận tâm đến khi thi
              đậu.
            </CheckItem>
          </div>

          <div className="bg-rose-100 bg-opacity-90 rounded-3xl shadow-2xl border border-[#EF88AD] px-6 py-8 flex flex-col justify-between items-center h-full">
            <SectionTitle>Hình ảnh xe thực tế sử dụng đào tạo</SectionTitle>
            <div className="flex flex-row gap-8 justify-center mb-6">
              <CarImage src="src/assets/img/car1.jpg" alt="Xe tập lái 1" />
              <CarImage src="src/assets/img/car2.jpg" alt="Xe tập lái 2" />
            </div>
            <div className="w-full bg-white bg-opacity-90 rounded-xl shadow border border-[#EF88AD] px-6 py-5 text-gray-700 text-base sm:text-lg leading-relaxed drop-shadow max-w-xl">
              Xe tập lái đời mới, bảo dưỡng định kỳ, trang bị đầy đủ thiết bị an
              toàn và hỗ trợ học viên làm quen thực tế với các tình huống giao
              thông.
              <br />
              <br />
              Cam kết sử dụng đúng loại xe thi, giúp học viên tự tin khi thực
              hành và thi sát hạch.
            </div>
          </div>
        </section>

        <RegisterFrorm />
      </main>
    </div>
  );
};

export default Body;
