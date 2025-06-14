import React, { useState, useRef } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  license: "",
  question: "",
};

const isValidEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

const isValidPhone = (phone) => /^0\d{9,10}$/.test(phone);

const RegisterForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const refs = {
    name: useRef(),
    phone: useRef(),
    license: useRef(),
    email: useRef(),
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!form.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!isValidPhone(form.phone.trim()))
      newErrors.phone = "Số điện thoại không hợp lệ";
    if (form.email && !isValidEmail(form.email.trim()))
      newErrors.email = "Email không hợp lệ";
    if (!form.license) newErrors.license = "Vui lòng chọn hạng bằng lái";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0];
      refs[firstError]?.current?.focus();
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        const data = await response.json();
        alert(data.message || "Gửi đăng ký thất bại. Vui lòng thử lại!");
      }
    } catch {
      alert("Không thể gửi đăng ký. Vui lòng thử lại!");
    }
  };

  const Tooltip = ({ show, message }) =>
    show ? (
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2 bg-red-500 text-white text-base font-semibold rounded shadow z-10 whitespace-nowrap flex items-center min-w-[180px] text-center">
        {message}
      </div>
    ) : null;

  return (
    <div
      id="register-form"
      className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 mt-12 mb-16"
    >
      <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
        Đăng ký học lái xe
      </h2>
      {success && (
        <div className="mb-6 px-4 py-3 bg-green-100 border border-green-400 text-green-800 rounded text-center font-semibold transition">
          Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
        </div>
      )}
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {/* Họ và tên */}
        <div className="relative">
          <input
            ref={refs.name}
            name="name"
            type="text"
            className={`w-full bg-gray-50 border ${
              errors.name ? "border-red-500" : "border-gray-200"
            } rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            placeholder="Họ và tên *"
            value={form.name}
            onChange={handleChange}
          />
          <Tooltip show={!!errors.name} message={errors.name} />
        </div>
        {/* Email */}
        <div className="relative">
          <input
            ref={refs.email}
            name="email"
            type="email"
            className={`w-full bg-gray-50 border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Tooltip show={!!errors.email} message={errors.email} />
        </div>
        {/* Số điện thoại */}
        <div className="relative">
          <input
            ref={refs.phone}
            name="phone"
            type="tel"
            className={`w-full bg-gray-50 border ${
              errors.phone ? "border-red-500" : "border-gray-200"
            } rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            placeholder="Số điện thoại *"
            value={form.phone}
            onChange={handleChange}
          />
          <Tooltip show={!!errors.phone} message={errors.phone} />
        </div>
        {/* Hạng bằng lái */}
        <div className="relative">
          <select
            ref={refs.license}
            name="license"
            className={`w-full bg-gray-50 border ${
              errors.license ? "border-red-500" : "border-gray-200"
            } rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            value={form.license}
            onChange={handleChange}
          >
            <option value="">Chọn hạng bằng lái xe bạn muốn học *</option>
            <option value="B1">Bằng B1 (số tự động)</option>
            <option value="B2">Bằng B2 (số sàn)</option>
          </select>
          <Tooltip show={!!errors.license} message={errors.license} />
        </div>
        {/* Câu hỏi thêm */}
        <div>
          <textarea
            name="question"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Câu hỏi thêm (nếu có)"
            value={form.question}
            onChange={handleChange}
            rows={3}
          />
        </div>
        {/* Nút gửi */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 text-lg rounded-lg mt-2 shadow-lg hover:from-indigo-600 hover:to-blue-600 transition transform hover:scale-105 cursor-pointer"
        >
          Gửi đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
