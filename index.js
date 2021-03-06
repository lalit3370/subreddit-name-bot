const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const token = '<insert your bot token here>';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {

    var url="https://www.reddit.com/r/";
    var msgtext=msg.text.toString().toLowerCase();
    var subreddit= msgtext.match(/(?<=r\/)\w+/);
    if (subreddit!=null) {
     bot.sendMessage(msg.chat.id,url+subreddit);
    } 
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "goodbye!");
    } 
});
const app = express();
app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
