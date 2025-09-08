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
  ['29339475284200@lid', 'lid', 'colmenares', true],
  ['573105668978', 'jid', 'colmenares', true],
  ['59627769213003@lid', 'lid', 'cristian', true],
  ['5215561076182', 'jid', 'Cristian', true],
  ['']
  ['']
  ['']
  ['']

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = `𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩`
global.author = '{\n "𝗕𝗼𝘁": {\n   "name": "𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩",\n     "author": "𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 ",\n   "status_bot": "active"\n }\n}'
global.wait = '𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩'
global.botname = '𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩'
global.textbot = `𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩☕`
global.listo = '𝗙𝗶𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 ☕'
global.namechannel = '𝘾𝙭𝙡𝙢𝙚𝙣𝙖𝙧𝙚𝙨 𝘽𝙤𝙩 ☕'
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