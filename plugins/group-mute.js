import fetch from 'node-fetch'

let mutedUsers = new Set()

let handler = async (m, { conn, command }) => {
  if (!m.isGroup) return
  const user = m.quoted?.sender || m.mentionedJid?.[0]
  if (!user) return m.reply('⚠️ Usa: .mute @usuario o responde a su mensaje.')
  if (user === m.sender) return m.reply('❌ No puedes mutearte a ti mismo.')
  if (user === conn.user.jid) return m.reply('🤖 No puedes mutear al bot.')
  if (user === global.owner) return m.reply('👑 No puedes mutear al owner.')

  const thumbnailUrl = command === 'mute'
    ? 'https://telegra.ph/file/f8324d9798fa2ed2317bc.png'
    : 'https://telegra.ph/file/aea704d0b242b8c41bf15.png'
  const thumbBuffer = await fetch(thumbnailUrl).then(res => res.buffer())

  const preview = {
    key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: m.chat },
    message: { locationMessage: { name: command === 'mute' ? 'Usuario mutado' : 'Usuario desmuteado', jpegThumbnail: thumbBuffer } }
  }

  if (command === 'mute') {
    mutedUsers.add(user)
    await conn.sendMessage(m.chat, { text: '*Tus mensajes serán eliminados*' }, { quoted: preview, mentions: [user] })
  } else {
    if (!mutedUsers.has(user)) return m.reply('⚠️ Ese usuario no está muteado.')
    mutedUsers.delete(user)
    await conn.sendMessage(m.chat, { text: '*Tus mensajes no serán eliminados*' }, { quoted: preview, mentions: [user] })
  }
}

handler.before = async (m, { conn }) => {
  if (!m.isGroup || m.fromMe) return
  const user = m.sender
  const chat = m.chat

  if (mutedUsers.has(user)) {
    if (!global.parallelDeleteQueue) global.parallelDeleteQueue = []
    global.parallelDeleteQueue.push({ chat, key: m.key, conn })
    if (!global.parallelDeleteRunning) {
      global.parallelDeleteRunning = true
      setImmediate(async function loop() {
        const queue = global.parallelDeleteQueue.splice(0)
        await Promise.all(queue.map(({ chat, key, conn }) => conn.sendMessage(chat, { delete: key }).catch(() => {})))
        if (global.parallelDeleteQueue.length) setImmediate(loop)
        else global.parallelDeleteRunning = false
      }())
    }
    return
  }
}

handler.help = ['mute @usuario', 'unmute @usuario']
handler.tags = ['group']
handler.command = /^(mute|unmute)$/i
handler.group = true
handler.admin = true

export default handler