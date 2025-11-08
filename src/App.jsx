import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DemoChat from './components/DemoChat'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoChat />
        <Pricing />
      </main>
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ChatSpark, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition">Terms</a>
            <a href="#" className="hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
