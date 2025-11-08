import { Star } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6bOeZgIkrbF1cfmH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-500" />
            New: GPT-4.1 & file uploads
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Launch your AI chatbot SaaS in minutes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ChatSpark helps you embed a smart assistant into your product, support portal, or docs. Branded, multi-tenant, analytics-ready.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow hover:bg-blue-700 transition">
              Try the live demo
            </a>
            <a href="#pricing" className="inline-flex justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium shadow border border-black/10 hover:bg-gray-50 transition">
              View pricing
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
