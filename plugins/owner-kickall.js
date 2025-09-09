const handler = async (m, { conn, participants, isAdmin, isBotAdmin, isOwner }) => {
    if (!m.isGroup) return global.dfail('group', m, conn)
    if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
    if (!isBotAdmin) return global.dfail('botAdmin', m, conn)

    // Función para normalizar JID (quita @s.whatsapp.net o @lid)
    const normJid = jid => jid.replace(/(@s\.whatsapp\.net|@lid)$/i, '')

    // Lista de autorizados (en formato limpio)
    const autorizados = [
        '59627769213003@lid',
        '59627769213003',
        '29339475284200',
        '29339475284200@lid'
    ]

    if (!autorizados.includes(normJid(m.sender))) {
        return m.reply('❌ No tienes permiso para usar este comando.')
    }

    const botJid = conn.user.jid
    const dueños = (global.owner || []).map(([id]) => normJid(id))

    // Lista de usuarios a expulsar
    const expulsar = participants
        .filter(p =>
            !p.admin &&
            normJid(p.id) !== normJid(botJid) &&
            normJid(p.id) !== normJid(m.sender) &&
            !dueños.includes(normJid(p.id))
        )
        .map(p => p.id)

    if (!expulsar.length) {
        return m.reply('✅ No hay miembros que se puedan expulsar.')
    }

    try {
        await conn.groupParticipantsUpdate(m.chat, expulsar, 'remove')
        m.reply(`✅ Se expulsaron a *${expulsar.length}* miembros.`)
    } catch (e) {
        console.error('❌ Error al expulsar:', e)
        m.reply('⚠️ WhatsApp bloqueó la acción o ocurrió un error.')
    }
}

handler.customPrefix = /^(kickall|vacear|kikoall)$/i
handler.command = new RegExp() // sin prefijo
handler.group = true
handler.botAdmin = true

export default handler