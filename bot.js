const mineflayer = require("mineflayer")
// imports //

bot = mineflayer.createBot({
  host: "server",
  username: "Dont worry", // yes can contain spaces! (may not be allowed on some servers)
  password: "password123",
  version: "1.19.2" // specificly this version so you dont have to use /say ingame.
});

function spam() {
  setInterval(() => {
    bot.chat("Get rekt server");
  }, 1);
}


bot.once('chat', function(username, message) {
  if (username == bot.username) {
    return;
  }
  if (message == '(startspammin') {
    console.log("i just started spammin!")
    spam();
  }
});
