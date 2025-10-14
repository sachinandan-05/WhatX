import React, { useState, useEffect } from "react";
import { Copy, Check, Monitor, Smartphone, Tablet, Globe } from "lucide-react";

export const UserAgent = () => {
  const [copied, setCopied] = useState(false);
  const [parsedInfo, setParsedInfo] = useState({});
  const userAgent = navigator.userAgent;

  useEffect(() => {
    // Parse user agent for common information
    const parseUserAgent = (ua) => {
      const info = {};
      
      // Browser detection
      if (ua.includes('Chrome') && !ua.includes('Edg')) info.browser = 'Chrome';
      else if (ua.includes('Firefox')) info.browser = 'Firefox';
      else if (ua.includes('Safari') && !ua.includes('Chrome')) info.browser = 'Safari';
      else if (ua.includes('Edg')) info.browser = 'Edge';
      else if (ua.includes('Opera')) info.browser = 'Opera';
      else info.browser = 'Unknown';

      // OS detection
      if (ua.includes('Windows')) info.os = 'Windows';
      else if (ua.includes('Mac')) info.os = 'macOS';
      else if (ua.includes('Linux')) info.os = 'Linux';
      else if (ua.includes('Android')) info.os = 'Android';
      else if (ua.includes('iOS')) info.os = 'iOS';
      else info.os = 'Unknown';

      // Device type
      if (ua.includes('Mobile')) info.device = 'Mobile';
      else if (ua.includes('Tablet')) info.device = 'Tablet';
      else info.device = 'Desktop';

      return info;
    };

    setParsedInfo(parseUserAgent(userAgent));
  }, [userAgent]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userAgent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getDeviceIcon = (device) => {
    switch (device) {
      case 'Mobile': return <Smartphone className="w-5 h-5" />;
      case 'Tablet': return <Tablet className="w-5 h-5" />;
      case 'Desktop': return <Monitor className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            User Agent Detective
          </h1>
          <p className="text-gray-600 text-lg">
            Discover what your browser reveals about you
          </p>
        </div>

        {/* Info Cards */}
        <div className="bg-white/70 rounded-xl p-6 text-gray-700">
          <h3 className="font-semibold text-lg mb-2">About this tool</h3>
          <p>This page reveals the raw user agent string sent by your browser and provides a parsed summary of your browser, OS, and device type.</p>
          <h4 className="mt-3 font-semibold">How to use</h4>
          <ol className="list-decimal ml-6">
            <li>View the parsed summary above.</li>
            <li>Copy the raw user agent string for debugging or reports.</li>
            <li>Consider using private browsing or privacy tools to reduce fingerprinting.</li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Browser</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">{parsedInfo.browser}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Monitor className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Operating System</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-600">{parsedInfo.os}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-violet-100 rounded-lg">
                {getDeviceIcon(parsedInfo.device)}
              </div>
              <h3 className="font-semibold text-gray-800">Device Type</h3>
            </div>
            <p className="text-2xl font-bold text-violet-600">{parsedInfo.device}</p>
          </div>
        </div>

        {/* User Agent String */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Raw User Agent String</h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          
          <div className="relative">
            <pre className="text-sm text-gray-700 bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300 whitespace-pre-wrap break-all leading-relaxed font-mono">
              {userAgent}
            </pre>
            <div className="absolute top-2 right-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-md font-medium">
              {userAgent.length} characters
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 text-amber-600 mt-1">⚠️</div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Privacy Note</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Your user agent string contains information about your browser, operating system, and device. 
                This data is automatically sent to websites you visit and can be used for tracking and fingerprinting. 
                Consider using privacy-focused browsers or extensions to limit this information sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="text-gray-500 text-sm">
            User agent information is parsed locally in your browser
          </p>
        </div>
      </div>
    </div>
  );
};