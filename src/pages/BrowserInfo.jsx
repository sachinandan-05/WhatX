import React, { useState, useEffect } from "react";
import { Globe, Monitor, Copy, RefreshCw, Shield, Info, Chrome } from "lucide-react";

export const BrowserInfo = () => {
  const [browserData, setBrowserData] = useState({});
  const [copied, setCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getBrowserInfo = async () => {
    setIsRefreshing(true);
    
    // Add a small delay to show the animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const ua = navigator.userAgent;
    const platform = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    const language = navigator.language;
    const languages = navigator.languages;
    const vendor = navigator.userAgentData ? 
      (navigator.userAgentData.brands && navigator.userAgentData.brands[0] ? navigator.userAgentData.brands[0].brand : 'Unknown') :
      navigator.vendor || "Unknown";

    // Detect browser
    let browserName = "Unknown";
    let browserIcon = Globe;
    if (ua.includes("Chrome") && !ua.includes("Edg")) {
      browserName = "Chrome";
      browserIcon = Chrome;
    } else if (ua.includes("Firefox")) {
      browserName = "Firefox";
      browserIcon = Globe;
    } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
      browserName = "Safari";
      browserIcon = Globe;
    } else if (ua.includes("Edg")) {
      browserName = "Edge";
      browserIcon = Globe;
    }

    // Detect OS
    let osName = "Unknown";
    if (platform.includes("Win")) osName = "Windows";
    else if (platform.includes("Mac")) osName = "macOS";
    else if (platform.includes("Linux")) osName = "Linux";
    else if (platform.includes("Android")) osName = "Android";
    else if (platform.includes("iPhone") || platform.includes("iPad")) osName = "iOS";

    // Additional info
    const cookieEnabled = navigator.cookieEnabled;
    const onLine = navigator.onLine;
    const hardwareConcurrency = navigator.hardwareConcurrency || "Unknown";
    const deviceMemory = navigator.deviceMemory || "Unknown";
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    setBrowserData({
      ua,
      platform,
      language,
      languages,
      vendor,
      browserName,
      browserIcon,
      osName,
      cookieEnabled,
      onLine,
      hardwareConcurrency,
      deviceMemory,
      connection,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        colorDepth: window.screen.colorDepth
      }
    });
    
    setIsRefreshing(false);
  };

  useEffect(() => {
    getBrowserInfo();
  }, []);

  const copyUserAgent = () => {
    navigator.clipboard.writeText(browserData.ua);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const BrowserIcon = browserData.browserIcon || Globe;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4 shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Browser Detective
          </h1>
          <p className="text-gray-600">
            Comprehensive browser and system information
          </p>
        </div>

        {/* Main Browser Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <BrowserIcon className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-2xl font-bold text-gray-800">
              {browserData.browserName}
            </span>
            <span className="ml-3 text-lg text-gray-600">
              on {browserData.osName}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Browser Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-orange-100">Browser:</span>
                  <span className="font-semibold">{browserData.browserName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-100">Vendor:</span>
                  <span className="font-semibold">{browserData.vendor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-100">Platform:</span>
                  <span className="font-semibold">{browserData.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-100">Language:</span>
                  <span className="font-semibold">{browserData.language}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">System Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-yellow-100">OS:</span>
                  <span className="font-semibold">{browserData.osName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-100">CPU Cores:</span>
                  <span className="font-semibold">{browserData.hardwareConcurrency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-100">Memory:</span>
                  <span className="font-semibold">
                    {browserData.deviceMemory !== "Unknown" ? `${browserData.deviceMemory}GB` : "Unknown"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-100">Time Zone:</span>
                  <span className="font-semibold">{browserData.timeZone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Network Status */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-800">Network Status</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Online:</span>
                <span className={`font-semibold ${browserData.onLine ? 'text-green-600' : 'text-red-600'}`}>
                  {browserData.onLine ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cookies:</span>
                <span className={`font-semibold ${browserData.cookieEnabled ? 'text-green-600' : 'text-red-600'}`}>
                  {browserData.cookieEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              {browserData.connection && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Connection:</span>
                  <span className="font-semibold">{browserData.connection.effectiveType || 'Unknown'}</span>
                </div>
              )}
            </div>
          </div>

          {/* Screen Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800">Display Info</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Resolution:</span>
                <span className="font-semibold">
                  {browserData.screen && `${browserData.screen.width}×${browserData.screen.height}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color Depth:</span>
                <span className="font-semibold">
                  {browserData.screen && `${browserData.screen.colorDepth}-bit`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pixel Ratio:</span>
                <span className="font-semibold">{window.devicePixelRatio}x</span>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-800">Localization</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Primary:</span>
                <span className="font-semibold">{browserData.language}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 mb-1">All Languages:</span>
                <div className="text-sm">
                  {browserData.languages && browserData.languages.slice(0, 3).map((lang, index) => (
                    <span key={index} className="inline-block bg-gray-100 rounded px-2 py-1 mr-1 mb-1">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Agent Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">User Agent String</h3>
            <button
              onClick={copyUserAgent}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border">
            <code className="text-sm text-gray-800 break-all">
              {browserData.ua}
            </code>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="text-center mt-6">
          <button
            onClick={getBrowserInfo}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh Information'}
          </button>
        </div>
      </div>
    </div>
  );
};