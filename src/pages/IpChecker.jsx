import React, { useEffect, useState } from "react";
import { Globe, Copy, RefreshCw, Shield, MapPin } from "lucide-react";

const IpChecker = () => {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchIp = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    } catch (err) {
      setError("Failed to fetch IP address");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            IP Address Finder
          </h1>
          <p className="text-gray-600">
            Discover your public IP address instantly
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-8">
            {loading && (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">Detecting your IP...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-red-600 font-medium">{error}</p>
                <button
                  onClick={fetchIp}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && ip && (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border w-full max-w-xs mx-auto">
                  <p className="text-sm text-gray-500 mb-2">Your Public IP Address</p>
                  <p className="text-xl font-mono font-bold text-gray-800 tracking-wide p-2 m-3 break-words">
                    {ip}
                  </p>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-lg"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  
                  <button
                    onClick={fetchIp}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 hover:shadow-lg"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50/50 px-8 py-4 border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Your privacy is protected</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold text-gray-800 mb-1">What's an IP?</h3>
            <p className="text-gray-600">Your unique internet identifier</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold text-gray-800 mb-1">Public vs Private</h3>
            <p className="text-gray-600">This is your external IP address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpChecker;