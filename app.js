// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`with souls | b!help`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`with souls | b!help`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`with souls | b!help`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "help") {
    
    const m = await message.channel.send("***Hi! I’m Bhahouighfbot. How can I help you today?***\n" +
      "```b!help: Summons the help menu (You’re looking at it!)\n" +
      "b!respond: I may respond, but no guarantees.\n" +
      "b!deny: I’m not a robot. Really.\n" +
      "b!shup: SHUP!\n" +
      "b!seeet: Receive a randomized “Seeet Dreams” image from my database of nearly 100!\n" +
      "b!repeat: I will repeat everything you say.\n"+
      "b!desist: I will desist```");
  }

  if(command === "deny") {
    
    const m = await message.channel.send("I'm not a robot. Really.");
  }

if(command === "shup") {
    
    const m = await message.channel.send(":regional_indicator_s::regional_indicator_h::up:");
  }



if(command === "desist") {
    
    const m = await message.channel.send("alright, fine. I didn't want to talk to you anyway. I'm already busy talking to my other friends anyway. :(");
  }

if(command === 'respond') {
    const Things = ['Hello!','what do you want.','Josh is an asshole','How are you?','fuck off','How about them titans','Have you guys seen the latest BtB video? (https://www.youtube.com/channel/UCG5j1VTDfiMm5m7EcpNlAyQ/videos)','dingy','Error: Command "b!respond" does not compute. Please type "b!help" for the correct syntax.','Im really not a robot I swear','There is only one God','Try some of my other commands! The bot author is tired of adding responses','I love you!','You are fantastic','Lightswitch','die','zaboopity zaboppity get off my property','Doki Doki!','Prilosac is the one you worship','What’s cookin’, good lookin’?','Howdy, pardner.','Yes?','Hello there.','Greetings.']
    var x = Math.floor(Math.random() * Things.length) + 1; //makes it easier
    message.reply(Things[x]); //or message.channel.send(Things[x]);
  }

if(command === 'seeet') {
    const Things = ['https://media.discordapp.net/attachments/362401354066427905/438321251019259914/seeet5.jpg?width=375&height=300','https://media.discordapp.net/attachments/362401354066427905/438321254219644939/seeet4.jpg?width=400&height=255','https://media.discordapp.net/attachments/362401354066427905/438321256899805184/seeet3.jpg?width=301&height=301','https://media.discordapp.net/attachments/362401354066427905/438321259722440704/seeeet.jpg?width=326&height=300','https://media.discordapp.net/attachments/362401354066427905/438321262184628224/seeet.jpg?width=359&height=301','https://media.discordapp.net/attachments/362401354066427905/438321361987829770/seeet100.png?width=400&height=300','https://media.discordapp.net/attachments/362401354066427905/438321363002851328/seeet99.png','https://media.discordapp.net/attachments/362401354066427905/438321364332445696/seeet98.jpg?width=281&height=301','https://media.discordapp.net/attachments/362401354066427905/438321365460844547/seeet97.png?width=400&height=86','https://media.discordapp.net/attachments/362401354066427905/438321366622797824/seeet96.png?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321367834689536/seeet95.png','https://media.discordapp.net/attachments/362401354066427905/438321369399296010/seeet94.jpg?width=301&height=301','https://media.discordapp.net/attachments/362401354066427905/438321370716438537/seeet93.png?width=240&height=300','https://media.discordapp.net/attachments/362401354066427905/438321372121399306/seeet91.png?width=263&height=300','https://media.discordapp.net/attachments/362401354066427905/438321372100558849/seeet92.png?width=400&height=292','https://media.discordapp.net/attachments/362401354066427905/438321407412142090/seeet90.jpg?width=400&height=276','https://media.discordapp.net/attachments/362401354066427905/438321416845262848/seeet88.jpg?width=326&height=301','https://media.discordapp.net/attachments/362401354066427905/438321419701583872/seeet87.png?width=400&height=293','https://media.discordapp.net/attachments/362401354066427905/438321419701583872/seeet87.png?width=400&height=293','https://media.discordapp.net/attachments/362401354066427905/438321421249150990/seeet86.jpg?width=243&height=300','https://media.discordapp.net/attachments/362401354066427905/438321422952300586/seeet85.jpg?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321424059465738/seeet84.jpeg?width=400&height=217','https://media.discordapp.net/attachments/362401354066427905/438321429033910272/seeet82.png?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321455755821059/night_good.jpg?width=400&height=225','https://media.discordapp.net/attachments/362401354066427905/438321467529232394/seeet77.png','https://media.discordapp.net/attachments/362401354066427905/438321474579988480/seeet74.jpg?width=301&height=301','https://media.discordapp.net/attachments/362401354066427905/438321571849961482/seeet50.jpg?width=400&height=225','https://media.discordapp.net/attachments/362401354066427905/438321574249234462/seeet49.jpg?width=400&height=267','https://media.discordapp.net/attachments/362401354066427905/438321591408001025/seeet47.png','https://media.discordapp.net/attachments/362401354066427905/438321597653450753/seeet45.jpeg','https://media.discordapp.net/attachments/362401354066427905/438321600970883092/seeet44.jpeg','https://media.discordapp.net/attachments/362401354066427905/438321608403451914/seeet42.jpeg','https://media.discordapp.net/attachments/362401354066427905/438321612392103937/seeet41.png?width=169&height=300','https://media.discordapp.net/attachments/362401354066427905/438321616154394625/seeet40.JPG?width=226&height=301','https://media.discordapp.net/attachments/362401354066427905/438321620336115722/seeet39.png?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321624391876629/seeet38.jpeg?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321631094505482/seeet37.png?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321634869248001/seeet36.png','https://media.discordapp.net/attachments/362401354066427905/438321640703524864/seeet35.jpeg','https://media.discordapp.net/attachments/362401354066427905/438321644482592770/seeet34.png?width=390&height=301','https://media.discordapp.net/attachments/362401354066427905/438321648781754379/seeet33.jpg?width=400&height=225','https://media.discordapp.net/attachments/362401354066427905/438321653253144596/seeet32.jpg?width=400&height=300','https://media.discordapp.net/attachments/362401354066427905/438321682910806019/seeet31.gif','https://media.discordapp.net/attachments/362401354066427905/438321691433631746/seeet30.jpg?width=400&height=250','https://media.discordapp.net/attachments/362401354066427905/438321698400501770/seeet29.jpg?width=394&height=301','https://media.discordapp.net/attachments/362401354066427905/438321705136422923/seeet28.jpg?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321712631906325/seeet27.jpg?width=352&height=300','https://media.discordapp.net/attachments/362401354066427905/438321718927556620/seeet26.gif','https://media.discordapp.net/attachments/362401354066427905/438321725986439168/seeet25.jpg?width=365&height=300','https://media.discordapp.net/attachments/362401354066427905/438321732185620490/seeet24.jpg?width=400&height=225','https://media.discordapp.net/attachments/362401354066427905/438321738271686656/seeet23.jpg','https://media.discordapp.net/attachments/362401354066427905/438321745217454080/seeet22.jpg?width=384&height=300','https://media.discordapp.net/attachments/362401354066427905/438321750942679040/seeet21.jpg?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321757259038731/seeet20.jpg','https://media.discordapp.net/attachments/362401354066427905/438321761855995906/seeet19.jpg?width=224&height=301','https://media.discordapp.net/attachments/362401354066427905/438321768017559582/seeet18.png?width=290&height=300','https://media.discordapp.net/attachments/362401354066427905/438321774459879424/seeet17.jpg?width=400&height=300','https://media.discordapp.net/attachments/362401354066427905/438321780109869061/seeet16.jpg?width=397&height=301','https://media.discordapp.net/attachments/362401354066427905/438321787668004865/seeet15.png?width=400&height=267','https://media.discordapp.net/attachments/362401354066427905/438321795121020959/seeet14.png?width=300&height=300','https://media.discordapp.net/attachments/362401354066427905/438321798635978762/seeet13.jpg?width=216&height=300','https://media.discordapp.net/attachments/362401354066427905/438321800192065536/seeet12.png?width=226&height=300','https://media.discordapp.net/attachments/362401354066427905/438321801563471873/seeet11.png?width=400&height=134','https://media.discordapp.net/attachments/362401354066427905/438321803174215681/seeet10.jpg?width=400&height=267','https://media.discordapp.net/attachments/362401354066427905/438321804801736704/seeet9.jpg?width=301&height=301','https://media.discordapp.net/attachments/362401354066427905/438321826553135105/seeet7.jpg?width=300&height=300']
    var x = Math.floor(Math.random() * Things.length) + 1; //makes it easier
    message.reply(Things[x]); //or message.channel.send(Things[x]);
  }



  if(command === "repeat") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  
});

client.login("NDM3NzczMDA4NDk3NjcyMTky.DcAHvQ.cb8NNAKBbx4D9idoQ6bz99MHWRQ");
