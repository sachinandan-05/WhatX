import { useEffect, useState } from "react";
import { Monitor, Smartphone, Tablet, Copy, RefreshCw, Info, Eye } from "lucide-react";

export function ScreenResolution() {
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [screenInfo, setScreenInfo] = useState({});
  const [copied, setCopied] = useState(false);

  const updateResolution = () => {
    const newResolution = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    setResolution(newResolution);
    
    // Get additional screen information
    setScreenInfo({
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
      devicePixelRatio: window.devicePixelRatio,
      orientation: window.screen.orientation ? window.screen.orientation.type : 'unknown'
    });
  };

  useEffect(() => {
    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  const getDeviceType = () => {
    const width = resolution.width;
    if (width < 768) return { type: "Mobile", icon: Smartphone, color: "text-green-500" };
    if (width < 1024) return { type: "Tablet", icon: Tablet, color: "text-blue-500" };
    return { type: "Desktop", icon: Monitor, color: "text-purple-500" };
  };

  const getAspectRatio = () => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(resolution.width, resolution.height);
    return `${resolution.width / divisor}:${resolution.height / divisor}`;
  };

  const copyResolution = () => {
    navigator.clipboard.writeText(`${resolution.width} × ${resolution.height}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const device = getDeviceType();
  const DeviceIcon = device.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Intro / Rich Content for AdSense */}
        <div className="mb-6 text-gray-700">
          <h2 className="text-xl font-semibold">About this tool</h2>
          <p className="mt-2">This Screen Resolution Detector shows your current viewport and screen details, including pixel ratio and aspect ratio. It's helpful for developers and designers testing responsive layouts.</p>
          <h3 className="mt-3 font-semibold">How to use</h3>
          <p>Resize your browser window and this page will update automatically. Use the copy button to copy the current resolution.</p>
          <h3 className="mt-3 font-semibold">FAQ</h3>
          <p><strong>Q:</strong> Does this measure monitor resolution?<br/><strong>A:</strong> It reads the browser viewport and screen values exposed by the OS/browser.</p>
        </div>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Screen Resolution Detector
          </h1>
          <p className="text-gray-600">
            Real-time display information and viewport details
          </p>
        </div>

        {/* Main Resolution Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <DeviceIcon className={`w-8 h-8 ${device.color} mr-3`} />
            <span className={`text-xl font-semibold ${device.color}`}>
              {device.type} Device
            </span>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Current Viewport Resolution</p>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
              <div className="text-5xl font-mono font-bold mb-2">
                {resolution.width} × {resolution.height}
              </div>
              <div className="text-indigo-200 text-lg">
                Aspect Ratio: {getAspectRatio()}
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={copyResolution}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-200 hover:shadow-lg"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied!" : "Copy Resolution"}
              </button>
              
              <button
                onClick={updateResolution}
                className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-200 hover:shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Information Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Viewport Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-800">Viewport Details</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Width:</span>
                <span className="font-mono font-semibold">{resolution.width}px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Height:</span>
                <span className="font-mono font-semibold">{resolution.height}px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Pixels:</span>
                <span className="font-mono font-semibold">
                  {(resolution.width * resolution.height).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Aspect Ratio:</span>
                <span className="font-mono font-semibold">{getAspectRatio()}</span>
              </div>
            </div>
          </div>

          {/* Screen Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800">Screen Information</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Screen Size:</span>
                <span className="font-mono font-semibold">
                  {screenInfo.screenWidth} × {screenInfo.screenHeight}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available Size:</span>
                <span className="font-mono font-semibold">
                  {screenInfo.availWidth} × {screenInfo.availHeight}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color Depth:</span>
                <span className="font-mono font-semibold">{screenInfo.colorDepth}-bit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pixel Ratio:</span>
                <span className="font-mono font-semibold">{screenInfo.devicePixelRatio}x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resolution Categories */}
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Common Resolution Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="font-semibold text-green-700">Mobile</div>
              <div className="text-green-600">768px</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="font-semibold text-blue-700">Tablet</div>
              <div className="text-blue-600">768px - 1024px</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="font-semibold text-purple-700">Desktop</div>
              <div className="text-purple-600">1024px - 1920px</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
              <div className="font-semibold text-pink-700">4K+</div>
              <div className="text-pink-600">&gt; 1920px</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Resolution updates automatically when you resize your window</p>
        </div>
      </div>
    </div>
  );
}