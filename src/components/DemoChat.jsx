import { useEffect, useRef, useState } from 'react'
import { Send, User, Bot } from 'lucide-react'

function Message({ role, content }) {
  const isUser = role === 'user'
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center shrink-0">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow ${isUser ? 'bg-gray-900 text-white rounded-br-sm' : 'bg-white border border-black/10 rounded-bl-sm'}`}>
        {content}
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 grid place-items-center shrink-0">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}

export default function DemoChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. Ask me anything about your product.' }
  ])
  const [input, setInput] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const send = async () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)

    // Fake latency then simple echo with flair
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: `Here\'s a helpful answer about: "${text}". You can connect data sources and deploy in minutes.` }])
    }, 600)
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Try the embedded chatbot</h2>
            <p className="mt-3 text-gray-600">This is a sandboxed demo. In production, add sources, configure tone, and embed anywhere with a single snippet.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Works with docs, websites, and files</li>
              <li>Streams responses with citations</li>
              <li>Granular controls per tenant</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-black/5 px-4 py-2 text-sm text-gray-600">ChatSpark • Widget</div>
            <div ref={listRef} className="h-80 overflow-y-auto space-y-3 p-4 bg-gray-50">
              {messages.map((m, idx) => (
                <Message key={idx} role={m.role} content={m.content} />
              ))}
            </div>
            <div className="p-3 border-t border-black/10">
              <form
                onSubmit={(e) => { e.preventDefault(); send() }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-xl border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
