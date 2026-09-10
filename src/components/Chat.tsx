import { useState } from 'react'
import type { Message } from '../types/message'
import { MessageList } from './MessageList'

export function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <main className="h-dvh bg-stone-200 text-stone-900 overflow-hidden">
      <div className="mx-auto flex h-full max-w-2xl flex-col">
        <MessageList messages={messages} />
      </div>
    </main>
  )
}

