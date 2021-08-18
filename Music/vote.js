client.on("message", message => {
if  (message.content === ":vote") {
const embed = new Discord.MessageEmbed()
.setColor("#ffff00")
.setImage(`https://media.discordapp.net/attachments/844858412969230376/877389521019367495/image0.gif`)
.setAuthor('Vite Primum Discord Bot - Music!')
.setDescription("`Vite Primum in top.gg`")
.addField("`Vite Primum Link`","**Coming Soon**")
       message.channel.send(embed)

       } 
      });
