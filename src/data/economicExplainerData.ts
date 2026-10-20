import type { Explainer } from './types'
import { explainersPriceMining } from './explainersPriceMining'
import { explainersBudgetHealth } from './explainersBudgetHealth'

export const explainers: Explainer[] = [
  ...explainersPriceMining,
  ...explainersBudgetHealth,
]
