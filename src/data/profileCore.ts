import type { Profile } from './types'

type ProfileBase = Pick<
  Profile,
  | 'name'
  | 'honorific'
  | 'credential'
  | 'tagline'
  | 'roleLine'
  | 'email'
  | 'room'
  | 'affiliation'
  | 'location'
  | 'shortBio'
  | 'bio'
  | 'focusAreas'
  | 'currentRoles'
  | 'education'
>

export const profileBase: ProfileBase = {
  name: 'Cielo Magno',
  honorific: 'Dr.',
  credential: 'PhD, Law and Public Policy',
  tagline: "The People's Economist",
  roleLine: 'Economist · Professor · Former Undersecretary of Finance',
  email: 'Mdmagno2@up.edu.ph',
  room: 'Room 225, Encarnacion Hall',
  affiliation: 'School of Economics, University of the Philippines Diliman',
  location: 'Quezon City, Philippines',

  shortBio:
    "Dr. Cielo Magno is an economist and professor at the UP School of Economics, a former Undersecretary of Finance (2022–2023), and co-chair of the Open Government Partnership's Global Steering Committee with the Government of Spain (2024–2025). Her work focuses on mining governance, fiscal policy, health economics, and open government.",

  bio: [
    'Dr. Cielo Magno is an economist and professor at the University of the Philippines School of Economics, where she teaches public finance, law and economics, institutional economics, and microeconomics. Her work sits where fiscal policy meets the everyday: mining revenues, medicine prices, local budgets, and the institutions that decide who gets what.',
    'She served as Undersecretary for the Fiscal Policy and Monitoring Group at the Department of Finance from August 2022 to September 2023. In that role she was focal person for the Philippine Extractive Industries Transparency Initiative, chaired the Fiscal Incentives Review Board Technical Committee and the Inter-Agency Investment Promotion Coordination Committee Technical Committee, and served as alternate of the Secretary to the Development Budget Coordination Committee.',
    'Her global leadership includes the Open Government Partnership (OGP) Global Steering Committee (2024–2027) and co-chairing its Global Steering Committee with the Government of Spain (2024–2025). She was a member of the EITI International Board as a civil society representative (2016–2022) and as an implementing country representative (2023).',
    'She holds a PhD in Law and Public Policy from Northeastern University, an MA in Economics from UP Diliman, and a BS in Business Economics from UP Diliman. Before her academic career, she chaired the UP Diliman University Student Council and the Student Council Alliance of the Philippines (1999–2000).',
  ],

  focusAreas: [
    'Mining & extractive governance',
    'Fiscal policy & public finance',
    'Health economics & competition',
    'Transparency & open government',
    'Local governance & federalism',
    'Climate & disaster financing',
  ],

  currentRoles: [
    {
      role: 'Professor',
      org: 'School of Economics, University of the Philippines Diliman',
      period: 'Current',
      note: 'Public finance, law and economics, institutional economics, and microeconomics.',
    },
    {
      role: 'President',
      org: 'Bantay Kita / Publish What You Pay Philippines',
      period: '2024–present',
    },
    {
      role: 'Member, Global Steering Committee',
      org: 'Open Government Partnership',
      period: '2024–2027',
    },
    {
      role: 'Board Member',
      org: 'ABS-CBN Foundation Inc.',
      period: '2024–present',
    },
    {
      role: 'Board Member',
      org: 'Tanghalang Pilipino',
      period: '2024–present',
    },
    {
      role: 'Board Member',
      org: 'Center for Energy, Ecology and Development',
      period: 'Present',
    },
    {
      role: 'Director',
      org: 'Peace and Equity Holdings',
      period: '2024–2027',
    },
  ],

  education: [
    {
      role: 'PhD, Law and Public Policy',
      org: 'Northeastern University, Boston, MA, USA',
      period: 'August 2013',
    },
    {
      role: 'Master of Arts in Economics',
      org: 'University of the Philippines Diliman, Quezon City',
      period: '2001',
    },
    {
      role: 'Bachelor of Science in Business Economics',
      org: 'University of the Philippines Diliman, Quezon City',
      period: '1998',
    },
  ],
}
