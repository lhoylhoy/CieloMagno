import type { BilingualText, CampaignAccent } from './types'

export interface HouseholdPreset {
  id: string
  label: BilingualText
  detail: BilingualText
  monthlyBudget: number
  householdSize: number
  accent: CampaignAccent
}

/**
 * All figures are illustrative estimates, not tax advice. The assumptions are
 * exported so the UI can show its work instead of hiding the math.
 */
export const calculatorAssumptions = {
  population: 110_000_000,
  households: 26_400_000,
  philHealthTransfer: 89_900_000_000,
  akapAllocation: 26_000_000_000,
  oopLow: 15_000,
  oopHigh: 50_000,
  /** Share of household spending subject to 12% VAT. */
  vatAbleShareOfBudget: 0.45,
  vatRate: 0.12,
  /** Illustrative monthly fuel excise embedded in transport and goods. */
  fuelExciseMonthly: 1_200,
  /** Share of a household budget spent on food. */
  foodShareOfBudget: 0.35,
  /** Illustrative annual food inflation drag carried by the household. */
  foodInflationRate: 0.06,
  riceKgPerPersonPerMonth: 10,
  ricePriceGapPerKg: 5,
  minBudget: 8_000,
  maxBudget: 250_000,
  budgetStep: 1_000,
  minHouseholdSize: 1,
  maxHouseholdSize: 8,
} as const

export const householdPresets: HouseholdPreset[] = [
  {
    id: 'minimum',
    label: {
      en: 'Minimum-wage household',
      fil: 'Pamilyang minimum wage',
    },
    detail: {
      en: '₱15,000 a month · 4 people',
      fil: '₱15,000 kada buwan · 4 katao',
    },
    monthlyBudget: 15_000,
    householdSize: 4,
    accent: 'crimson',
  },
  {
    id: 'bpo',
    label: {
      en: 'BPO / worker household',
      fil: 'Pamilyang BPO / manggagawa',
    },
    detail: {
      en: '₱35,000 a month · 4 people',
      fil: '₱35,000 kada buwan · 4 katao',
    },
    monthlyBudget: 35_000,
    householdSize: 4,
    accent: 'amber',
  },
  {
    id: 'middle',
    label: {
      en: 'Middle-class household',
      fil: 'Pamilyang middle class',
    },
    detail: {
      en: '₱60,000 a month · 4 people',
      fil: '₱60,000 kada buwan · 4 katao',
    },
    monthlyBudget: 60_000,
    householdSize: 4,
    accent: 'emerald',
  },
]

export interface HouseholdStakes {
  monthlyBudget: number
  annualBudget: number
  householdSize: number
  incomeTaxMonthly: number
  incomeTaxAnnual: number
  vatMonthly: number
  fuelExciseMonthly: number
  totalTaxMonthly: number
  totalTaxAnnual: number
  effectiveTaxRate: number
  foodSpendMonthly: number
  foodInflationDragMonthly: number
  ricePriceGapMonthly: number
  foodPressureMonthly: number
  foodPressureAnnual: number
  philHealthHouseholdShare: number
  oopLow: number
  oopHigh: number
  oopLowShareOfMonthly: number
  oopHighShareOfMonthly: number
  contestedFunds: number
  contestedFundsPerHousehold: number
  contestedFundsPerHouseholdPerDay: number
}

/** TRAIN individual income tax table, applied to gross annual income. */
export function annualIncomeTax(taxableAnnual: number): number {
  if (taxableAnnual <= 250_000) return 0
  if (taxableAnnual <= 400_000) return (taxableAnnual - 250_000) * 0.15
  if (taxableAnnual <= 800_000) return 22_500 + (taxableAnnual - 400_000) * 0.2
  if (taxableAnnual <= 2_000_000) return 102_500 + (taxableAnnual - 800_000) * 0.25
  if (taxableAnnual <= 8_000_000) return 402_500 + (taxableAnnual - 2_000_000) * 0.3
  return 2_202_500 + (taxableAnnual - 8_000_000) * 0.35
}

export function computeHouseholdStakes(
  monthlyBudget: number,
  householdSize: number,
): HouseholdStakes {
  const a = calculatorAssumptions
  const safeBudget = Math.max(a.minBudget, monthlyBudget)
  const safeSize = Math.min(a.maxHouseholdSize, Math.max(a.minHouseholdSize, householdSize))
  const annualBudget = safeBudget * 12

  const incomeTaxAnnual = annualIncomeTax(annualBudget)
  const incomeTaxMonthly = incomeTaxAnnual / 12
  const vatMonthly = safeBudget * a.vatAbleShareOfBudget * a.vatRate
  const totalTaxMonthly = incomeTaxMonthly + vatMonthly + a.fuelExciseMonthly
  const totalTaxAnnual = totalTaxMonthly * 12

  const foodSpendMonthly = safeBudget * a.foodShareOfBudget
  const foodInflationDragMonthly = foodSpendMonthly * a.foodInflationRate
  const ricePriceGapMonthly =
    safeSize * a.riceKgPerPersonPerMonth * a.ricePriceGapPerKg
  const foodPressureMonthly = foodInflationDragMonthly + ricePriceGapMonthly

  const philHealthHouseholdShare = a.philHealthTransfer / a.households
  const contestedFunds = a.philHealthTransfer + a.akapAllocation
  const contestedFundsPerHousehold = contestedFunds / a.households

  return {
    monthlyBudget: safeBudget,
    annualBudget,
    householdSize: safeSize,
    incomeTaxMonthly,
    incomeTaxAnnual,
    vatMonthly,
    fuelExciseMonthly: a.fuelExciseMonthly,
    totalTaxMonthly,
    totalTaxAnnual,
    effectiveTaxRate: totalTaxMonthly / safeBudget,
    foodSpendMonthly,
    foodInflationDragMonthly,
    ricePriceGapMonthly,
    foodPressureMonthly,
    foodPressureAnnual: foodPressureMonthly * 12,
    philHealthHouseholdShare,
    oopLow: a.oopLow,
    oopHigh: a.oopHigh,
    oopLowShareOfMonthly: a.oopLow / safeBudget,
    oopHighShareOfMonthly: a.oopHigh / safeBudget,
    contestedFunds,
    contestedFundsPerHousehold,
    contestedFundsPerHouseholdPerDay: contestedFundsPerHousehold / 365,
  }
}


const pesoFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
})

export function formatPeso(value: number): string {
  return pesoFormatter.format(Math.round(value))
}

export function formatPesoCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return `₱${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`
  }
  if (value >= 1_000_000) {
    return `₱${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  }
  if (value >= 1_000) {
    return `₱${(value / 1_000).toFixed(0)}K`
  }
  return formatPeso(value)
}

export function formatPercent(ratio: number): string {
  return `${Math.round(ratio * 100)}%`
}


export function buildHouseholdSummary(stakes: HouseholdStakes, isFil: boolean): string {
  if (isFil) {
    return [
      `Tinatayang ${formatPeso(stakes.totalTaxAnnual)} ang binabayaran ng pamilya ko sa buwis kada taon — kasama ang income tax, VAT, at fuel excise.`,
      `Bahagi rin namin ang ${formatPeso(stakes.philHealthHouseholdShare)} sa ₱89.9B PhilHealth transfer, at ${formatPeso(stakes.oopLow)}–${formatPeso(stakes.oopHigh)} ang out-of-pocket risk sa isang seryosong sakit.`,
      'Karapatan ko ang Senador na magbabantay sa bawat linya ng budget. Ika-12 ko: Cielo Magno 2028. May resibo. May prinsipyo.',
    ].join('\n\n')
  }

  return [
    `My household pays an estimated ${formatPeso(stakes.totalTaxAnnual)} a year in taxes — including income tax, VAT, and fuel excise.`,
    `We also carry an estimated ${formatPeso(stakes.philHealthHouseholdShare)} share of the ₱89.9B PhilHealth transfer, and ${formatPeso(stakes.oopLow)}–${formatPeso(stakes.oopHigh)} in out-of-pocket risk for one serious illness.`,
    'I want a Senator who watches every budget line. My 12th vote: Cielo Magno 2028. May resibo. May prinsipyo.',
  ].join('\n\n')
}


export interface UnitEconomics {
  id: string
  amount: string
  value: string
  label: BilingualText
  assumption: BilingualText
  accent: CampaignAccent
}

/**
 * Unit conversions make abstract billions legible. Each conversion is shown
 * with its unit-cost assumption so the reader can audit the arithmetic.
 */
export const unitEconomics: UnitEconomics[] = [
  {
    id: 'chemo',
    amount: '₱89.9B',
    value: '1,798,000',
    label: {
      en: 'chemotherapy sessions',
      fil: 'chemotherapy sessions',
    },
    assumption: {
      en: 'at ₱50,000 per session',
      fil: 'sa ₱50,000 kada session',
    },
    accent: 'crimson',
  },
  {
    id: 'health-centers',
    amount: '₱89.9B',
    value: '8,990',
    label: {
      en: 'rural health centers',
      fil: 'rural health centers',
    },
    assumption: {
      en: 'at ₱10M per center',
      fil: 'sa ₱10M kada center',
    },
    accent: 'emerald',
  },
  {
    id: 'classrooms',
    amount: '₱26B',
    value: '52,000',
    label: {
      en: 'public school classrooms',
      fil: 'silid-aralan sa pampublikong paaralan',
    },
    assumption: {
      en: 'at ₱500,000 per classroom',
      fil: 'sa ₱500,000 kada silid-aralan',
    },
    accent: 'amber',
  },
  {
    id: 'fertilizer',
    amount: '₱26B',
    value: '1.3M',
    label: {
      en: 'farmers with one year of fertilizer support',
      fil: 'magsasaka na may isang taong suporta sa pataba',
    },
    assumption: {
      en: 'at ₱20,000 per farmer',
      fil: 'sa ₱20,000 kada magsasaka',
    },
    accent: 'blue',
  },
]


export const calculatorCopy = {
  eyebrow: {
    en: 'Bantay ng Bulsa Mo',
    fil: 'Bantay ng Bulsa Mo',
  },
  title: {
    en: 'The national budget is not abstract. It is your grocery money.',
    fil: 'Hindi abstract ang national budget. Grocery money mo ito.',
  },
  description: {
    en: 'Pick your household profile. See the taxes you already pay, the health risk you carry, the food pressure you absorb — and the public money a budget watchdog would put on the record.',
    fil: 'Piliin ang profile ng pamilya mo. Tingnan ang buwis na binabayaran mo na, ang health risk na pasan mo, ang food pressure na tinitiis mo — at ang public money na mailalagay sa rekord ng isang budget watchdog.',
  },
  monthlyBudget: {
    en: 'Monthly household budget',
    fil: 'Buwanang budget ng pamilya',
  },
  householdSize: {
    en: 'People in the household',
    fil: 'Katao sa pamilya',
  },
  presetsLabel: {
    en: 'Start with a profile',
    fil: 'Magsimula sa profile',
  },
  taxesTitle: {
    en: 'Taxes you already pay',
    fil: 'Buwis na binabayaran mo na',
  },
  taxesDetail: {
    en: 'Income tax, VAT, and fuel excise — before other national and local charges.',
    fil: 'Income tax, VAT, at fuel excise — bago pa ang ibang national at local charges.',
  },
  healthTitle: {
    en: 'Your PhilHealth exposure',
    fil: 'Ang PhilHealth exposure mo',
  },
  healthDetail: {
    en: 'Your household’s equal share of the ₱89.9B transfer, plus the out-of-pocket risk of one serious illness.',
    fil: 'Pantay na bahagi ng pamilya mo sa ₱89.9B transfer, kasama ang out-of-pocket risk sa isang seryosong sakit.',
  },
  foodTitle: {
    en: 'Food and rice pressure',
    fil: 'Presyon sa pagkain at bigas',
  },
  foodDetail: {
    en: 'The monthly drag from food inflation and the rice price gap — the cost of treating supply like a slogan.',
    fil: 'Buwanang dagdag sa gastos mula sa food inflation at rice price gap — ang halaga ng pagsuporta sa suplay na pawang slogan lang.',
  },
  watchdogTitle: {
    en: 'What a watchdog defends',
    fil: 'Ang ipinagtatanggol ng bantay',
  },
  watchdogDetail: {
    en: 'The contested funds she has already challenged in public, translated into your household’s equal share.',
    fil: 'Ang contested funds na hinamon niya na sa publiko, isinalin sa pantay na bahagi ng pamilya mo.',
  },
  perMonth: {
    en: 'per month',
    fil: 'kada buwan',
  },
  perYear: {
    en: 'per year',
    fil: 'kada taon',
  },
  perDay: {
    en: 'per day',
    fil: 'kada araw',
  },
  householdShare: {
    en: 'equal share per household',
    fil: 'pantay na bahagi kada pamilya',
  },
  ofOneMonth: {
    en: 'of one month’s budget',
    fil: 'ng isang buwang budget',
  },
  unitEconomicsTitle: {
    en: 'What the contested money could buy',
    fil: 'Ano ang kayang bilhin ng pinag-aagawang pondo',
  },
  unitEconomicsHint: {
    en: 'Illustrative conversions. Each card shows the unit cost used.',
    fil: 'Illustrative conversions. Nakalagay sa bawat card ang unit cost na ginamit.',
  },
  methodology: {
    en: 'How this estimate is built',
    fil: 'Paano ginawa ang estimate',
  },
  share: {
    en: 'Share my household stake',
    fil: 'I-share ang stake ng pamilya ko',
  },
  copy: {
    en: 'Copy my household stake',
    fil: 'Kopyahin ang stake ng pamilya ko',
  },
  copied: {
    en: 'Summary copied',
    fil: 'Nakopya ang summary',
  },
  privacyNote: {
    en: 'This calculator runs entirely in your browser. No income or household data is stored or sent.',
    fil: 'Tumatakbo nang buo sa browser mo ang calculator. Walang income o household data ang naka-store o naipapadala.',
  },
}


export const calculatorMethodology: BilingualText[] = [
  {
    en: 'Income tax uses the TRAIN individual brackets on the household’s annualized budget as a single earner, before deductions. A two-earner household will usually pay less.',
    fil: 'Gumagamit ang income tax ng TRAIN individual brackets sa annualized na budget ng pamilya bilang isang earner, bago ang deductions. Karaniwang mas mababa ang binabayaran ng pamilyang may dalawang earner.',
  },
  {
    en: 'VAT assumes 45% of household spending is VAT-able at 12%. Fuel excise is a flat ₱1,200 monthly illustration embedded in transport and goods.',
    fil: 'Ipinapalagay ng VAT na 45% ng gastos ng pamilya ay VAT-able sa 12%. Ang fuel excise ay flat na ₱1,200 kada buwan na illustrative, kasama sa transport at bilihin.',
  },
  {
    en: 'Food pressure assumes 35% of the budget goes to food, a 6% annual food-inflation drag, and a ₱5/kg rice price gap on 10 kg per person per month.',
    fil: 'Ipinapalagay ng food pressure na 35% ng budget ay para sa pagkain, 6% annual food-inflation drag, at ₱5/kg rice price gap sa 10 kg kada tao kada buwan.',
  },
  {
    en: 'The PhilHealth share divides ₱89.9B by 26.4 million households. Out-of-pocket risk uses a ₱15,000–₱50,000 range for one serious illness; actual bills vary widely.',
    fil: 'Hinahati ng PhilHealth share ang ₱89.9B sa 26.4 milyong pamilya. Ang out-of-pocket risk ay ₱15,000–₱50,000 para sa isang seryosong sakit; malaki ang variance sa totoong bill.',
  },
  {
    en: 'The watchdog card divides ₱89.9B + ₱26B by 26.4 million households. It is an equal-share illustration of contested public money — not a promised cash benefit.',
    fil: 'Hinahati ng watchdog card ang ₱89.9B + ₱26B sa 26.4 milyong pamilya. Ito ay equal-share illustration ng contested public money — hindi garantisadong cash benefit.',
  },
]

