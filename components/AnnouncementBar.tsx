import { CheckCircle, Globe, Zap } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#511c84] text-white py-2.5 px-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-6">
        <span className="flex items-center gap-1.5 text-[10px] font-light tracking-wide">
          {/* <CheckCircle className="w-3.5 h-3.5" /> */}
          Verified Excellence
        </span>
        <span className="w-px h-3.5 bg-[#bc64ff]" />
        <span className="flex items-center gap-1.5 text-[10px] font-light tracking-wide">
          {/* <Globe className="w-3.5 h-3.5" /> */}
          Globally Recognized
        </span>
        <span className="w-px h-3.5 bg-[#bc64ff]" />
        <span className="flex items-center gap-1.5 text-[10px] font-light tracking-wide">
          {/* <Zap className="w-3.5 h-3.5" /> */}
          AI-First Training
        </span>
      </div>
    </div>
  );
}
