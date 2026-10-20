import type { BilingualText, CampaignAccent } from './types'

export interface FamilyReceipt {
  label: BilingualText
  source: string
  url?: string
}

export interface FamilyObjection {
  id: string
  number: string
  question: BilingualText
  shortAnswer: BilingualText
  gcMessage: BilingualText
  receipts: FamilyReceipt[]
  accent: CampaignAccent
}

/**
 * The family group chat is the real battleground. Each card pairs a warm,
 * respectful reply with a public receipt — no insults, no invented numbers.
 */
export const familyObjections: FamilyObjection[] = [
  {
    id: 'not-famous',
    number: '01',
    question: {
      en: '“Why Cielo Magno? She isn’t even famous.”',
      fil: '“Bakit si Cielo Magno? Hindi naman sikat ’yan.”',
    },
    shortAnswer: {
      en: 'She does not need to be famous to be useful. You have 12 Senate votes. Keep the 11 you already trust and lend the 12th to the economist who will read the budget line by line. You are not replacing your whole ballot — you are reserving one seat for oversight.',
      fil: 'Hindi kailangang sikat para maging kapaki-pakinabang. 12 ang senador na ibinoboto mo. Panatilihin ang 11 na gusto mo, at ilaan ang ika-12 sa ekonomistang magbabasa ng budget nang linya-por-linya. Hindi mo binabago ang buong balota — isang puwesto lang para sa pagbabantay.',
    },
    gcMessage: {
      en: 'Tito/Tita, I get the point that she is not famous yet. But we vote for 12 senators, right? We can keep the 11 we already like and use the 12th for Dr. Cielo Magno — a UP economics professor and former Finance Undersecretary. Her job would be to read the national budget line by line and ask where our taxes went. You do not have to change your whole ballot. One seat. She has receipts: she was among the petitioners against the ₱89.9B PhilHealth transfer and the ₱26B AKAP lump sum at the Supreme Court. Here is the official record: https://linktr.ee/cielomagno',
      fil: 'Tito/Tita, gets ko ’yung point na hindi pa siya sikat. Pero 12 naman ang senador na ibinoboto natin, di ba? Puwede nating panatilihin ’yung 11 na gusto natin, tapos ilaan ’yung ika-12 kay Dr. Cielo Magno — UP economics professor at dating Finance Undersecretary. Ang trabaho niya: basahin ang national budget nang linya-por-linya at tanungin kung saan napunta ang buwis natin. Hindi mo kailangang baguhin ang buong balota. Isang puwesto lang. May resibo siya: kasama siya sa mga nagpetisyon sa Supreme Court laban sa ₱89.9B PhilHealth transfer at ₱26B AKAP. Opisyal na record: https://linktr.ee/cielomagno',
    },
    receipts: [
      {
        label: {
          en: 'Supreme Court petition on the ₱89.9B PhilHealth transfer',
          fil: 'Petisyon sa Supreme Court sa ₱89.9B PhilHealth transfer',
        },
        source: 'Inquirer · Aug. 2, 2024',
        url: 'https://newsinfo.inquirer.net/1968876/petition-filed-at-sc-vs-philhealth-fund-transfer-cites-constitutionality',
      },
      {
        label: {
          en: 'Petition on the ₱26B AKAP lump sum',
          fil: 'Petisyon sa ₱26B AKAP lump sum',
        },
        source: 'News5 · July 3, 2025',
        url: 'https://news.tv5.com.ph/breaking/read/groups-professors-ask-sc-to-declare-parts-of-2025-budget-unconstitutional',
      },
    ],
    accent: 'crimson',
  },
  {
    id: 'resigned',
    number: '02',
    question: {
      en: '“Why did she resign from government if she was good?”',
      fil: '“Bakit siya nag-resign sa gobyerno kung magaling siya?”',
    },
    shortAnswer: {
      en: 'Because she refused to defend a rice price cap she knew could backfire. In September 2023, after Executive Order 39 capped rice prices, she posted the supply-and-demand graph she teaches — then stepped down rather than pretend the math was fine.',
      fil: 'Dahil tumanggi siyang ipagtanggol ang rice price cap na alam niyang puwedeng bumalik sa tao. Noong Setyembre 2023, matapos maglagay ng price cap ang Executive Order 39, ipinost niya ang supply-and-demand graph na itinuturo niya — at bumaba sa puwesto kaysa magpanggap na okay ang math.',
    },
    gcMessage: {
      en: 'Actually, that resignation is one of her best receipts. In 2023 the government capped rice prices. As an economist, she knew a price ceiling below the market can create shortages and hoarding. Instead of staying quiet and pretending the math was fine, she resigned from the Department of Finance. She did not lose the argument — she refused to hide it. That is exactly the kind of person I want in the Senate in 2028.',
      fil: 'Actually, ’yung resignation ang isa sa pinakamagandang resibo niya. Noong 2023, nag-price cap sa bigas. Bilang ekonomista, alam niyang ang price ceiling na mas mababa sa market ay puwedeng magdulot ng shortage at hoarding. Instead na manahimik at magpanggap na okay ang math, nag-resign siya sa Department of Finance. Hindi siya natalo sa argumento — tumanggi lang siyang itago ’yun. ’Yan ang tipo ng tao na gusto ko sa Senado sa 2028.',
    },
    receipts: [
      {
        label: {
          en: '“I miss teaching.” The post that led to her resignation',
          fil: '“I miss teaching.” Ang post na nauwi sa resignation',
        },
        source: 'Interaksyon · Sept. 8, 2023',
        url: 'https://interaksyon.philstar.com/politics-issues/2023/09/08/259905/cielo-magnos-exit-a-closer-look-at-facebook-post-that-sparked-her-dof-departure/',
      },
      {
        label: {
          en: '“I had to speak up against the rice price cap.”',
          fil: '“I had to speak up against the rice price cap.”',
        },
        source: 'GMA Integrated News · Sept. 12, 2023',
        url: 'https://www.gmanetwork.com/news/topstories/nation/881959/cielo-magno-says-she-had-to-speak-up-vs-rice-price-cap/story/',
      },
    ],
    accent: 'amber',
  },
  {
    id: 'book-smart',
    number: '03',
    question: {
      en: '“She’s just a UP professor. What does she know about ordinary hardship?”',
      fil: '“Puro libro lang alam ng UP professor, walang alam sa hirap ng tao.”',
    },
    shortAnswer: {
      en: 'Her work is not confined to the classroom. For more than 25 years she has worked on mining communities, public health financing, food supply, and open government — through Bantay Kita, the Open Government Partnership, and public-interest research. The petitions put that work on the public record.',
      fil: 'Hindi lang classroom ang trabaho niya. Mahigit 25 taon siyang nagtatrabaho sa mga komunidad sa pagmimina, health financing, food supply, at open government — sa pamamagitan ng Bantay Kita, Open Government Partnership, at public-interest research. Nakalagay sa pampublikong rekord ang mga petisyon.',
    },
    gcMessage: {
      en: 'Fair point. But she is not only in the classroom. For more than 25 years she has worked on public finance and governance — including mining communities through Bantay Kita, health financing, and open government. Her Supreme Court petitions are not theory: they are about real public money, the ₱89.9B PhilHealth transfer and the ₱26B AKAP lump sum. Her 19-page CV and research are on the website; you can check whether the receipts are real.',
      fil: 'Fair point ’yan. Pero hindi lang siya classroom. Mahigit 25 taon siyang nagtatrabaho sa public finance at governance — kasama ang mga komunidad sa pagmimina sa pamamagitan ng Bantay Kita, health financing, at open government. ’Yung mga petisyon niya sa Supreme Court, hindi ’yun teorya — actual na pera ng tao ang pinag-uusapan: ₱89.9B PhilHealth at ₱26B AKAP. Nasa website ang 19-page CV at research niya; puwede mong tingnan kung may resibo ba talaga.',
    },
    receipts: [
      {
        label: {
          en: 'The 19-page source CV and research vault',
          fil: 'Ang 19-pahinang source CV at research vault',
        },
        source: 'Cielo Magno for Senator 2028 · public record',
      },
      {
        label: {
          en: 'Bantay Kita / Publish What You Pay Philippines',
          fil: 'Bantay Kita / Publish What You Pay Philippines',
        },
        source: 'Affiliation · President, 2024–present',
      },
      {
        label: {
          en: 'Open Government Partnership Global Steering Committee',
          fil: 'Open Government Partnership Global Steering Committee',
        },
        source: '2024–2027 · co-chair with Spain, 2024–2025',
        url: 'https://www.opengovpartnership.org/',
      },
    ],
    accent: 'emerald',
  },
  {
    id: 'wasted-vote',
    number: '04',
    question: {
      en: '“She’ll lose anyway. The trapos will still win.”',
      fil: '“Matalo lang ’yan, trapo pa rin mananalo.”',
    },
    shortAnswer: {
      en: 'The Senate has 24 seats and you choose 12. A reformist does not need to replace the whole Senate; she needs one dedicated seat inside the room. The “wasted vote” line is the trap. The 1-in-12 strategy is the exit: keep your 11, use the 12th for oversight.',
      fil: 'May 24 puwesto ang Senado at 12 ang pinipili mo. Hindi kailangang palitan ng reformist ang buong Senado; kailangan niya ng isang dedicated na puwesto sa loob ng session hall. Ang “sayang ang boto” ay ang bitag. Ang 1-sa-12 na estratehiya ang labasan: panatilihin ang 11, gamitin ang ika-12 para sa pagbabantay.',
    },
    gcMessage: {
      en: 'Totoo na mahirap, but she does not need to become president to make a difference. We vote for 12 senators out of 24 seats. If even one economist gets in, there is already someone inside the committee hearings, interpellations, and budget line items. The “sayang ang boto” argument comes from the old game. In 2028, let us try: keep your 11 + 1 budget watchdog. If she loses, at least the questions are on the record. If she wins, your household has a voice in the room.',
      fil: 'Totoo na mahirap, pero hindi naman kailangang maging pangulo siya para may magbantay. 12 ang senador na ibinoboto natin sa 24 na puwesto. Kahit isang ekonomista lang ang pumasok, may isa nang tao sa committee hearings, interpellations, at budget line items. ’Yung “sayang ang boto” argument ay galing sa lumang laro. Sa 2028, subukan natin: 11 sa gusto mo + 1 bantay ng kaban. Kung hindi siya manalo, at least may naglagay ng mga tanong sa rekord. Pero kung manalo, may boses ang bulsa mo.',
    },
    receipts: [
      {
        label: {
          en: 'How one Senate seat exercises budget power',
          fil: 'Paano gumagamit ng budget power ang isang puwesto sa Senado',
        },
        source: '1-in-12 strategy · Senate Committee on Finance, bicam, interpellation',
      },
      {
        label: {
          en: 'The 2025 General Appropriations Act is public',
          fil: 'Pampubliko ang 2025 General Appropriations Act',
        },
        source: 'Department of Budget and Management',
        url: 'https://www.dbm.gov.ph/index.php/budget-documents/2025/2025-general-appropriations-act',
      },
    ],
    accent: 'blue',
  },
]

export const familyGCCopy = {
  eyebrow: {
    en: 'Pamilya GC Cheat Sheet',
    fil: 'Pamilya GC Cheat Sheet',
  },
  title: {
    en: 'Win the family chat without losing the relationship.',
    fil: 'Panaluin ang family chat nang hindi nasisira ang relasyon.',
  },
  description: {
    en: 'Four objections you will hear at the dining table or in the group chat — with respectful, receipt-backed replies you can copy in one tap.',
    fil: 'Apat na objection na maririnig mo sa hapag-kainan o group chat — may magalang at may-resibong sagot na pwedeng kopyahin sa isang tap.',
  },
  questionLabel: {
    en: 'What they might say',
    fil: 'Maaaring sabihin nila',
  },
  answerLabel: {
    en: 'Say it like this',
    fil: 'Sabihin mo nang ganito',
  },
  receiptsLabel: {
    en: 'The receipts',
    fil: 'Ang mga resibo',
  },
  copyCta: {
    en: 'Copy for the GC',
    fil: 'Kopyahin para sa GC',
  },
  copiedCta: {
    en: 'Copied — paste in Messenger/Viber',
    fil: 'Nakopya — i-paste sa Messenger/Viber',
  },
  shareCta: {
    en: 'Share this reply',
    fil: 'I-share ang sagot na ito',
  },
  etiquette: {
    en: 'Tone check: listen first, avoid “trapo” as an insult, and never invent a number. The goal is a relationship and a receipt — not a debate trophy.',
    fil: 'Tone check: makinig muna, iwasang gamitin ang “trapo” bilang insulto, at huwag mag-imbento ng numero. Ang layunin ay relasyon at resibo — hindi trophy sa debate.',
  },
  localOnly: {
    en: 'Copied text goes straight to your clipboard. Nothing is posted automatically.',
    fil: 'Deretso sa clipboard ang kokopyahin. Walang awtomatikong ipopost.',
  },
}

