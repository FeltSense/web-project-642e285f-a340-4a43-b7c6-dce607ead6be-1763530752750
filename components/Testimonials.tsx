import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16 space-y-4">
      <div className="inline-block">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
          <span className="text-xl">🚩</span>
          Real Stories, Real Growth
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-gray-900">
        They spotted the{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            red flags
          </span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1"></span>
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Real people, real insights, real relationship transformations
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
          ✅
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Sarah Chen"
              className="rounded-full border-4 border-purple-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
              🚩
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Sarah Chen</h3>
            <p className="text-sm text-gray-500">Marketing Manager, 29</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            "Red Flags analyzed 6 months of messages with my ex and showed me <span className="font-bold text-red-600">I was apologizing 3x more than him</span> for things that weren&apos;t my fault. Uploaded my new relationship convos after 2 months—<span className="font-bold text-green-600">zero red flags, 87% green flags</span>. Finally found someone who matches my energy!"
          </p>
          
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-red-500">📊</span>
              <span className="font-semibold">Analyzed 2,400+ messages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
          💼
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Marcus Johnson"
              className="rounded-full border-4 border-blue-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
              💬
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Marcus Johnson</h3>
            <p className="text-sm text-gray-500">Software Engineer, 34</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            "Used it for work Slack convos with my difficult manager. The app caught that <span className="font-bold text-red-600">he was gaslighting me in 64% of our exchanges</span>—making me question my own competence. Armed with this data, I confidently switched teams. My new manager scores <span className="font-bold text-green-600">92% supportive communication</span>. Game changer for my career."
          </p>
          
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-purple-500">🎯</span>
              <span className="font-semibold">3 relationships analyzed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
          💕
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Priya Patel"
              className="rounded-full border-4 border-pink-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
              💚
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Priya Patel</h3>
            <p className="text-sm text-gray-500">Therapist, 31</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            "As a couples therapist, I recommend this to ALL my clients. One couple discovered they were <span className="font-bold text-red-600">both avoiding conflict</span> instead of addressing issues—their &apos;peace&apos; was actually avoidance. After 8 weeks using Red Flags + therapy, their <span className="font-bold text-green-600">healthy conflict resolution went from 12% to 78%</span>. This app is clinical gold."
          </p>
          
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-pink-500">👥</span>
              <span className="font-semibold">Recommends to 40+ clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Spans 2 columns on larger screens */}
      <div className="group relative bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                width={96} 
                height={96} 
                alt="Alex Rivera"
                className="rounded-2xl border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center text-xl shadow-lg">
                ⭐
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-white">
            <div className="mb-4">
              <h3 className="font-black text-2xl mb-1">Alex Rivera</h3>
              <p className="text-pink-100 font-medium">Creative Director, 27 • Premium Member</p>
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-300 text-2xl">★</span>
              ))}
            </div>
            
            <p className="text-lg leading-relaxed text-white/95 mb-6">
              "I thought I was the problem in ALL my relationships. Red Flags proved me wrong. The multi-relationship analysis showed <span className="font-black underline">my communication was 89% healthy across family and friends</span>, but dropped to 34% with romantic partners who had narcissistic traits. The app gave me <span className="font-black">specific patterns</span>: I was mirroring their manipulation tactics to &apos;keep the peace.&apos; Now I date with boundaries, and my relationship health score is consistently 85%+. Worth every penny of Premium."
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <div className="text-sm">
                  <div className="font-bold">7 relationships analyzed</div>
                  <div className="text-pink-100">Including family dynamics</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <div className="text-sm">
                  <div className="font-bold">6 months member</div>
                  <div className="text-pink-100">Active daily user</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <div className="text-sm">
                  <div className="font-bold">85% health score</div>
                  <div className="text-pink-100">Current relationship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
        <div className="flex -space-x-3">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" width={40} height={40} alt="User" className="rounded-full border-2 border-white" />
          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" width={40} height={40} alt="User" className="rounded-full border-2 border-white" />
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" width={40} height={40} alt="User" className="rounded-full border-2 border-white" />
          <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
            +2k
          </div>
        </div>
        <p className="text-gray-700 font-semibold">
          Join <span className="text-red-500">2,847 people</span> improving their relationships
        </p>
      </div>
    </div>
  </div>
</section>
  );
}