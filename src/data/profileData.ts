import type { Profile } from './types'
import { profileBase } from './profileCore'
import { teachingRoles } from './profileTeaching'
import { globalLeadership, governmentRoles } from './profileLeadership'
import { affiliations, awards } from './profileAffiliations'
import { programRoles, studentLeadership } from './profileGrassroots'

export const profile: Profile = {
  ...profileBase,
  teaching: teachingRoles,
  governmentRoles,
  globalLeadership,
  affiliations,
  awards,
  studentLeadership,
  programRoles,
}
