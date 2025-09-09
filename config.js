import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['5217711941041', 'jid', 'sai', true],
  ['111497485226127@lid', 'lid', 'sai', true],
  ['148103877402760@lid', 'lid', 'touya', true],
  ['5219624178879', 'jid', 'touya', true],
  ['59627769213003@lid', 'lid', 'cristian', true],
  ['5215561076182', 'jid', 'Cristian', true],
  ['584124472867', 'jid', 'fabian', true],
  ['142524563853479@lid', 'lid', 'fabian', true],
  ['']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = `𝑭𝒂𝒃𝒙𝑺𝒂𝒊`
global.author = '{\n "𝗕𝗼𝘁": {\n   "name": "𝑭𝒂𝒃𝒙𝑺𝒂𝒊",\n     "author": "𝐶𝑅𝐼𝑆𝑇𝐼𝐴𝑁",\n   "status_bot": "active"\n }\n}'
global.wait = '𝑭𝒂𝒃𝒙𝑺𝒂𝒊'
global.botname = '𝑭𝒂𝒃𝒙𝑺𝒂𝒊'
global.textbot = `𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 de 𝑭𝒂𝒃𝒙𝑺𝒂𝒊 ☕`
global.listo = '𝗙𝗶𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 ☕'
global.namechannel = '𝑭𝒂𝒃𝒙𝑺𝒂𝒊 ☕'
global.baileys = '@whiskeysockets/baileys'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = 'https://files.catbox.moe/ntyp5r.jpg'
global.miniurl = 'https://files.catbox.moe/ntyp5r.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = ''
global.canal = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})