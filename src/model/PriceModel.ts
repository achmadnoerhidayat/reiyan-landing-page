export interface PlanFeature {
  text: string
  isAvailable: boolean
}

export interface PricePlan {
  id: number
  name: string
  price: number
  renewalPrice: number
  description: string
  isPopular?: boolean
  features: PlanFeature[]
  ctaText: string
}
