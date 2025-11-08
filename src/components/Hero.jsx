import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8n6bCz9JmG9q6A3S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative max-w-3xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-1 rounded-full border bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm">
          <Star className="h-3.5 w-3.5 text-yellow-500" />
          <span>Launch your AI chatbot SaaS in minutes</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Build, train, and deploy chatbots your users love
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Connect your knowledge base, customize tone, and embed anywhere. Scalable multi-tenant platform with analytics out of the box.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#demo" className="inline-flex px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">Try the demo</a>
          <a href="#pricing" className="inline-flex px-5 py-3 rounded-md border bg-white hover:bg-slate-50">View pricing</a>
        </div>
      </div>
    </section>
  );
}
