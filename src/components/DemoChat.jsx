import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

export default function DemoChat() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm your AI assistant. Ask me anything about your product." },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const id = Date.now();
    setMessages((m) => [...m, { role: "user", content: text, id }, { role: "bot", content: "…", id: id + 1 }]);
    setTimeout(() => {
      setMessages((m) => m.map((msg) => (msg.id === id + 1 ? { ...msg, content: `You said: "${text}"` } : msg)));
    }, 600);
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section id="demo" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Try the demo</h2>
          <p className="mt-3 text-slate-600">Experience a lightweight preview of the chat UX. Responses are simulated in this sandbox.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600 list-disc list-inside">
            <li>Hit Enter to send</li>
            <li>Shift + Enter for a new line</li>
            <li>Messages echo back so you can feel the flow</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col h-[480px]">
          <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3 bg-slate-50/60">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[80%] rounded-2xl px-4 py-2 ${m.role === "user" ? "ml-auto bg-slate-900 text-white" : "bg-white border"}`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="border-t p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                rows={1}
                placeholder="Ask something..."
                className="w-full resize-none rounded-md border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              />
              <button onClick={send} className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
