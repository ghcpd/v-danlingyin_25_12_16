function ChristmasTree() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="relative">
          {/* Tree Structure */}
          <div className="flex flex-col items-center">
            {/* Star on top */}
            <div className="w-8 h-8 bg-christmas-gold rounded-full mb-2 animate-glow"></div>
            
            {/* Tree layers */}
            <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-christmas-green mb-[-10px] relative">
              {/* Blinking lights on layer 1 */}
              <div className="absolute top-4 left-[-30px] w-3 h-3 bg-red-500 rounded-full animate-blink"></div>
              <div className="absolute top-8 right-[-35px] w-3 h-3 bg-yellow-400 rounded-full animate-blink" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[80px] border-b-christmas-lightgreen mb-[-10px] relative">
              {/* Blinking lights on layer 2 */}
              <div className="absolute top-6 left-[-45px] w-3 h-3 bg-blue-400 rounded-full animate-blink" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-12 right-[-50px] w-3 h-3 bg-red-500 rounded-full animate-blink" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-10 left-[-10px] w-3 h-3 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[100px] border-b-christmas-green relative">
              {/* Blinking lights on layer 3 */}
              <div className="absolute top-8 left-[-60px] w-3 h-3 bg-yellow-400 rounded-full animate-blink" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute top-16 right-[-65px] w-3 h-3 bg-blue-400 rounded-full animate-blink" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute top-12 left-[-20px] w-3 h-3 bg-red-500 rounded-full animate-blink" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute top-20 right-[-30px] w-3 h-3 bg-christmas-gold rounded-full animate-blink" style={{ animationDelay: '0.8s' }}></div>
            </div>
            
            {/* Tree trunk */}
            <div className="w-12 h-16 bg-amber-800 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChristmasTree
