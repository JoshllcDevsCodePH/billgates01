const { Telegraf, Markup } = require("telegraf");
const TOKEN = "AAEt3yeviJBEO_gWRIKafteGb14jyn1GQn4";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://billgates1-0.netlify.app/";
const community_link = "https://t.me/titimoburat_01"; 


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, Welcome to My Bot! Contact the Developer of this bot web app @Joshllcdevs for your own projects today*
Tap on the coin and see token rise.
      
*THIS BOT Bot* is a Decentralized Exchange on the TON Blockchain. The biggest part of bot TOKEN distribution will occur among the players here.
      
Got friends, relatives, co-workers?
Bring them all into the game.
More buddies, more coins.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: urlSent } }],
              [{ text: "Join our Community", url: community_link }]
            
            ],
            in: true
        },
    });
  });
  
  
  
  bot.launch();
  
app.listen(3005, () => {
    console.log("server is me and now running")
})
