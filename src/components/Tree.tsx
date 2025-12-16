import React from 'react'

export default function Tree() {
  return (
    <div className="tree-wrapper flex flex-col items-center animate-float">
      <svg viewBox="0 0 200 260" className="w-64 h-80">
        {/* layered triangles for tree */}
        <polygon points="100,10 20,120 180,120" fill="#0b6d4f" />
        <polygon points="100,70 30,170 170,170" fill="#0a5f44" />
        <polygon points="100,130 40,220 160,220" fill="#084d36" />

        {/* lights - animated with CSS delays inline */}
        <circle className="light" cx="80" cy="60" r="5" fill="#ffd166" style={{ animation: 'blink 1.4s infinite ease-in-out', animationDelay: '0s' }} />
        <circle className="light" cx="120" cy="80" r="5" fill="#ff6b6b" style={{ animation: 'blink 1.4s infinite ease-in-out', animationDelay: '0.3s' }} />
        <circle className="light" cx="60" cy="110" r="5" fill="#f5f5f5" style={{ animation: 'blink 1.5s infinite ease-in-out', animationDelay: '0.6s' }} />
        <circle className="light" cx="140" cy="130" r="5" fill="#ffd166" style={{ animation: 'blink 1.4s infinite ease-in-out', animationDelay: '0.9s' }} />
        <circle className="light" cx="100" cy="160" r="6" fill="#60a5fa" style={{ animation: 'blink 1.2s infinite ease-in-out', animationDelay: '0.2s' }} />

        {/* star */}
        <polygon points="100,4 106,18 120,18 110,26 116,40 100,32 84,40 90,26 80,18 94,18" fill="#ffd166" />

        {/* trunk */}
        <rect x="82" y="220" width="36" height="40" rx="4" fill="#7a4b2a" />
      </svg>
    </div>
  )
}
