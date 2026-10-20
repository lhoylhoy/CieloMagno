export type ImageCreditCategory = 'candidate' | 'institution' | 'pillar'

export interface ImageCredit {
  /** Stable key used by components and data records. */
  id: string
  category: ImageCreditCategory
  /** Public path served by Vite. */
  path: string
  /** Optional smaller derivative for compact UI. */
  thumbPath?: string
  width: number
  height: number
  title: string
  /** Short, visible caption used next to the photo. */
  caption: string
  photographer: string
  sourceName: string
  sourceUrl: string
  license: string
  /** Omit for campaign media that is not published under an open license. */
  licenseUrl?: string
  /** Optional rights context for campaign-owned or permission-based images. */
  rightsNote?: string
  alt: string
  /** Plain-language note about any crop, resize, or recompression. */
  changes?: string
}

export const imageCredits: ImageCredit[] = [
  {
    id: 'cielo-portrait',
    category: 'candidate',
    path: '/images/cielo-magno/cielo-magno-portrait.jpg',
    thumbPath: '/images/cielo-magno/cielo-magno-portrait-thumb.jpg',
    width: 960,
    height: 720,
    title: 'Dr. Cielo Magno, official portrait',
    caption: 'Official campaign portrait',
    photographer: 'Cielo Magno official profile',
    sourceName: 'Official Linktree profile',
    sourceUrl: 'https://linktr.ee/cielomagno',
    license: 'Campaign media',
    alt: 'Dr. Cielo Magno smiling with her arms crossed in a warmly lit hallway',
    rightsNote:
      'Official campaign media from Dr. Magno’s verified profile, published by the Cielo Magno for Senator 2028 campaign.',
    changes:
      'Source profile photo (863 × 863) cropped to 4:3 for the dossier, resized to 960 × 720, and recompressed.',
  },
  {
    id: 'cielo-full',
    category: 'candidate',
    path: '/images/cielo-magno/cielo-magno-full.jpg',
    thumbPath: '/images/cielo-magno/cielo-magno-full-thumb.jpg',
    width: 863,
    height: 863,
    title: 'Dr. Cielo Magno, official portrait (full frame)',
    caption: 'Official portrait, full frame',
    photographer: 'Cielo Magno official profile',
    sourceName: 'Official Linktree profile',
    sourceUrl: 'https://linktr.ee/cielomagno',
    license: 'Campaign media',
    alt: 'Full-frame official portrait of Dr. Cielo Magno with her arms crossed',
    rightsNote:
      'Official campaign media from Dr. Magno’s verified profile, served at source resolution for press and campaign use.',
    changes: 'Served at the native 863 × 863 profile resolution; metadata stripped.',
  },
  {
    id: 'cielo-og',
    category: 'candidate',
    path: '/images/cielo-magno/cielo-magno-og.jpg',
    thumbPath: '/images/cielo-magno/cielo-magno-og-thumb.jpg',
    width: 1200,
    height: 630,
    title: 'Official portrait, social share card',
    caption: 'Open Graph / social share card',
    photographer: 'Cielo Magno official profile',
    sourceName: 'Official Linktree profile',
    sourceUrl: 'https://linktr.ee/cielomagno',
    license: 'Campaign media',
    alt: 'Dr. Cielo Magno smiling beside the line “May bagong option na kayo”',
    rightsNote:
      'Official campaign media from Dr. Magno’s verified profile, composed into the official Cielo 2028 social share card.',
    changes: 'Official portrait composed into a 1200 × 630 social card and recompressed.',
  },
  {
    id: 'upse',
    category: 'institution',
    path: '/images/institutions/up-school-of-economics.jpg',
    thumbPath: '/images/institutions/up-school-of-economics-thumb.jpg',
    width: 1200,
    height: 786,
    title: 'Entrance to the UP School of Economics, José Encarnación Jr. Hall',
    caption: 'UP School of Economics, Quezon City',
    photographer: 'Brly31415',
    sourceName: 'Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Entrance_to_the_UP_School_of_Economics_Jose_Encarnacion_Jr._Hall.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    alt: 'Entrance wall of the UP School of Economics José Encarnación Jr. Hall',
    changes: 'Resized to 1200 px wide and recompressed for the web.',
  },
  {
    id: 'supreme-court',
    category: 'institution',
    path: '/images/institutions/supreme-court-philippines.jpg',
    thumbPath: '/images/institutions/supreme-court-philippines-thumb.jpg',
    width: 1200,
    height: 900,
    title: 'Supreme Court of the Philippines',
    caption: 'Supreme Court of the Philippines, Manila',
    photographer: 'Mike Gonzalez (TheCoffee)',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Supreme_Court_of_the_Philippines.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    alt: 'Facade of the Supreme Court of the Philippines in Manila',
    changes: 'Resized for the web; a 480 px thumbnail is used in compact receipts.',
  },
  {
    id: 'kalusugan',
    category: 'pillar',
    path: '/images/pillars/kalusugan.jpg',
    thumbPath: '/images/pillars/kalusugan-thumb.jpg',
    width: 1200,
    height: 863,
    title: 'Barangay health workers inoculating children, General Trias, Cavite',
    caption: 'Barangay health workers, General Trias, Cavite',
    photographer: 'Avito C. Dalan / Philippine News Agency',
    sourceName: 'Wikimedia Commons (PNA)',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Barangay_health_workers_inoculate_young_children_up_to_59_months_old_against_rubella,_polio,_and_measles_in_Barangay_Santiago_in_General_Trias,_Cavite_on_February_1,_2021_(Pna-47030).jpg',
    license: 'Public domain',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Copyright_tags#Public_domain',
    alt: 'A barangay health worker giving an oral vaccine to a young child',
    changes: 'Resized to 1200 px wide and recompressed for the web.',
  },
  {
    id: 'pagkain',
    category: 'pillar',
    path: '/images/pillars/pagkain.jpg',
    thumbPath: '/images/pillars/pagkain-thumb.jpg',
    width: 1200,
    height: 900,
    title: 'Bulakenyo farmers drying palay, Angat, Bulacan',
    caption: 'Palay drying, Angat, Bulacan',
    photographer: 'FBenjr123',
    sourceName: 'Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Bulakenyo_farmers_Palay_drying_with_Walis_Tingting_05.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    alt: 'Farmers drying palay along a road in Angat, Bulacan',
    changes: 'Resized to 1200 px wide and recompressed for the web.',
  },
  {
    id: 'yaman',
    category: 'pillar',
    path: '/images/pillars/yaman.jpg',
    thumbPath: '/images/pillars/yaman-thumb.jpg',
    width: 1200,
    height: 874,
    title: 'Eagle Cement quarry, San Ildefonso, Bulacan',
    caption: 'Quarry and processing plant, San Ildefonso, Bulacan',
    photographer: 'Lawrence Ruiz',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eagle_Cement_Mine.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    alt: 'Aerial view of the Eagle Cement quarry and processing plant in Bulacan',
    changes: 'Resized to 1200 px wide and recompressed for the web.',
  },
  {
    id: 'kabataan',
    category: 'pillar',
    path: '/images/pillars/kabataan.jpg',
    thumbPath: '/images/pillars/kabataan-thumb.jpg',
    width: 1200,
    height: 903,
    title: 'Academic Oval, University of the Philippines Diliman',
    caption: 'Academic Oval, UP Diliman, Quezon City',
    photographer: 'Ralff Nestor Nacor',
    sourceName: 'Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Academic_Oval,_U.P._Diliman,_April_2023.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    alt: 'Tree-lined Academic Oval at the University of the Philippines Diliman',
    changes: 'Resized to 1200 px wide and recompressed for the web.',
  },
]

export const imageCreditGroups: {
  id: ImageCreditCategory
  label: string
  description: string
}[] = [
  {
    id: 'candidate',
    label: 'Candidate portrait',
    description:
      'The official campaign portrait and its derivatives. This portrait is official campaign media; context photography remains public domain or openly licensed.',
  },
  {
    id: 'institution',
    label: 'Institutions',
    description:
      'The classroom and the courtroom: public-interest institutions that anchor the record.',
  },
  {
    id: 'pillar',
    label: 'Policy pillars',
    description:
      'Contextual, openly licensed photography for the 2028 agenda planks. These are illustrative scenes, not campaign events.',
  },
]

const creditsById = imageCredits.reduce<Partial<Record<string, ImageCredit>>>(
  (index, credit) => {
    index[credit.id] = credit
    return index
  },
  {},
)

export function getImageCredit(id?: string): ImageCredit | undefined {
  return id ? creditsById[id] : undefined
}
