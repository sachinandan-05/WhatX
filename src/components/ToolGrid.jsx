import React, { useState, useEffect } from "react";
import { Wrench, MonitorSmartphone, Globe, Code2, ArrowRight, Zap, Star, TrendingUp } from "lucide-react";

const tools = [
  {
    name: "IP Checker",
    description: "Find your public IP address and geolocation instantly.",
    icon: Globe,
    href: "/tools/ip-checker",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    popular: true,
    tag: "Most Popular"
  },
  {
    name: "Screen Resolution",
    description: "Detect your current screen resolution and display info.",
    icon: MonitorSmartphone,
    href: "/tools/screen-resolution",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
    popular: false,
    tag: "Essential"
  },
  {
    name: "Browser Info",
    description: "Get comprehensive details about your browser and system.",
    icon: Code2,
    href: "/tools/browser-info",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
    popular: false,
    tag: "Developer"
  },
  {
    name: "User Agent",
    description: "View and analyze your browser's user-agent string.",
    icon: Wrench,
    href: "/tools/user-agent",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
    popular: false,
    tag: "Technical"
  },
];

export function ToolGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('tools-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleToolClick = (href) => {
    // Since we can't use react-router-dom in this environment, we'll use regular navigation
    window.location.href = href;
  };

  return (
    <section id="tools-section" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Instant Tools</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tools</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover essential system information with our collection of instant, privacy-focused tools.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-12">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div 
                className={`relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer group-hover:scale-105 ${tool.hoverColor}`}
                onClick={() => handleToolClick(tool.href)}
              >
                {/* Popular Badge */}
                {tool.popular && (
                  <div className="absolute -top-3 -right-3 flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    {tool.tag}
                  </div>
                )}

                {/* Category Tag */}
                {!tool.popular && (
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {tool.tag}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span className="mr-2">Try Now</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredTool === index ? 'translate-x-1' : ''
                  }`} />
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">Usage Statistics</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Developers Worldwide
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "Monthly Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "<100ms", label: "Response Time" },
              { number: "4.9/5", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-gray-600 mb-6">
            Need a custom tool? We're always adding new features!
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
            <span>Request a Tool</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}