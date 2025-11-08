import { Bot, BarChart3, FileText, Shield } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Tenant-ready Chatbots',
    desc: 'Spin up isolated workspaces for each customer with custom branding and permissions.'
  },
  {
    icon: FileText,
    title: 'Docs & Web Ingestion',
    desc: 'Index websites, PDFs, and knowledge bases with automatic updates and embeddings.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Feedback',
    desc: 'Track conversations, deflection rate, and user satisfaction in real time.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'SSO/SAML, role-based access, and audit logs out of the box.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship a chatbot SaaS</h2>
          <p className="mt-3 text-gray-600">From ingestion to analytics, we handle the heavy lifting so you can focus on your product.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
