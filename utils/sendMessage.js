const axios = require("axios");

const sendMessage = async (chatId, text) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text,
        parse_mode: "Markdown"
      }
    );
  } catch (err) {
    console.error("❌ Error sending message:", err.message);
  }
};

module.exports = sendMessage;
