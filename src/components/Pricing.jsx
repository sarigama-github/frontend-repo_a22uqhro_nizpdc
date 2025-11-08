import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    caption: 'Free for personal projects',
    features: [
      '1 chatbot',
      '2 sources',
      'Community support',
    ],
    cta: 'Start free'
  },
  {
    name: 'Pro',
    price: '$39',
    caption: 'For growing products',
    features: [
      'Unlimited chatbots',
      '10 sources per bot',
      'Branding + Embeds',
      'Email support',
    ],
    cta: 'Start 14-day trial'
  },
  {
    name: 'Scale',
    price: '$199',
    caption: 'For teams & enterprises',
    features: [
      'SAML/SSO, RBAC',
      'Priority support',
      'Dedicated workspace',
      'Custom limits',
    ],
    cta: 'Contact sales'
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Choose a plan that grows with your business.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <div className="text-3xl font-bold text-gray-900">{t.price}<span className="text-base font-normal text-gray-500">/mo</span></div>
              </div>
              <p className="mt-1 text-sm text-gray-600">{t.caption}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex justify-center w-full rounded-xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium shadow hover:bg-black transition">
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
