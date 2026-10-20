import type { YouthAction } from './types'

export const stickerPack = {
  href: '/campaign/Cielo-2028-Sticker-Pack.zip',
  label: 'Download the sticker pack',
  files: [
    'May Resibo',
    'Bawal ang Budol',
    'Cielo 2028',
    'Ekonomista ng Bayan',
  ],
}

export const youthActions: YouthAction[] = [
  {
    id: 'stickers',
    title: 'Put it on your laptop',
    description:
      'Four original stickers for group chats, laptops, notebooks, and the occasional jeepney window.',
    cta: 'Download stickers',
    kind: 'download',
    href: stickerPack.href,
    accent: 'amber',
  },
  {
    id: 'circle',
    title: 'Start a discussion circle',
    description:
      'Five questions, one budget decoder, and no need to be an economics major. Open the guide, then argue.',
    cta: 'Open the guide',
    kind: 'link',
    href: '/campaign/Discussion-Circle-Guide.html',
    accent: 'crimson',
  },
  {
    id: 'questions',
    title: 'Copy the five questions',
    description:
      'Paste them into a group chat, a class thread, or a notebook. The conversation is the organizing.',
    cta: 'Copy the questions',
    kind: 'copy',
    copyText:
      'CIELO 2028 · Discussion circle\n\n1. Which budget line in your barangay is hardest to see?\n2. What is the difference between a published budget and a transparent budget?\n3. Who bears the cost when health funds are diverted?\n4. Why can a price cap create a shortage?\n5. What would you ask a candidate to publish before election day?',
    accent: 'emerald',
  },
  {
    id: 'campus',
    title: 'Bring it to campus',
    description:
      'A ready-to-send message for org mates, student publications, and classroom discussions.',
    cta: 'Copy the campus message',
    kind: 'copy',
    copyText:
      'Hi! Dr. Cielo Magno has officially declared her candidacy for Senator in 2028. Check out her official campaign website — it has her full public-finance record, 19-page CV, budget decoder, and 2028 legislative agenda: Cielo Magno for Senator 2028 — The People’s Economist.',
    accent: 'blue',
  },
]

export const pledgeMessage =
  'I’m in. I want a 2028 conversation built on receipts, not vibes.'

export const discussionQuestions = [
  'Which budget line in your barangay is hardest to see?',
  'What is the difference between a published budget and a transparent budget?',
  'Who bears the cost when health funds are diverted?',
  'Why can a price cap create a shortage?',
  'What would you ask a candidate to publish before election day?',
]
