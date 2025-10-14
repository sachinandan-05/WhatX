import React from "react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand/Logo Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-white font-semibold text-lg">What is My X</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="/contact" 
              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Contact
            </a>
            <a 
              href="/privacy" 
              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Privacy
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
         
            <a 
              href="https://github.com/sachinandan-05" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sachinandan-yadav-660115243/" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} What is My X. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span className="text-slate-500">by Sachinandan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}