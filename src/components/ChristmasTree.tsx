import React from 'react'

const ChristmasTree: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-col items-center gap-1">
        {/* Tree top */}
        <div className="relative">
          {/* Tier 1 */}
          <div className="flex justify-center gap-1 mb-1">
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.8s' }}></div>
          </div>
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-christmas-green"></div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="relative mt-2">
          <div className="flex justify-center gap-1 mb-1">
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '0.7s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '0.9s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '1.1s' }}></div>
            <div className="w-2 h-2 bg-christmas-red rounded-full animate-blink" style={{ animationDelay: '1.3s' }}></div>
          </div>
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-16 border-r-16 border-b-28 border-l-transparent border-r-transparent border-b-christmas-green"></div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="relative mt-2">
          <div className="flex justify-center gap-1 mb-1">
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.15s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.35s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.55s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.75s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.95s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '1.15s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '1.35s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '1.55s' }}></div>
            <div className="w-2 h-2 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '1.75s' }}></div>
          </div>
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-20 border-r-20 border-b-36 border-l-transparent border-r-transparent border-b-christmas-green"></div>
          </div>
        </div>

        {/* Star on top */}
        <div className="mt-4 text-4xl animate-glow">⭐</div>

        {/* Trunk */}
        <div className="mt-4 bg-amber-900 w-4 h-6"></div>
      </div>
    </div>
  )
}

export default ChristmasTree
