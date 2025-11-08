import { Rocket, MessageSquare, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">ChatFuse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#demo" className="hover:text-slate-900 transition">Demo</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white hover:bg-slate-50 text-sm">
            <MessageSquare className="h-4 w-4" /> Try Demo
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 text-sm">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
