import { Rocket, MessageSquare } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">ChatSpark</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#demo" className="hover:text-gray-900 transition">Live Demo</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </nav>
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black transition">
          <MessageSquare className="h-4 w-4" />
          Start Free Trial
        </a>
      </div>
    </header>
  )
}
