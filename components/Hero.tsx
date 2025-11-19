export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute top-40 right-20 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left content */}
      <div className="text-center lg:text-left space-y-8 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border-2 border-red-300 rounded-full text-red-700 font-semibold text-sm shadow-sm hover:shadow-md transition-shadow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          AI-Powered Relationship Intelligence
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-gray-900">See the</span>
            <span className="block bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Red Flags
            </span>
            <span className="block text-gray-900">Before It&apos;s Too Late</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed max-w-2xl">
            Your AI relationship coach that analyzes conversations, spots toxic patterns, and helps you build healthier connections—before the damage is done.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">93%</div>
            <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">50K+</div>
            <div className="text-sm text-gray-600 font-medium">Analyzed Chats</div>
          </div>
          <div className="w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">4.8★</div>
            <div className="text-sm text-gray-600 font-medium">User Rating</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log('Start free analysis')}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Analysis
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log('See how it works')}
            className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-2xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            See How It Works
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Privacy First</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Right side - Interactive visual */}
      <div className="relative lg:scale-110 z-10">
        {/* Phone mockup */}
        <div className="relative mx-auto max-w-sm">
          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm animate-bounce z-20 rotate-3">
            🚩 Red Flag Detected!
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm animate-pulse z-20 -rotate-3">
            ✅ Healthy Boundary
          </div>

          {/* Phone frame */}
          <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              {/* Phone notch */}
              <div className="relative bg-gray-900 h-8 flex items-center justify-center">
                <div className="w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              </div>
              
              {/* App content */}
              <div className="bg-gradient-to-b from-red-50 to-white p-6 space-y-4 h-[600px]">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Analysis Results</h3>
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                </div>

                {/* Health score circle */}
                <div className="relative flex justify-center py-8">
                  <div className="relative">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="#fee2e2" strokeWidth="12" fill="none" />
                      <circle cx="80" cy="80" r="70" stroke="#ef4444" strokeWidth="12" fill="none" 
                        strokeDasharray="440" strokeDashoffset="132" strokeLinecap="round"
                        className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-4xl font-black text-red-600">70%</div>
                      <div className="text-xs font-semibold text-gray-600">Health Score</div>
                    </div>
                  </div>
                </div>

                {/* Insights cards */}
                <div className="space-y-3">
                  <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg">
                    <div className="flex gap-3">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <div className="font-bold text-red-900 text-sm">Pattern Detected</div>
                        <div className="text-xs text-red-700">Dismissive responses to emotions</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg">
                    <div className="flex gap-3">
                      <span className="text-2xl">💚</span>
                      <div>
                        <div className="font-bold text-green-900 text-sm">Strength Found</div>
                        <div className="text-xs text-green-700">Active listening & validation</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-lg">
                    <div className="flex gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <div className="font-bold text-amber-900 text-sm">Recommendation</div>
                        <div className="text-xs text-amber-700">Try "I feel" statements more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>

    </div>
  </div>
</div>
  );
}