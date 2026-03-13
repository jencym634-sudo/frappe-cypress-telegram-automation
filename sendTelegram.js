const axios = require("axios");

const BOT_TOKEN = "8305504689:AAGVa8lLYno3h1v27FwOFqNvjma_8hQzzaM";
const CHAT_ID = "6974482942";

async function sendMessage() {

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: CHAT_ID,
    text: "✅ Cypress Test Passed for Frappe Grocery App"
  });

  console.log("Telegram message sent");
}

sendMessage();
