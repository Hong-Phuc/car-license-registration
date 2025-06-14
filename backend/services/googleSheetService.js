const { google } = require("googleapis");
const path = require("path");
const SHEET_ID = "198J3wE9TQndz8AT0d36JRLNMuAsTlIM5UOJbSU8mwtY";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendRegisterRow({ name, license, phone, email, question }) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const now = new Date();
  const dateStr = now.toLocaleDateString("vi-VN");

  const row = [
    name,
    license,
    phone,
    email,
    "Chưa xử lý",
    question || "",
    dateStr,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Trang tính1!A2:G2",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [row],
    },
  });
}

module.exports = { appendRegisterRow };
