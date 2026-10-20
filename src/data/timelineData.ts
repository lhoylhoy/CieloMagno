import type { CareerMilestone } from './types'
import { careerMilestonesEarly } from './timelineEarly'
import { careerMilestonesRecent } from './timelineRecent'

export const careerMilestones: CareerMilestone[] = [
  ...careerMilestonesEarly,
  ...careerMilestonesRecent,
]
