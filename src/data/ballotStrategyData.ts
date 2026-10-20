import type { BilingualText, CampaignAccent } from './types'

export interface OversightMechanism {
  id: string
  step: string
  icon: 'finance' | 'bicam' | 'floor' | 'vote'
  title: BilingualText
  power: BilingualText
  detail: BilingualText
  accent: CampaignAccent
}

export interface TrapoContrast {
  id: string
  trapo: BilingualText
  propesor: BilingualText
}

/**
 * The Senate has 24 seats and each voter chooses 12. The "1 in 12" strategy
 * does not ask anyone to abandon a preferred candidate: it reserves the 12th
 * slot for the only technical oversight job on the ballot.
 */
export const senateArithmetic = {
  seats: 24,
  votesPerVoter: 12,
  watchdogSeats: 1,
  termYears: 6,
  households: 26_400_000,
}

export const trapoVsPropesor: TrapoContrast[] = [
  {
    id: 'name',
    trapo: {
      en: 'Name recall, a jingle, and a family name.',
      fil: 'Kilala sa pangalan, jingle, at apelyido.',
    },
    propesor: {
      en: 'A 19-page public record and peer-reviewed research.',
      fil: '19-pahinang pampublikong rekord at peer-reviewed research.',
    },
  },
  {
    id: 'budget',
    trapo: {
      en: 'A lump sum with no line item and no explanation.',
      fil: 'Lump sum na walang linya at walang paliwanag.',
    },
    propesor: {
      en: 'Every budget line read out loud, in public.',
      fil: 'Bawat linya ng budget, binabasa nang malakas sa publiko.',
    },
  },
  {
    id: 'vote',
    trapo: {
      en: 'Votes with the majority, then explains later.',
      fil: 'Sumasabay sa mayorya, magpapaliwanag mamaya.',
    },
    propesor: {
      en: 'Files the petition and asks the question before the vote.',
      fil: 'Naghahain ng petisyon at nagtatanong bago ang boto.',
    },
  },
]

export const oversightMechanisms: OversightMechanism[] = [
  {
    id: 'finance',
    step: '01',
    icon: 'finance',
    title: {
      en: 'Senate Committee on Finance',
      fil: 'Senate Committee on Finance',
    },
    power: {
      en: 'Line-item scrutiny',
      fil: 'Linya-por-linyang pagsusuri',
    },
    detail: {
      en: 'The committee reviews the President’s budget and each agency proposal. Members can question a line, ask for the supporting document, and propose amendments before the General Appropriations Act is voted on.',
      fil: 'Sinusuri ng komite ang budget ng Pangulo at ang proposal ng bawat ahensya. Puwedeng tanungin ang isang linya, hingin ang supporting document, at magpropose ng amendment bago ipasa ang General Appropriations Act.',
    },
    accent: 'crimson',
  },
  {
    id: 'bicam',
    step: '02',
    icon: 'bicam',
    title: {
      en: 'Bicameral conference committee',
      fil: 'Bicameral conference committee',
    },
    power: {
      en: 'Refuse the unexplained insert',
      fil: 'Tanggihan ang hindi maipaliwanag na singit',
    },
    detail: {
      en: 'When the House and Senate versions differ, the bicam reconciles them. A senator on that panel can put an insertion on the public record — and refuse to sign a report that hides it.',
      fil: 'Kapag magkaiba ang bersyon ng House at Senado, pinag-uugnay ito ng bicam. Ang senador sa panel ay puwedeng maglagay ng insertion sa pampublikong rekord — at tumangging pumirma sa ulat na nagtatago nito.',
    },
    accent: 'amber',
  },
  {
    id: 'floor',
    step: '03',
    icon: 'floor',
    title: {
      en: 'Floor interpellation',
      fil: 'Interpellation sa plenaryo',
    },
    power: {
      en: 'Put it on the record',
      fil: 'Ilagay ito sa rekord',
    },
    detail: {
      en: 'Any senator can question a budget sponsor on the floor and ask for documents. The exchange is public, quotable, and much harder to bury than a press release.',
      fil: 'Kahit sinong senador ay puwedeng magtanong sa sponsor ng budget sa plenaryo at humingi ng dokumento. Pampubliko ang usapan, puwedeng i-quote, at mas mahirap itago kaysa press release.',
    },
    accent: 'emerald',
  },
  {
    id: 'vote',
    step: '04',
    icon: 'vote',
    title: {
      en: 'The 24-seat math',
      fil: 'Ang matematika ng 24 puwesto',
    },
    power: {
      en: 'Change the margin',
      fil: 'Baguhin ang bilang',
    },
    detail: {
      en: 'The Senate has 24 seats and each voter chooses 12. One dedicated seat can change committee composition, the vote count on an amendment, and what the public hears in the room.',
      fil: 'May 24 puwesto ang Senado at 12 ang ibinoboto ng bawat botante. Ang isang dedicated na puwesto ay puwedeng magbago ng komposisyon ng komite, ng bilang sa amendment, at ng maririnig ng publiko sa loob ng session hall.',
    },
    accent: 'blue',
  },
]

export const ballotStrategyCopy = {
  eyebrow: {
    en: 'The 1-in-12 strategy',
    fil: 'Ang 1-sa-12 na estratehiya',
  },
  title: {
    en: 'Keep your 11. Lend the 12th to the budget watchdog.',
    fil: 'Panatilihin ang 11. Ilaan ang ika-12 sa bantay ng budget.',
  },
  description: {
    en: 'You do not have to replace your whole slate. Keep the 11 you already trust. Use the 12th slot for the one job no one else on your ballot is trained to do: reading the national budget line by line.',
    fil: 'Hindi mo kailangang palitan ang buong slate mo. Panatilihin ang 11 na pinagkakatiwalaan mo. Ilaan ang ika-12 sa trabahong walang ibang ginagawa sa balota mo: ang basahin ang pambansang budget nang linya-por-linya.',
  },
  ballotLabel: {
    en: 'Your 2028 Senate ballot',
    fil: 'Ang Senate ballot mo sa 2028',
  },
  lockedSlot: {
    en: 'Budget watchdog · locked',
    fil: 'Bantay ng budget · naka-lock',
  },
  openSlot: {
    en: 'Your choice',
    fil: 'Pili mo',
  },
  openSlotHint: {
    en: 'Keep anyone you trust',
    fil: 'Panatilihin kung sino ang gusto mo',
  },
  namedProgress: {
    en: '1 watchdog + {named} of your 11 own choices named',
    fil: '1 bantay + {named} sa 11 mong sariling pili ang pinangalanan',
  },
  reset: {
    en: 'Reset names',
    fil: 'I-reset ang mga pangalan',
  },
  copyPledge: {
    en: 'Copy my 1-in-12 pledge',
    fil: 'Kopyahin ang 1-sa-12 na panata',
  },
  copiedPledge: {
    en: 'Pledge copied',
    fil: 'Nakopya ang panata',
  },
  mechanicsLabel: {
    en: 'How one seat exercises power',
    fil: 'Paano gumagamit ng kapangyarihan ang isang puwesto',
  },
  mechanicsHint: {
    en: 'Tap a mechanism to see what one senator can actually do.',
    fil: 'I-tap ang mekanismo para makita ang totoong kayang gawin ng isang senador.',
  },
  privacyNote: {
    en: 'The names you type stay in this browser. Nothing is stored or sent.',
    fil: 'Nananatili sa browser mo ang mga pangalang itina-type mo. Walang naka-store o naipapadala.',
  },
}

export const ballotChecklist: BilingualText[] = [
  {
    en: 'Keep the 11 you already trust.',
    fil: 'Panatilihin ang 11 na pinagkakatiwalaan mo na.',
  },
  {
    en: 'Name the watchdog in slot 12.',
    fil: 'Ilagay ang bantay sa ika-12 slot.',
  },
  {
    en: 'Ask one family member to do the same.',
    fil: 'Sabihan ang isang kapamilya na gawin din ito.',
  },
  {
    en: 'After the election, check whether the budget is published line by line.',
    fil: 'Pagkatapos ng eleksyon, tingnan kung inilathala ang budget nang linya-por-linya.',
  },
]

export const ballotRealityCheck: BilingualText = {
  en: 'No single senator can unilaterally block a national budget. The 1-in-12 strategy is a voting heuristic, not a guarantee: it puts a dedicated questioner inside the room and a vote on the record.',
  fil: 'Walang isang senador na kayang mag-isa na harangin ang pambansang budget. Ang 1-sa-12 ay isang voting heuristic, hindi garantiya: naglalagay ito ng dedicated na magtatanong sa loob ng session hall at ng boto sa rekord.',
}

/**
 * Builds a ready-to-paste commitment message. Names are optional; the pledge
 * works even if the voter keeps their other 11 choices private.
 */
export function buildBallotPledge(otherNames: string[], isFil: boolean): string {
  const named = otherNames.map((name) => name.trim()).filter(Boolean)
  const list = named.length
    ? named.join(', ')
    : isFil
      ? 'ang 11 na pinagkakatiwalaan ko'
      : 'the 11 I already trust'

  if (isFil) {
    return [
      'Ang 2028 Senate ballot ko: 11 sa mga pinagkakatiwalaan ko + 1 budget watchdog.',
      '',
      'Ika-12: Dr. Cielo Magno — ekonomista, propesor, at petitioner sa Supreme Court laban sa ₱89.9B PhilHealth transfer at ₱26B AKAP.',
      '',
      `Iba ko pang 11: ${list}`,
      '',
      'Bakit? May upuan sa Senado na pwedeng maglagay sa rekord ng bawat linya ng budget. May resibo. May prinsipyo. Cielo Magno 2028.',
    ].join('\n')
  }

  return [
    'My 2028 Senate ballot: the 11 I already trust + 1 budget watchdog.',
    '',
    '12th slot: Dr. Cielo Magno — economist, professor, and Supreme Court petitioner against the ₱89.9B PhilHealth transfer and ₱26B AKAP.',
    '',
    `My other 11: ${list}`,
    '',
    'Why? One seat in the Senate can put every budget line on the public record. May resibo. May prinsipyo. Cielo Magno 2028.',
  ].join('\n')
}

