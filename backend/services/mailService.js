const nodemailer = require("nodemailer");

exports.sendRegisterMail = async ({
  name,
  email,
  phone,
  license,
  question,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Đăng ký học lái xe" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Xác nhận đăng ký học lái xe",
    html: `
      <h3>Chào ${name},</h3>
      <p>Bạn đã đăng ký học lái xe thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất!</p>
      <ul>
        <li><b>Họ tên:</b> ${name}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Số điện thoại:</b> ${phone}</li>
        <li><b>Hạng bằng lái:</b> ${license}</li>
        <li><b>Câu hỏi thêm:</b> ${question || "(không có)"}</li>
      </ul>
      <p>Xin cảm ơn!</p>
    `,
  });
};
