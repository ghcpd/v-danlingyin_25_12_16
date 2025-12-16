import React from 'react'

const Tree: React.FC = () => {
  // simple SVG tree with animated lights
  return (
    <div className="w-64 h-80 relative animate-float-slow">
      <svg viewBox="0 0 200 260" className="w-full h-full">
        <defs>
          <linearGradient id="treeGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e7a3b" />
            <stop offset="100%" stopColor="#0b6e3a" />
          </linearGradient>
        </defs>

        <g transform="translate(100,20)">
          <path d="M-60,90 L0,-80 L60,90 Z" fill="url(#treeGrad)" />
          <path d="M-50,40 L0,-20 L50,40 Z" fill="url(#treeGrad)" />
          <path d="M-40,110 L0,20 L40,110 Z" fill="url(#treeGrad)" />

          {/* trunk */}
          <rect x="-12" y="110" width="24" height="40" rx="4" fill="#7a4a2e" />

          {/* lights - circles with blinking animation */}
          <g>
            <circle r="5" className="animate-blink-slow" cx="-20" cy="20" fill="#f59e0b" />
            <circle r="5" className="animate-blink-slow" cx="10" cy="-5" fill="#ef4444" style={{ animationDelay: '200ms' }} />
            <circle r="5" className="animate-blink-slow" cx="-5" cy="40" fill="#60a5fa" style={{ animationDelay: '400ms' }} />
            <circle r="5" className="animate-blink-slow" cx="25" cy="60" fill="#34d399" style={{ animationDelay: '600ms' }} />
            <circle r="5" className="animate-blink-slow" cx="-35" cy="70" fill="#f97316" style={{ animationDelay: '800ms' }} />
            <circle r="5" className="animate-blink-slow" cx="15" cy="95" fill="#a78bfa" style={{ animationDelay: '1000ms' }} />
          </g>

          {/* star */}
          <polygon points="0,-105 -6,-92 -20,-92 -9,-82 -14,-68 0,-76 14,-68 9,-82 20,-92 6,-92" fill="#facc15" />
        </g>
      </svg>
    </div>
  )
}

export default Tree
