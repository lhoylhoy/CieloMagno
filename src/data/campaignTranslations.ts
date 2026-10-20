import type { CampaignAccent } from './types'

export interface SectorCoalition {
  id: string
  label: { en: string; fil: string }
  tag: { en: string; fil: string }
  pitch: { en: string; fil: string }
  actionTitle: { en: string; fil: string }
  shareMessage: string
  emailSubject: string
  accent: CampaignAccent
}

export const coalitionSectors: SectorCoalition[] = [
  {
    id: 'all',
    label: { en: 'Voters & Families', fil: 'Mga Botante at Pamilya' },
    tag: { en: 'Nationwide', fil: 'Buong Bansa' },
    pitch: {
      en: 'Every peso in the national budget comes from your taxes and everyday purchases. Join neighbors who want a Senator who reads the budget line by line and guards public funds.',
      fil: 'Bawat piso sa national budget ay galing sa buwis at bilihin natin. Sumama sa mga pamilyang gusto ng Senador na binabasa ang budget nang linya-por-linya at binabantayan ang kaban ng bayan.',
    },
    actionTitle: {
      en: 'Share the 2028 voter pitch with your family or barangay chat',
      fil: 'I-share ang 2028 voter pitch sa family o barangay group chat',
    },
    shareMessage:
      'May bagong option na tayo sa 2028: Dr. Cielo Magno para sa Senado — Ekonomista, UP Professor, at dating Finance Undersecretary na nanindigan sa presyo ng bigas at kumuwestiyon sa ₱89.9B PhilHealth transfer at ₱26B AKAP sa Supreme Court. May resibo, may prinsipyo, may plano.',
    emailSubject: 'Cielo 2028 — Community & Barangay Chapter',
    accent: 'crimson',
  },
  {
    id: 'health',
    label: { en: 'Health Workers & Patients', fil: 'Health Workers at Pasyente' },
    tag: { en: 'Kalusugan', fil: 'Kalusugan' },
    pitch: {
      en: 'PhilHealth contributions belong to patients, nurses, doctors, and barangay health workers — not unprogrammed pork. Help organize hospitals, clinics, and health advocates.',
      fil: 'Ang pondo ng PhilHealth ay para sa pasyente, nurse, doktor, at barangay health workers — hindi pambayad sa unprogrammed funds. Tumulong mag-organisa sa mga ospital at komunidad.',
    },
    actionTitle: {
      en: 'Share the PhilHealth ₱89.9B receipt with health workers',
      fil: 'I-share ang resibo sa ₱89.9B PhilHealth petition sa mga health worker',
    },
    shareMessage:
      'Kalusugan, hindi negosyo: Isa si Dr. Cielo Magno sa mga nag-petisyon sa Supreme Court laban sa paglipat ng ₱89.9B pondo ng PhilHealth. Sa 2028, may boses ang health workers at pasyente sa Senado.',
    emailSubject: 'Cielo 2028 — Health Sector & Advocates',
    accent: 'emerald',
  },
  {
    id: 'workers',
    label: { en: 'Workers, Farmers & Commuters', fil: 'Manggagawa, Magsasaka at Komyuter' },
    tag: { en: 'Sahod at Pagkain', fil: 'Sahod at Pagkain' },
    pitch: {
      en: 'Food security needs irrigation, cold storage, and farmgate support — not Band-Aid price caps. And Filipino workers deserve decent local jobs, not forced migration.',
      fil: 'Ang murang pagkain ay galing sa suporta sa magsasaka, irigasyon, at imbakan — hindi sa pakitang-taong price cap. At ang manggagawang Pilipino ay dapat may marangal na sahod dito sa bansa.',
    },
    actionTitle: {
      en: 'Share the food & jobs plan with coworkers and unions',
      fil: 'I-share ang plano sa pagkain at trabaho sa mga katrabaho',
    },
    shareMessage:
      'Bakit nag-resign si Usec. Cielo Magno noong 2023? Dahil ipinaglaban niya na ang tunay na solusyon sa presyo ng bigas ay suporta sa magsasaka at suplay, hindi basta price cap. Ngayon, tumatakbo siya sa Senado sa 2028!',
    emailSubject: 'Cielo 2028 — Workers & Farmers Coalition',
    accent: 'amber',
  },
  {
    id: 'youth',
    label: { en: 'Students, Teachers & Youth', fil: 'Kabataan, Estudyante at Guro' },
    tag: { en: 'First Wave', fil: 'Unang Alon' },
    pitch: {
      en: 'Turn classrooms, student councils, and org threads into budget watchdogs. Use the explainers, run a 5-question discussion circle, and bring Dr. Magno to your campus.',
      fil: 'Gawing bantay-budget ang bawat klase, student council, at org. Gamitin ang mga explainer, magbuo ng discussion circle, at dalhin ang laban sa inyong kampus.',
    },
    actionTitle: {
      en: 'Copy the campus & org mobilization message',
      fil: 'Kopyahin ang mensahe para sa kampus at org',
    },
    shareMessage:
      'Hi! Dr. Cielo Magno is running for Senator in 2028. Check out her official campaign website — it has her full public-finance record, Supreme Court petitions, budget decoder, and 2028 legislative agenda. May resibo, may prinsipyo!',
    emailSubject: 'Cielo 2028 — Campus & Youth Chapter',
    accent: 'blue',
  },
  {
    id: 'ofw',
    label: { en: 'Overseas Filipinos & Civic Orgs', fil: 'OFWs at Good Governance Groups' },
    tag: { en: 'Global & Civic', fil: 'Global at Sibiko' },
    pitch: {
      en: 'Remittances and taxes keep the economy afloat. Demand a Senate that audits confidential funds, enforces mining transparency, and passes the Anti-Political Dynasty Law.',
      fil: 'Remittance at buwis ng Pilipino ang bumubuhay sa ekonomiya. Ipaglaban natin ang Senadong bumubusisi sa confidential funds, nagbabantay sa kita ng mina, at kontra-dinastiya.',
    },
    actionTitle: {
      en: 'Share the good-governance receipt with overseas & civic circles',
      fil: 'I-share ang good-governance record sa OFW at civic groups',
    },
    shareMessage:
      'Bawal ang budol sa budget! Dr. Cielo Magno — former DOF Undersecretary, OGP Global Co-Chair, at petitioner laban sa OVP confidential funds at political dynasties — ay tumatakbo sa Senado sa 2028.',
    emailSubject: 'Cielo 2028 — OFW & Good Governance Chapter',
    accent: 'crimson',
  },
]

export const pillarFilTranslations: Record<
  string,
  {
    problem: string
    plan: string
    receipt: string
    statLabel: string
  }
> = {
  kalusugan: {
    problem:
      'Kapag ginagawang pantapal sa budget ang pondo ng PhilHealth, hindi nawawala ang bayarin — bumabagsak ito sa bulsa ng pasyente, ospital, at health workers.',
    plan:
      'Ipagbawal ang pagkuha sa pondo ng PhilHealth, gawing bukas ang bawat kontrata at procurement, at sukatin ang tunay na serbisyong pangkalusugan.',
    receipt:
      'Isa siya sa mga naghain ng petisyon sa Supreme Court noong 2024 laban sa paglipat ng ₱89.9 bilyong pondo ng PhilHealth papunta sa unprogrammed appropriations.',
    statLabel: 'Pondong PhilHealth na ipinaglaban',
  },
  budget: {
    problem:
      'Ang mga lump sum, unprogrammed funds, at ghost projects ay sadyang ginagawang magulo ang budget para mahirap bantayan at madaling abusuhin.',
    plan:
      'Ilathala nang real-time ang bawat linya ng gastos, buksan ang datos sa publiko, at panagutin ang mga nasa likod ng ghost projects at secret funds.',
    receipt:
      'Kasama siya sa 2025 Supreme Court petition na kumuwestiyon sa ₱26-bilyong AKAP lump sum at iba pang probisyon ng 2025 General Appropriations Act.',
    statLabel: 'AKAP lump sum na kinuwestiyon',
  },
  pagkain: {
    problem:
      'Ang price cap na walang plano sa suplay ay nakakapagpababa lang ng karatula habang nauubos ang bigas sa palengke. Magsasaka pa rin angipit sa pataba, krudo, at bagyo.',
    plan:
      'Mamuhunan sa irigasyon, post-harvest storage, transportasyon, at lokal na ani. Gamitin ang tamang datos bago magpataw ng price control.',
    receipt:
      'Noong Set. 1, 2023, ipinost niya ang supply-and-demand graph na naging mitsa ng kanyang pagbibitiw sa DOF. Hindi ito teorya lang: tungkol ito sa bigas at magsasaka.',
    statLabel: 'Ang graph ng paninindigan',
  },
  yaman: {
    problem:
      'Madalas, naiiwan sa mga komunidad ang hukay, polusyon, at gastos sa kalusugan mula sa pagmimina habang napupunta sa iilan ang kita.',
    plan:
      'Magpatupad ng patas na buwis sa mina, mahigpit na EITI transparency, tunay na pahintulot ng komunidad, at garantisadong rehabilitasyon ng kalikasan.',
    receipt:
      'Nagsilbi siya sa EITI International Board, namumuno sa Bantay Kita, at may malawak na pananaliksik sa tamang pagbubuwis sa likas na yaman.',
    statLabel: 'Pandaigdigang lupon sa transparency',
  },
  kabataan: {
    problem:
      'Maraming kabataang manggagawa ang napipilitang pumasok sa endo, barat na sahod, o mangibang-bansa dahil kulang ang maayos na trabaho rito.',
    plan:
      'Palakasin ang lokal na industriya at digital jobs, itugma ang edukasyon sa tunay na trabaho, at ipatupad ang proteksyon sa manggagawa.',
    receipt:
      'Mahigit 25 taon na siyang nagtuturo ng ekonomiks at public finance — at naninindigang dapat konektado ang silid-aralan sa marangal na hanapbuhay.',
    statLabel: 'Taon ng pagtuturo at paninindigan',
  },
}

export const budgetScenarioFilTranslations: Record<
  string,
  {
    label: string
    context: string
    verdict: string
  }
> = {
  philhealth: {
    label: 'Sobrang pondo umano ng PhilHealth',
    context:
      'Inilipat ang hindi nagamit na subsidiya ng PhilHealth papunta sa unprogrammed appropriations ng pambansang budget.',
    verdict:
      'Kinuwestiyon sa Supreme Court ang legalidad ng paglilipat sa ilalim ng Universal Health Care Act. Isa si Cielo Magno sa mga nag-petisyon.',
  },
  ovp: {
    label: 'OVP confidential funds',
    context:
      'Ang ₱125-milyong confidential funds na inilipat sa Office of the Vice President noong 2022 ay nagastos sa loob ng 11 araw. Kita ang kabuuang halaga, pero hindi ang detalyadong pinaggamitan.',
    verdict:
      'Kasama si Cielo Magno — pati sina Christian Monsod, Barry Gutierrez, at iba pa — sa humiling sa Supreme Court na ideklarang labag sa Konstitusyon ang ₱125M transfer at ipabalik ito sa kaban ng bayan.',
  },
  akap: {
    label: 'AKAP lump sum',
    context:
      'Isang malaking lump-sum allocation sa 2025 General Appropriations Act na kinuwestiyon kung paano isiningit at hinati-hati.',
    verdict:
      'Isang petisyon noong 2025 ang humiling sa Supreme Court na ideklarang unconstitutional ang ₱26-bilyong AKAP allocation at iba pang bahagi ng budget.',
  },
  gaa: {
    label: 'Ang 2025 GAA',
    context:
      'Inilalathala ng Department of Budget and Management ang General Appropriations Act para makita ng publiko.',
    verdict:
      'Bukas sa publiko ang dokumento. Ang susunod na tanong: bawat piso ba ay detalyado, nababantayan, at nagagamit ayon sa batas? Simula lang ng pagbabantay ang paglalathala.',
  },
  dynasty: {
    label: 'Pagbabawal sa political dynasty',
    period: '1987 → 2025',
    context:
      'Malinaw sa 1987 Constitution na dapat ipagbawal ang political dynasties, pero hanggang ngayon ay hindi pa nagpapasa ng batas ang Kongreso.',
    verdict:
      'Naghain si Cielo Magno ng petisyon sa Supreme Court para atasan ang Kongreso na tuparin ang utos ng Konstitusyon at magpasa ng Anti-Political Dynasty Law.',
  } as { label: string; context: string; verdict: string },
}

export const budgetPriorityFilTranslations: Record<
  string,
  {
    label: string
    description: string
  }
> = {
  health: {
    label: 'Kalusugan',
    description: 'Protektahan ang PhilHealth at siguraduhing ramdam ng pasyente ang benepisyo.',
  },
  budget: {
    label: 'Bukas na budget',
    description: 'Tanggalin ang lump sums at ghost projects.',
  },
  food: {
    label: 'Pagkain at magsasaka',
    description: 'Suportahan ang ani at suplay bago mag-price cap.',
  },
  wealth: {
    label: 'Yaman ng bayan',
    description: 'Singilin ang tamang bahagi mula sa pagmimina at likas-yaman.',
  },
  youth: {
    label: 'Kabataan at sahod',
    description: 'Lumikha ng marangal na trabaho sa loob ng bansa.',
  },
}


export interface SupporterSector {
  id: string
  code: string
  label: { en: string; fil: string }
  blurb: { en: string; fil: string }
  accent: CampaignAccent
}

/** Sectors used by the client-side supporter pass generator. */
export const supporterSectors: SupporterSector[] = [
  {
    id: 'bantay',
    code: 'BAN',
    label: {
      en: 'Bantay ng Kaban ng Bayan',
      fil: 'Bantay ng Kaban ng Bayan',
    },
    blurb: {
      en: 'For every voter who wants a budget watchdog in the Senate.',
      fil: 'Para sa bawat botanteng gusto ng budget watchdog sa Senado.',
    },
    accent: 'crimson',
  },
  {
    id: 'health',
    code: 'HLT',
    label: {
      en: 'Health Workers for Cielo',
      fil: 'Health Workers para kay Cielo',
    },
    blurb: {
      en: 'For nurses, doctors, and barangay health workers.',
      fil: 'Para sa nurse, doktor, at barangay health worker.',
    },
    accent: 'emerald',
  },
  {
    id: 'students',
    code: 'STU',
    label: {
      en: 'Students for a Transparent Budget',
      fil: 'Estudyante para sa Transparent na Budget',
    },
    blurb: {
      en: 'For campuses that want the receipts, not the rhetoric.',
      fil: 'Para sa mga kampong gusto ng resibo, hindi retorika.',
    },
    accent: 'amber',
  },
  {
    id: 'teachers',
    code: 'TCH',
    label: {
      en: 'Teachers for Cielo',
      fil: 'Guro para kay Cielo',
    },
    blurb: {
      en: 'For educators who teach the next generation to read the budget.',
      fil: 'Para sa mga guro na nagtuturo sa susunod na henerasyon na basahin ang budget.',
    },
    accent: 'blue',
  },
  {
    id: 'bpo',
    code: 'BPO',
    label: {
      en: 'BPO Workers for Fair Taxes',
      fil: 'BPO Workers para sa Patas na Buwis',
    },
    blurb: {
      en: 'For night-shift workers carrying the tax burden.',
      fil: 'Para sa night-shift workers na pasan ang buwis.',
    },
    accent: 'amber',
  },
  {
    id: 'farmers',
    code: 'FAR',
    label: {
      en: 'Farmers & Commuters for Cielo',
      fil: 'Magsasaka at Komyuter para kay Cielo',
    },
    blurb: {
      en: 'For food security built on supply, not price-cap slogans.',
      fil: 'Para sa food security na nakatayo sa suplay, hindi sa price-cap slogan.',
    },
    accent: 'emerald',
  },
  {
    id: 'ofw',
    code: 'OFW',
    label: {
      en: 'OFWs for a Honest Budget',
      fil: 'OFW para sa Tapat na Budget',
    },
    blurb: {
      en: 'For overseas Filipinos sending money home to a budget they cannot see.',
      fil: 'Para sa OFW na nagpapadala ng pera sa budget na hindi nila nakikita.',
    },
    accent: 'blue',
  },
  {
    id: 'youth',
    code: 'YTH',
    label: {
      en: 'Youth for the 1-in-12 Strategy',
      fil: 'Kabataan para sa 1-sa-12 na Estratehiya',
    },
    blurb: {
      en: 'For first-time and young voters who want their 12th slot to matter.',
      fil: 'Para sa first-time at young voters na gusto may saysay ang ika-12 slot.',
    },
    accent: 'crimson',
  },
]


export const supporterCardCopy = {
  eyebrow: {
    en: 'Your digital supporter pass',
    fil: 'Ang digital supporter pass mo',
  },
  title: {
    en: 'Put your name on the 1-in-12.',
    fil: 'Ilagay ang pangalan mo sa 1-sa-12.',
  },
  description: {
    en: 'Make a personalized campaign pass for Instagram Stories, Facebook, TikTok, or X. Your name, your sector, your commitment — rendered in your browser.',
    fil: 'Gumawa ng personalized campaign pass para sa Instagram Stories, Facebook, TikTok, o X. Pangalan mo, sektor mo, commitment mo — gawa sa browser mo.',
  },
  nameLabel: {
    en: 'First name or nickname',
    fil: 'Pangalan o palayaw',
  },
  namePlaceholder: {
    en: 'e.g. Maria',
    fil: 'hal. Maria',
  },
  sectorLabel: {
    en: 'Your sector or advocacy',
    fil: 'Sektor o adbokasiya mo',
  },
  anonymous: {
    en: 'Bantay ng Kaban',
    fil: 'Bantay ng Kaban',
  },
  previewLabel: {
    en: 'Live preview',
    fil: 'Live preview',
  },
  serialLabel: {
    en: 'Supporter no.',
    fil: 'Supporter no.',
  },
  passLabel: {
    en: 'Fan-made pass',
    fil: 'Fan-made pass',
  },
  cardTagline: {
    en: '12 votes. 1 budget watchdog.',
    fil: '12 boto. 1 bantay ng budget.',
  },
  downloadPng: {
    en: 'Download PNG',
    fil: 'I-download ang PNG',
  },
  downloadSvg: {
    en: 'Download SVG',
    fil: 'I-download ang SVG',
  },
  copyCaption: {
    en: 'Copy caption',
    fil: 'Kopyahin ang caption',
  },
  copiedCaption: {
    en: 'Caption copied',
    fil: 'Nakopya ang caption',
  },
  generating: {
    en: 'Rendering…',
    fil: 'Ginagawa…',
  },
  pngError: {
    en: 'PNG rendering failed in this browser. Try the SVG download or take a screenshot of the preview.',
    fil: 'Hindi nag-render ang PNG sa browser na ito. Subukan ang SVG download o i-screenshot ang preview.',
  },
  privacyNote: {
    en: 'Your name stays on this device. No account, no upload, no tracking.',
    fil: 'Nananatili sa device mo ang pangalan. Walang account, upload, o tracking.',
  },
}

export function buildSupporterCaption(
  name: string,
  sector: string,
  serial: string,
  isFil: boolean,
): string {
  if (isFil) {
    return [
      `Ako si ${name}, at kasama ako sa ${sector}.`,
      `Ika-12 ko sa 2028: Dr. Cielo Magno — ang budget watchdog ng Senado.`,
      `Fan-made supporter pass ${serial}. 12 boto. 1 bantay ng budget. #CieloMagno2028 #BantayNgKaban`,
    ].join('\n')
  }

  return [
    `I'm ${name}, and I stand with ${sector}.`,
    `My 12th vote in 2028: Dr. Cielo Magno — the Senate's budget watchdog.`,
    `Fan-made supporter pass ${serial}. 12 votes. 1 budget watchdog. #CieloMagno2028 #BantayNgKaban`,
  ].join('\n')
}

