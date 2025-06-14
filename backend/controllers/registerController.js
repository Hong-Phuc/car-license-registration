const { appendRegisterRow } = require("../services/googleSheetService");

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}

function isValidPhone(phone) {
  return /^0\d{9,10}$/.test(phone); // Số Việt Nam, bắt đầu bằng 0, 10-11 số
}

exports.handleRegister = async (req, res) => {
  const { name, email, phone, license, question } = req.body;

  if (!name || !phone || !license) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc." });
  }
  if (email && !isValidEmail(email)) {
    return res.status(400).json({ message: "Email không hợp lệ." });
  }
  if (!isValidPhone(phone)) {
    return res.status(400).json({ message: "Số điện thoại không hợp lệ." });
  }

  try {
    console.log("Received register:", req.body);
    await appendRegisterRow({ name, license, phone, email, question });
    res.json({ message: "Gửi đăng ký thành công!" });
  } catch (error) {
    console.error("Google Sheet error:", error);
    res
      .status(500)
      .json({ message: "Gửi đăng ký thất bại.", error: error.message });
  }
};
