import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DemoChat from "./components/DemoChat";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <DemoChat />
      </main>
      <footer className="border-t py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} ChatFuse, Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
