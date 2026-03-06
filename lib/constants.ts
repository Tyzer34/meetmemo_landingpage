// Pricing constants for MeetMemo
export const PRICING = {
  currency: '€',
  pro: {
    monthly: 9,
    yearly: 90, // €90/year = €7.50/month equivalent
  },
  enterprise: {
    monthly: 19,
    yearly: 190,
  },
} as const;

export type PricingPlan = 'starter' | 'pro' | 'enterprise';
