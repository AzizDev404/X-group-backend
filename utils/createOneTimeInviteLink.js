const axios = require("axios");

const createOneTimeInviteLink = async () => {
  try {
    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/createChatInviteLink`,
      {
        chat_id: process.env.CHAT_ID,
        member_limit: 1, // faqat 1 kishi ishlata oladi
        expire_date: Math.floor(Date.now() / 1000) + 3600 // 1 soat amal qiladi
      }
    );

    if (!res.data.ok) {
      throw new Error("Telegram API error: " + JSON.stringify(res.data));
    }

    return res.data.result.invite_link;
  } catch (err) {
    console.error("❌ Error creating invite link:", err.message);
    throw err;
  }
};

module.exports = createOneTimeInviteLink;
