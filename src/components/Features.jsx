import { Bot, BarChart3, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Multi-tenant bots",
    desc: "Isolated data per workspace with role-based access and custom themes.",
  },
  {
    icon: FileText,
    title: "Knowledge ingestion",
    desc: "Sync docs, URLs, and files. Automatic chunking, embeddings, and updates.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Track sessions, satisfaction, fallback rate, and top questions over time.",
  },
  {
    icon: Shield,
    title: "Security & controls",
    desc: "PII redaction, rate limits, domain allowlists, and audit logs included.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center">
          Everything you need to launch
        </h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Production-grade features that make it simple to ship delightful assistants.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
