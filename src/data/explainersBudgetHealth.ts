import type { Explainer } from './types'

export const explainersBudgetHealth: Explainer[] = [
  {
    id: 'budget-watchdog',
    number: '03',
    title: 'How to read the national budget like a watchdog',
    kicker: 'A field guide to following public money',
    readTime: '4 min read',
    accent: 'blue',
    plainTalk:
      'A national budget is a plan, a law, and a scorecard. It tells you what government says it will do, what it is legally allowed to spend, and — if you follow the money — what actually happened. You do not need to be an economist to ask good questions.',
    body: [
      'Start with the big picture: the proposed budget (NEP), the enacted budget (GAA), and the actual releases and spending. The gaps between these documents are where stories live.',
      'Then zoom into one agency or program. Compare its budget to its mandate and to last year. Look for lump sums, confidential funds, and programs that appear with a new name but the same line item.',
      'Follow procurement. A budget is only a permission to spend; contracts show what was actually bought and from whom. COA reports and procurement notices can confirm or complicate the official narrative.',
      'Finally, connect the line item to a place and a person. Who is supposed to benefit? Is there a measurable target? What would it look like if the program worked?',
    ],
    whyItMatters: [
      'Budgets are moral documents: they reveal priorities.',
      'The most useful questions are specific: which line, which agency, which community?',
      'Transparency only matters when someone reads the document.',
    ],
    myth: {
      myth: 'The budget is too technical for ordinary citizens.',
      reality:
        'The technical parts are real, but the core questions are simple: how much, for whom, spent how, and did it work?',
    },
    terms: [
      {
        term: 'NEP',
        definition: 'The National Expenditure Program — the executive’s proposed budget submitted to Congress.',
      },
      {
        term: 'GAA',
        definition: 'The General Appropriations Act — the budget enacted into law.',
      },
      {
        term: 'COA',
        definition: 'The Commission on Audit, which audits government spending and publishes audit reports.',
      },
      {
        term: 'Lump sum',
        definition: 'A budget allocation without a detailed breakdown of specific projects or items.',
      },
      {
        term: 'Procurement',
        definition: 'The process by which government buys goods, works, and services.',
      },
    ],
    sourceIds: [
      'lgu-fiscal-performance',
      'sourcebook-local-public-finance',
      'bir-corporatization',
    ],
    archivePages: [10, 11],
  },
  {
    id: 'medicine-prices',
    number: '04',
    title: 'Why medicine still feels expensive',
    kicker: 'Competition, prescribing & out-of-pocket costs',
    readTime: '3 min read',
    accent: 'crimson',
    plainTalk:
      'The price on a medicine box is the end of a long chain: manufacturers, distributors, pharmacies, doctors, and insurers all shape it. In a system where households pay a large share out of pocket, even a small price difference can decide whether someone takes the full course.',
    body: [
      'Competition can lower prices — but only when buyers can compare, sellers can enter, and incentives reward cheaper equivalents. Brand loyalty, physician prescribing habits, and limited information can keep cheaper options off the shelf or out of the prescription.',
      'Magno’s research on drug price sensitivity among physicians, pharmaceutical competition, and health financing examines these links. The question is not just “are drugs expensive?” but “which part of the chain is resisting competition?”',
      'Generics, pooled procurement, price transparency, and competition enforcement each target a different link. None is a complete solution on its own.',
      'For young advocates, health economics is a powerful entry point: it connects competition policy, fiscal space, and the daily experience of a family at the pharmacy counter.',
    ],
    whyItMatters: [
      'Out-of-pocket spending turns illness into a financial shock.',
      'Physician prescribing behavior is an economic variable, not just a clinical one.',
      'Competition policy can be a health policy.',
    ],
    myth: {
      myth: 'If a generic exists, everyone will automatically switch to it.',
      reality:
        'Switching depends on prescribing behavior, trust, availability, reimbursement, and information. A generic on a list is not the same as a generic in a household’s hands.',
    },
    terms: [
      {
        term: 'Out-of-pocket spending',
        definition: 'Health costs paid directly by households rather than by insurance or government.',
      },
      {
        term: 'Generic medicine',
        definition: 'A medicine sold under its chemical name, usually after the original patent expires.',
      },
      {
        term: 'Price sensitivity',
        definition: 'How much a buyer’s choice changes when the price changes.',
      },
      {
        term: 'Pooled procurement',
        definition: 'Combining purchases across institutions or governments to negotiate lower prices.',
      },
      {
        term: 'Competition policy',
        definition: 'Rules and enforcement that aim to keep markets contestable and prevent anti-competitive behavior.',
      },
    ],
    sourceIds: [
      'drug-price-sensitivity',
      'pharmaceutical-competition',
      'health-financing-assessment',
    ],
    archivePages: [11, 10, 13],
  },
]
