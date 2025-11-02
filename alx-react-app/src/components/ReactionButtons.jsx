import React, { useState } from 'react'

const REACTIONS = [
  { key: 'like', emoji: '👍', label: 'Like' },
  { key: 'love', emoji: '❤️', label: 'Love' },
  { key: 'laugh', emoji: '😂', label: 'Haha' },
  { key: 'sad', emoji: '😢', label: 'Sad' },
]

export default function ReactionButtons() {
  const [counts, setCounts] = useState({
    like: 0,
    love: 0,
    laugh: 0,
    sad: 0,
  })

  const handleClick = (key) => {
    setCounts(prev => ({ ...prev, [key]: prev[key] + 1 }))
  }

  return (
    <div className="reactions">
      {REACTIONS.map(r => (
        <button
          key={r.key}
          className="reaction-btn"
          aria-label={r.label}
          onClick={() => handleClick(r.key)}
        >
          <span className="emoji">{r.emoji}</span>
          <span className="count">{counts[r.key]}</span>
        </button>
      ))}
    </div>
  )
}
