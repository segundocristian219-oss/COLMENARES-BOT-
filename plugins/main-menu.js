import fs from "fs"

let handler = async (m, { conn }) => {
  m.react('🌸')

  let texto = `🪙 𝐌 𝐔 𝐋 𝐓 𝐈 - 𝐌 𝐄 𝐍 𝐔́ 

      「 *📚 𝘐𝘯𝘧𝘰 📚* 」  
┣━━━━━━━━━━━━━━┫
┃⋗ 👤 *.owner*  
┃⋗ 📜 *.menu*  
┃⋗ 🏓 *.ping* 
┗━━━━━━━━━━━━━━┛

  「 *🔎 𝘉𝘶𝘴𝘲𝘶𝘦𝘥𝘢𝘴 🔎* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛒 *.mercadolibre*  
┃⋗ 🖼️ *.pinterest <texto>*  
┃⋗ 📷 *.imagen <texto>*  
┃⋗ 📹 *.imag <texto>*  
┃⋗ 🔍 *.ytsearch <búsqueda>*  
┗━━━━━━━━━━━━━━┛  

    「 *👥 𝘎𝘳𝘶𝘱𝘰𝘴 👥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🗑️ *.del*   
┃⋗ 🔗 *.link*  
┃⋗ ❌ *.kick @user*  
┃⋗ 🎯 *.ruletaban*   
┃⋗ 📣 *.todos*  
┃⋗ 🚫 *.banchat*  
┃⋗ ✅ *.unbanchat*  
┃⋗ 🚫 *.mute*  
┃⋗ ✅ *.unmute*  
┃⋗ 🤫 *.hidetag*  
┃⋗ 📜 *.reglas*  
┃⋗ 👻 *.fantasmas*  
┃⋗ 🛠️ *.group open / close*  
┃⋗ 🔓 *.grupo abrir / cerrar*  
┃⋗ 📝 *.setreglas + Texto*  
┃⋗ 👋 *.setwelcome @user + texto*  
┃⋗ 📈 *.promote @usuario*  
┃⋗ 📉 *.demote @usuario*  
┗━━━━━━━━━━━━━━┛  

  「 *📥 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 📥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎧 *.play <canción>*
┃⋗ 🎧 *.spotify <canción>*          
┗━━━━━━━━━━━━━━┛  

   「 *😺 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 😺* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛡️ *.autoadmin*  
┃⋗ ⛔ *.ban @user*
┃⋗ ✅ *.unban @user*  
┃⋗ 🔑 *.dsowner*  
┃⋗ 🔑 *.limpiar*  
┃⋗ 🌐 *.join <link>*  
┃⋗ 🔄 *.reiniciar*  
┃⋗ 🚪 *.salir*  
┃⋗ 🔄 *.update*  
┗━━━━━━━━━━━━━━┛  

「 *🎨 𝘓𝘰𝘨𝘰 - 𝘮𝘢𝘬𝘦𝘳 🎨* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ❤️ *.logocorazon <texto>*  
┃⋗ 🎄 *.logochristmas <texto>*  
┃⋗ 👩🏻‍❤️‍👨🏻 *.logopareja <texto>*  
┃⋗ 💥 *.logoglitch <texto>*  
┃⋗ 😔 *.logosad <texto>*  
┃⋗ 🎮 *.logogaming <texto>*  
┃⋗ 🌟 *.logosolitario <texto>*  
┃⋗ 🐉 *.logodragonball <texto>*  
┃⋗ ⚡ *.logoneon <texto>*  
┃⋗ 🐱 *.logogatito <texto>*  
┃⋗ 🎮 *.logochicagamer <texto>*  
┃⋗ 💪 *.logoarmy <texto>*  
┃⋗ 🍥 *.logonaruto <texto>*  
┃⋗ 🚀 *.logofuturista <texto>*  
┃⋗ ☁️ *.logonube <texto>*  
┃⋗ 👼 *.logoangel <texto>*  
┃⋗ 🌌 *.logocielo <texto>*  
┃⋗ 🎨 *.logograffiti3d <texto>*  
┃⋗ 🔲 *.logomatrix <texto>*  
┃⋗ 👻 *.logohorror <texto>*  
┃⋗ 🎭 *.logoalas <texto>*  
┃⋗ 🎮 *.logopubg <texto>*  
┃⋗ ⚔️ *.logoguerrero <texto>*  
┃⋗ 🎮 *.logopubgfem <texto>*  
┃⋗ 🏆 *.logolol <texto>*  
┃⋗ 👾 *.logoamongus <texto>*  
┃⋗ 📖 *.logoportadaplayer <texto>*  
┃⋗ 📝 *.logoportadaff <texto>*  
┃⋗ 🐅 *.logovideotiger <texto>*  
┃⋗ 🎬 *.logovideointro <texto>*  
┃⋗ 🎮 *.logovideogaming <texto>*  
┃⋗ 😿 *.sadcat <texto>*  
┃⋗ 🐦 *.tweet <comentario>*  
┗━━━━━━━━━━━━━━┛  

   「 *📴 𝘖𝘯 / 𝘖𝘧𝘧 📴* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ✅ *.off*  
┃⋗ ❌ *.on*  
┗━━━━━━━━━━━━━━┛  

「 *🔧 𝘏𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 🔧* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💻 *.Ia <texto>*  
┃⋗ 🖼️ *.hd*  
┃⋗ 🔍 *.ver*  
┃⋗ 🔄 *.reenviar*  
┃⋗ 🎥 *.tovid <sticker>* 
┗━━━━━━━━━━━━━━┛  

   「 *🎲 𝘋𝘪𝘷𝘦𝘳𝘴𝘪𝘰́𝘯 🎲* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🤗 *.abrazar <@usuario>*  
┃⋗ 🐾 *.acariciar @tag*  
┃⋗ ❓ *.acertijo*  
┃⋗ 🎲 *.dado* 
┃⋗ 🎬 *.advpeli*  
┃⋗ 🛌 *.afk <razón>*  
┃⋗ 😍 *.minovia @user*
┃⋗ 😍 *.minovio @user*
┃⋗ 🌈 *.gay <@tag> | <nombre>*  
┃⋗ 🌈 *.lesbiana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajero <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruano <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajera <@tag> | <nombre>*  
┃⋗ 😈 *.puto <@tag> | <nombre>*  
┃⋗ 😈 *.puta <@tag> | <nombre>*  
┃⋗ 🤕 *.manco <@tag> | <nombre>*  
┃⋗ 🤕 *.manca <@tag> | <nombre>*  
┃⋗ 🐀 *.rata <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituta <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituto <@tag> | <nombre>*  
┃⋗ 💡 *.consejo*  
┃⋗ 💃 *.dance <@user>*  
┃⋗ 🔍 *.doxear <nombre> | <@tag>*  
┃⋗ 😈 *.follar*  
┃⋗ ❤️ *.formarpareja*  
┃⋗ 🌈 *.gay2*  
┃⋗ 🔞 *.horny*  
┃⋗ 🧠 *.iqtest*  
┃⋗ 💋 *.besar @tag*  
┃⋗ ❤️ *.love <@user>*  
┃⋗ 🥰 *.enamorada @tag*  
┃⋗ 😂 *.meme*  
┃⋗ 👿 *.cachuda @tag | nombre*  
┃⋗ ✊🏿 *.negra @tag | nombre*  
┃⋗ 🍼 *.adoptado @tag | nombre*  
┃⋗ 👙 *.sintetas @tag | nombre*  
┃⋗ 🍑 *.sinpoto @tag | nombre*  
┃⋗ 🍆 *.sinpito @tag | nombre*  
┃⋗ 😬 *.feo @tag | nombre*  
┃⋗ 👿 *.cachudo @tag | nombre*  
┃⋗ 😬 *.fea @tag | nombre*  
┃⋗ ✊🏿 *.negro @tag | nombre*  
┃⋗ 🍼 *.adoptada @tag | nombre*  
┃⋗ 🥷 *.nombreninja <texto>*  
┃⋗ 😈 *.penetrar @user*  
┃⋗ 🔮 *.personalidad <nombre>*  
┃⋗ 💌 *.piropo*  
┃⋗ 🎴 *.ppt*  
┃⋗ ❓ *.pregunta*  
┃⋗ 🎲 *.reto*  
┃⋗ 😭 *.triste @tag*  
┃⋗ 👫 *.ship*  
┃⋗ 🎰 *.slot <apuesta>*  
┃⋗ 😳 *.sonrojarse @tag*  
┃⋗ 🔝 *.top <texto>*  
┃⋗ 🔞 *.violar*  
┃⋗ 🌌 *.zodiac <AAAA MM DD>*  
┗━━━━━━━━━━━━━━┛ 

   「 *📌 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 📌* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🔥 *.4vs4*  
┃⋗ 🔥 *.6vs6*  
┃⋗ 🔥 *.8vs8*  
┃⋗ 🔥 *.12vs12*  
┃⋗ 🔥 *.16vs16*  
┃⋗ 💣 *.guerra*  
┃⋗ 🔐 *.interna*  
┃⋗ 📜 *.reglasclk*
┃⋗ ⚔️ *.scrim*  
┃⋗ 🎮 *.menu4*  
┃⋗ 🏝️ *.bermuda*  
┃⋗ 🟦 *.cuadrilatero*  
┃⋗ 🛑 *.hexagonal* 
┗━━━━━━━━━━━━━━┛  

   「 *🔉 𝘈𝘶𝘥𝘪𝘰𝘴 🔉* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎵 *.bass <mp3/vn>*  
┃⋗ 🎵 *.blown <mp3/vn>*  
┃⋗ 🎵 *.deep <mp3/vn>*  
┃⋗ 🎵 *.earrape <mp3/vn>*  
┃⋗ 🎵 *.fast <mp3/vn>*  
┃⋗ 🎵 *.fat <mp3/vn>*  
┃⋗ 🎵 *.nightcore <mp3/vn>*  
┃⋗ 🎵 *.reverse <mp3/vn>*  
┃⋗ 🎵 *.robot <mp3/vn>*  
┃⋗ 🎵 *.slow <mp3/vn>*  
┃⋗ 🎵 *.smooth <mp3/vn>*  
┃⋗ 🎵 *.tupai <mp3/vn>*  
┃⋗ 🎵 *.reverb <mp3/vn>*  
┃⋗ 🎵 *.chorus <mp3/vn>*  
┃⋗ 🎵 *.flanger <mp3/vn>*  
┃⋗ 🎵 *.distortion <mp3/vn>*  
┃⋗ 🎵 *.pitch <mp3/vn>*  
┃⋗ 🎵 *.highpass <mp3/vn>*  
┃⋗ 🎵 *.lowpass <mp3/vn>*  
┃⋗ 🎵 *.underwater <mp3/vn>*  
┗━━━━━━━━━━━━━━┛  

    「 *𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘴 🏞* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🖼️ *.img (reply)*  
┃⋗ 💬 *.qc <texto>*   
┃⋗ 🎨 *.sticker*  
┃⋗ 🖋️ *.wm <nombre>*
┃⋗ 🎞️ *.tovid <sticker>*  
┗━━━━━━━━━━━━━━┛

      「 *𝘕𝘴𝘧𝘸 🔞* 」
┣━━━━━━━━━━━━━━┫    
┃⋗ 🔞 *.booty*  
┃⋗ 🔞 *.ecchi*  
┃⋗ 🔞 *.furro*  
┃⋗ 🔞 *.lesbianas*  
┃⋗ 🔞 *.nsfwloli*  
┃⋗ 🔞 *.panties*  
┃⋗ 🔞 *.pene*  
┃⋗ 🔞 *.rule34 <búsqueda>*  
┃⋗ 🔞 *.pechos*  
┃⋗ 🔞 *.tetas*  
┃⋗ 🔞 *.trapito*  
┗━━━━━━━━━━━━━━┛
`

  let img = './src/img/catalogo.jpg'
  let icono = fs.readFileSync('./src/img/catalogo.jpg')

  await conn.sendMessage(m.chat, {
    image: { url: img },
    caption: texto,
    contextInfo: {
      externalAdReply: {
        title: "𝑲𝑰𝑻𝑻𝒀 𝑩𝑶𝑻",
        body: "",
        thumbnail: icono,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m })

  global.db.data.users[m.sender].lastcofre = new Date * 1
}

handler.customPrefix = /^(\.menu|menu)$/i
handler.command = new RegExp
export default handler