let handler = async (m, { conn, text, participants, command }) => {
    let member = participants.map(u => u.id)
    let sum = !text ? member.length : text
    let total = 0
    let sider = []

    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
        let userData = global.db.data.users[member[i]]

        if ((typeof userData === 'undefined' || userData.chat === 0) && !users?.isAdmin && !users?.isSuperAdmin) {
            if (typeof userData !== 'undefined') {
                if (userData.whitelist === false) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }

    if (total === 0) return conn.reply(m.chat, `*[❗INFO❗]* Este grupo no tiene fantasmas. ¡Buen trabajo admin!`, m)

    if (command === 'fankick') {
        await conn.groupParticipantsUpdate(m.chat, sider, 'remove')
        let eliminados = sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')
        return conn.reply(m.chat, `*Fantasmas eliminados:*\n${eliminados}`, null, { mentions: sider })
    }

    // Si es comando .fantasmas o .verfantasmas
    let mensaje = `[ ⚠ 𝙍𝙀𝙑𝙄𝙎𝙄𝙊𝙉 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝘼 ⚠ ]\n\n𝐆𝐑𝐔𝐏𝐎: ${await conn.getName(m.chat)}\n𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒: ${sum}\n\n[ ⇲ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 ⇱ ]\n${sider.map(v => '  👻 @' + v.replace(/@.+/, '')).join('\n')}`

    mensaje += `\n\n*_ELIMINANDOS COMO NO SE ACTIVEN_*\n𝙽𝙾𝚃𝙰: 𝙴𝚂𝚃𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝟷𝟶𝟶% 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙴𝙻 𝙱𝙾𝚃 𝙸𝙽𝙸𝙲𝙸𝙰 𝙴𝙻 𝙲𝙾𝙽𝚃𝙴𝙾 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙳𝙴𝚂𝙳𝙴 𝙻𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾\n\n🧹 *Si deseas eliminar a todos los fantasmas, ejecuta:*\n.fankick`

    conn.reply(m.chat, mensaje, null, { mentions: sider })
}

handler.help = ['fantasmas', 'fankick']
handler.tags = ['group']
handler.command = /^(verfantasmas|fantasmas|sider|fankick)$/i
handler.admin = true
export default handler