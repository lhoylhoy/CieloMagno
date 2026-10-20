import type { Explainer } from './types'

export const explainersPriceMining: Explainer[] = [
  {
    id: 'price-ceilings',
    number: '01',
    title: 'Why price ceilings can backfire',
    kicker: 'Prices, shortages & the rice question',
    readTime: '3 min read',
    accent: 'amber',
    plainTalk:
      'A price cap makes a product look cheaper on the shelf. But if the cap sits below what it costs to produce or import, sellers may supply less, quality can slip, and the “cheap” good can disappear. The sticker price is not the same as the real cost to households.',
    body: [
      'Start with a simple market: buyers want more when prices fall, while sellers are less eager to supply when they cannot cover costs. A ceiling below the market price pulls in the first effect and pushes away the second. The gap often shows up as queues, rationing, or informal markets.',
      'In food, the effect can be especially sharp because supply responds slowly. Rice harvests do not appear overnight, and imports depend on contracts, shipping, and timing. A cap can blunt a price spike in the short run, but it can also discourage the next planting or import cycle.',
      'That does not mean governments should do nothing. The design question is who absorbs the shock: a broad price cap, a targeted transfer, a buffer stock, or competition reforms? Each has a different fiscal cost — and a different winner.',
      'Magno’s early work examined rice trade liberalization and food security; her later research on drug pricing looks at how prices respond to market structure and prescribing behavior. The common thread: look past the sticker.',
    ],
    whyItMatters: [
      'A cap is a transfer, not a magic wand — someone pays for the difference.',
      'Short-run relief can become a long-run supply problem.',
      'Targeted support often costs less than suppressing prices across the board.',
    ],
    myth: {
      myth: 'A price ceiling makes food affordable for everyone.',
      reality:
        'It can make the price look affordable while reducing what is actually available. Affordability depends on supply, income support, and competition — not the cap alone.',
    },
    terms: [
      {
        term: 'Price ceiling',
        definition: 'A legal maximum price for a good or service.',
      },
      {
        term: 'Supply response',
        definition: 'How much producers are willing and able to sell when prices or costs change.',
      },
      {
        term: 'Elasticity',
        definition: 'How sensitive buyers or sellers are to a change in price.',
      },
      {
        term: 'Targeted transfer',
        definition: 'Cash or in-kind support given to specific households rather than to everyone through the price.',
      },
    ],
    sourceIds: ['drug-price-sensitivity', 'pharmaceutical-competition'],
    archivePages: [11, 10],
  },
  {
    id: 'mining-wealth',
    number: '02',
    title: 'Where does mining wealth really go?',
    kicker: 'Royalties, local shares & the public balance sheet',
    readTime: '4 min read',
    accent: 'emerald',
    plainTalk:
      'A mine can generate billions in exports and still leave a host community with damaged roads and underfunded schools. The difference is not just how much is dug up; it is how the fiscal regime captures value, how shares are shared, and whether the money is spent where it was promised.',
    body: [
      'The Philippines has a layered mining fiscal regime: national taxes, royalties and excise taxes, and local government shares. Each layer has its own rules, timing, and transparency. A headline revenue figure can hide who actually received the money.',
      'Magno’s work evaluates the large-scale mining fiscal regime, subnational fiscal payments, and the mining-for-development framework. It asks a practical question: are the fiscal tools designed to convert a finite resource into durable public goods?',
      'The answer depends on more than tax rates. It depends on valuation, transfer pricing, incentives, local capacity, and whether citizens can see the payments. Transparency is not a nice-to-have; it is what turns a promise into a budget line.',
      'For students, the takeaway is a habit: follow the money through every layer — extraction, valuation, payment, allocation, spending, and outcome.',
    ],
    whyItMatters: [
      'Natural resources are finite; the fiscal return should outlast the mine.',
      'Local shares only matter if they arrive and are spent on local priorities.',
      'Beneficial ownership and contract transparency reveal who benefits.',
    ],
    myth: {
      myth: 'Mining automatically makes a community richer.',
      reality:
        'Only the part of the value that is captured, shared, and spent well can become durable development. Extraction without those links can leave a community poorer in environmental terms.',
    },
    terms: [
      {
        term: 'Fiscal regime',
        definition: 'The set of taxes, royalties, fees, and sharing rules that determine how much government captures from a resource.',
      },
      {
        term: 'Royalty',
        definition: 'A payment to the resource owner, often based on the value or volume of what is extracted.',
      },
      {
        term: 'Excise tax',
        definition: 'A tax on a specific good, such as minerals, levied at a defined point in the supply chain.',
      },
      {
        term: 'Subnational share',
        definition: 'The portion of resource revenue allocated to local governments or communities.',
      },
      {
        term: 'Beneficial ownership',
        definition: 'The identity of the real people who ultimately own or control a company.',
      },
    ],
    sourceIds: [
      'mining-fiscal-regime',
      'subnational-mining-payments',
      'mining-for-development-framework',
      'corruption-civic-space',
    ],
    archivePages: [11, 13],
  },
]
