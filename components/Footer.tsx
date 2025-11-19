'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Retail Business</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Transforming retail experiences with intelligent solutions that drive growth and customer loyalty.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.515 9.953 9.953 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16.5 7.5C16.5 5.57 14.93 4 13 4c-1.93 0-3.5 1.57-3.5 3.5S11.07 11 13 11s3.5-1.57 3.5-3.5M2.5 20v-5.5c0-1.933 1.567-3.5 3.5-3.5h12c1.933 0 3.5 1.567 3.5 3.5V20" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.766h3.554v1.381c-.009.015-.021.029-.033.042h.033v-.042c.431-.665 1.199-1.61 2.922-1.61 2.135 0 3.731 1.39 3.731 4.375v5.62zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.97-1.71 1.197 0 1.911.751 1.935 1.71 0 .951-.738 1.71-1.99 1.71zm1.582 11.597H3.635V9.541h3.284v10.911zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Inventory Management</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Point of Sale</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Customer Analytics</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Supply Chain</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Staff Training</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Home</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">About Us</a></li>
          <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Portfolio</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Careers</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get in Touch</h3>
        <div className="space-y-3 text-sm">
          <p>
            <span className="text-gray-400">Email:</span><br/>
            <a href="mailto:hello@retailbusiness.com" className="text-white hover:text-blue-400 transition-colors duration-200">hello@retailbusiness.com</a>
          </p>
          <p>
            <span className="text-gray-400">Phone:</span><br/>
            <a href="tel:+1-800-555-0123" className="text-white hover:text-blue-400 transition-colors duration-200">+1 (800) 555-0123</a>
          </p>
          <p>
            <span className="text-gray-400">Address:</span><br/>
            <span className="text-gray-300">123 Commerce Street<br/>New York, NY 10001</span>
          </p>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Retail Business. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}