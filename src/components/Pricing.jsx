import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    features: ["1 workspace", "2K messages", "Basic analytics", "Email support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/mo",
    features: ["Up to 5 workspaces", "50K messages", "Advanced analytics", "Priority support"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    features: ["Unlimited workspaces", "SLA & SSO", "Export & APIs", "Dedicated support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center">Pricing</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Simple, transparent plans that grow with you.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${tier.highlight ? "ring-2 ring-slate-900" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded-full">Most popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 grid place-items-center">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md py-2.5 text-sm font-medium border ${tier.highlight ? "bg-slate-900 text-white border-slate-900" : "bg-white hover:bg-slate-50"}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
