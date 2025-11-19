import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-indigo-50">
  {/* Playful background elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
        <span className="text-2xl">🚩</span>
        <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Your Relationship Toolkit</span>
      </div>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
        What We Actually Do
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
        AI-powered relationship insights that help you communicate better, love healthier, and actually understand what&apos;s going on
      </p>
    </div>

    {/* Services Grid - Unique Layouts */}
    <div className="space-y-8 lg:space-y-12">
      
      {/* Service 1 - Featured Large Card */}
      <div className="group relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-rose-500/50 transition-all duration-500 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-2xl">💬</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Most Popular</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              AI Communication Analysis
            </h3>
            
            <p className="text-lg text-rose-50 mb-8 leading-relaxed">
              Upload your texts, DMs, emails, or voice messages and get instant AI-powered insights. We analyze tone, patterns, and emotional dynamics to show you exactly what's working (and what's not) in your conversations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Multi-Platform Support</p>
                  <p className="text-rose-100 text-sm">WhatsApp, SMS, Email, Slack, Discord - we&apos;ve got you covered</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Real-Time Coaching</p>
                  <p className="text-rose-100 text-sm">Get live suggestions during tough conversations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Voice Message Analysis</p>
                  <p className="text-rose-100 text-sm">We transcribe and analyze tone, emotion, and intent</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="AI analyzing text conversations on smartphone screen" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border-4 border-rose-100 transform group-hover:scale-105 transition-transform duration-500">
              <div className="text-4xl font-black text-rose-600 mb-1">94%</div>
              <div className="text-sm text-gray-600 font-semibold">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services 2 & 3 - Side by Side Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Service 2 */}
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-indigo-100 hover:border-indigo-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative p-8">
            <div className="mb-6 relative inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-500">
                📊
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
              Your Relationship Dashboard
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              See your communication patterns visualized in a way that actually makes sense. Track red flags, celebrate green flags, and understand your personal contribution to every relationship dynamic.
            </p>
            
            <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="Colorful dashboard showing relationship health metrics and communication patterns" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-semibold text-gray-700">Visual breakdown of communication health</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-lg">
                <span className="text-2xl">📈</span>
                <span className="text-sm font-semibold text-gray-700">Track relationship trajectory over time</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                <span className="text-2xl">🔍</span>
                <span className="text-sm font-semibold text-gray-700">Compare patterns across all your relationships</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="group relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjMiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="relative p-8 h-full flex flex-col">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-500">
                💡
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              Personalized Coaching That Actually Helps
            </h3>
            
            <p className="text-purple-100 mb-6 leading-relaxed flex-grow">
              No more generic advice. Get specific, actionable recommendations based on YOUR communication style, YOUR triggers, and YOUR actual conversations. It&apos;s like having a relationship coach in your pocket 24/7.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <div className="text-white font-bold mb-1">Conflict Resolution Strategies</div>
                    <div className="text-purple-200 text-sm">Tailored to your specific situation</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🚪</span>
                  <div>
                    <div className="text-white font-bold mb-1">Should I Stay or Go?</div>
                    <div className="text-purple-200 text-sm">Data-driven guidance on repair vs. end</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🗣️</span>
                  <div>
                    <div className="text-white font-bold mb-1">Communication Style Feedback</div>
                    <div className="text-purple-200 text-sm">Know your strengths and blind spots</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="Person receiving personalized relationship coaching on their phone" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Full Width Unique Layout */}
      <div className="group relative bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-500">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          
          <div className="lg:col-span-2 p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="text-2xl">🔮</span>
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Game Changer</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Multi-Relationship Pattern Recognition
            </h3>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Here&apos;s the truth bomb: if every relationship ends the same way, you might be the common denominator. Our AI cross-references patterns across your romantic, family, and work relationships to help you see YOUR blind spots.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100">
              <div className="text-sm font-semibold text-orange-600 mb-2 uppercase tracking-wider">What You&apos;ll Discover</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">●</span>
                  <span className="text-gray-700 font-medium">Repeated patterns across different relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">●</span>
                  <span className="text-gray-700 font-medium">Your personal communication blind spots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">●</span>
                  <span className="text-gray-700 font-medium">Early warning signs before things go south</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">●</span>
                  <span className="text-gray-700 font-medium">Predictive compatibility scoring</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 relative p-8 lg:p-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-100 transform group-hover:-rotate-2 transition-transform duration-500">
                    <div className="text-3xl mb-2">❤️</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">Romantic</div>
                    <div className="text-xs text-gray-600">3 relationships analyzed</div>
                    <div className="mt-3 flex gap-1">
                      <div className="h-2 flex-1 bg-rose-200 rounded"></div>
                      <div className="h-2 flex-1 bg-rose-400 rounded"></div>
                      <div className="h-2 flex-1 bg-rose-600 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-100 transform group-hover:rotate-1 transition-transform duration-500">
                    <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">Family</div>
                    <div className="text-xs text-gray-600">5 relationships analyzed</div>
                    <div className="mt-3 flex gap-1">
                      <div className="h-2 flex-1 bg-indigo-200 rounded"></div>
                      <div className="h-2 flex-1 bg-indigo-400 rounded"></div>
                      <div className="h-2 flex-1 bg-indigo-300 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 transform group-hover:-rotate-1 transition-transform duration-500">
                    <div className="text-3xl mb-2">💼</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">Work</div>
                    <div className="text-xs text-gray-600">7 relationships analyzed</div>
                    <div className="mt-3 flex gap-1">
                      <div className="h-2 flex-1 bg-purple-200 rounded"></div>
                      <div className="h-2 flex-1 bg-purple-500 rounded"></div>
                      <div className="h-2 flex-1 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 transform group-hover:rotate-2 transition-transform duration-500">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">Friends</div>
                    <div className="text-xs text-gray-600">12 relationships analyzed</div>
                    <div className="mt-3 flex gap-1">
                      <div className="h-2 flex-1 bg-green-300 rounded"></div>
                      <div className="h-2 flex-1 bg-green-500 rounded"></div>
                      <div className="h-2 flex-1 bg-green-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center insight card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl p-6 shadow-2xl border-4 border-white max-w-xs group-hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-white font-black text-lg mb-1">Your Pattern</div>
                  <div className="text-orange-100 text-xs mb-3">Common denominator detected</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-white text-xs font-semibold">You avoid conflict in 89% of interactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 rounded-2xl p-8 shadow-2xl">
        <div className="text-left">
          <div className="text-white font-black text-2xl mb-2">Ready to level up your relationships?</div>
          <div className="text-purple-100">Start your free trial today. No credit card required.</div>
        </div>
        <button className="flex-shrink-0 px-8 py-4 bg-white text-purple-600 font-black rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap">
          Get Started Free →
        </button>
      </div>
    </div>
  </div>
</section>
  );
}