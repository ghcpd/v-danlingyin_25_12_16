import React from 'react'

export default function Tree() {
  // ornaments: positions and colors
  const ornaments = [
    { cx: 50, cy: 35, color: '#ffd54f', delay: '0s' },
    { cx: 36, cy: 50, color: '#ff6b6b', delay: '0.2s' },
    { cx: 64, cy: 50, color: '#90caf9', delay: '0.4s' },
    { cx: 28, cy: 68, color: '#f48fb1', delay: '0.6s' },
    { cx: 72, cy: 68, color: '#a5d6a7', delay: '0.9s' }
  ]

  return (
    <div className="flex justify-center items-center p-8">
      <div className="tree-wrapper animate-float-slow" aria-hidden>
        <svg viewBox="0 0 100 120" width="220" height="264" className="mx-auto">
          {/* star */}
          <polygon points="50,6 54,20 68,20 56,28 60,42 50,34 40,42 44,28 32,20 46,20" fill="#ffeb3b" />

          {/* three tiers of the tree */}
          <path d="M10 48 L50 14 L90 48 Z" fill="#0f9d58" />
          <path d="M16 68 L50 38 L84 68 Z" fill="#0b7b45" />
          <path d="M22 88 L50 62 L78 88 Z" fill="#066736" />

          {/* trunk */}
          <rect x="42" y="92" width="16" height="20" rx="2" fill="#6d4c41" />

          {/* ornaments / lights */}
          {ornaments.map((o, i) => (
            <circle
              key={i}
              cx={o.cx}
              cy={o.cy}
              r="3.8"
              fill={o.color}
              className="tree-ornament animate-blink-fast"
              style={{ animationDelay: o.delay }}
            />
          ))}

          {/* subtle glow */}
          <ellipse cx="50" cy="112" rx="22" ry="5" fill="rgba(15,157,88,0.12)" />
        </svg>
      </div>
    </div>
  )
}
