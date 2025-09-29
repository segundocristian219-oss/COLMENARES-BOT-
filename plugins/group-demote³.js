let handler = async (m, { conn }) => {
  if (!m.isGroup || !m.sender) return;

  const body = m.text?.trim();
  let user;
  let action; // 'promote' o 'demote'

  // Detectar la acción y el usuario
  if (/^(promote|\.promote)\s+@/i.test(body)) {
    const mentioned = m.mentionedJid || m.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || !mentioned.length) return conn.sendMessage(m.chat, { react: { text: '☁️', key: m.key } });
    user = mentioned[0];
    action = 'promote';
  } else if (/^(promote|\.promote)$/i.test(body)) {
    user = m.quoted?.sender;
    if (!user) return conn.sendMessage(m.chat, { react: { text: '☁️', key: m.key } });
    action = 'promote';
  } else if (/^(demote|\.demote)\s+@/i.test(body)) {
    const mentioned = m.mentionedJid || m.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || !mentioned.length) return conn.sendMessage(m.chat, { react: { text: '☁️', key: m.key } });
    user = mentioned[0];
    action = 'demote';
  } else if (/^(demote|\.demote)$/i.test(body)) {
    user = m.quoted?.sender;
    if (!user) return conn.sendMessage(m.chat, { react: { text: '☁️', key: m.key } });
    action = 'demote';
  } else return;

  user = user.trim();

  // Obtener admins del grupo
  const metadata = await conn.groupMetadata(m.chat);
  const admins = metadata.participants.filter(p => p.admin !== null).map(p => p.id);

  // Validaciones según acción
  if (action === 'promote' && admins.includes(user)) return;
  if (action === 'demote' && !admins.includes(user)) return;

  try {
    await conn.groupParticipantsUpdate(m.chat, [user], action);
  } catch (e) {
    // Puede fallar si el bot no es admin
  }
};

handler.customPrefix = /^(promote|\.promote|demote|\.demote)/i;
handler.command = new RegExp();
handler.group = true;
handler.admin = true;

export default handler;